# Script para subir archivos via FTP recursivamente
param(
    [string]$ftpServer = "ftp://aquasella.com",
    [string]$user = "uaquasella",
    [string]$pass = "bovokCyd",
    [string]$localPath = "C:\Users\alben\Downloads\aquasella\dist",
    [string]$remotePath = "/httpdocs_html/prueba-monica/"
)

function Create-FtpDirectory {
    param(
        [string]$ftpPath
    )
    try {
        $ftpRequest = [System.Net.FtpWebRequest]::Create($ftpPath)
        $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($user, $pass)
        $ftpRequest.GetResponse() | Out-Null
        Write-Host "Directorio creado: $ftpPath"
    } catch {
        # Si ya existe, ignorar
        if ($_.Exception.Message -notmatch "550") {
            Write-Host "Error creando directorio $ftpPath : $_"
        }
    }
}

function Upload-File {
    param(
        [string]$localFile,
        [string]$remoteFile
    )
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Credentials = New-Object System.Net.NetworkCredential($user, $pass)
        $webClient.UploadFile($remoteFile, $localFile)
        Write-Host "Subido: $localFile -> $remoteFile"
    } catch {
        Write-Host "Error subiendo $localFile : $_"
    }
}

function Upload-Directory {
    param(
        [string]$localDir,
        [string]$remoteDir
    )
    $allDirs = @()
    $files = @()
    $items = Get-ChildItem -Path $localDir -Recurse
    foreach ($item in $items) {
        $relativePath = $item.FullName.Substring($localPath.Length).Replace("\", "/")
        $remoteItemPath = $remotePath.TrimEnd("/") + $relativePath
        if ($item.PSIsContainer) {
            $allDirs += $remoteItemPath
        } else {
            $files += @{
                Local = $item.FullName
                Remote = $ftpServer + $remoteItemPath
                Dir = [System.IO.Path]::GetDirectoryName($remoteItemPath).Replace("\", "/")
            }
        }
    }
    # Crear directorios en orden de profundidad
    $allDirs | Sort-Object { $_.Split('/').Count } | ForEach-Object {
        $fullDirPath = $ftpServer + $_
        Create-FtpDirectory -ftpPath $fullDirPath
    }
    # Subir archivos
    foreach ($file in $files) {
        Upload-File -localFile $file.Local -remoteFile $file.Remote
    }
}

Upload-Directory -localDir $localPath -remoteDir $remotePath
