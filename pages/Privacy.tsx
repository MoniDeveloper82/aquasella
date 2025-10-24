import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300">
        <h1 className="text-3xl font-black text-white mb-6">POLÍTICA DE PRIVACIDAD</h1>

        <p className="mb-4">AZURASA 21, SL (en adelante, la Compañía), manifiesta su respeto y cumplimiento de las disposiciones recogidas en la Ley Orgánica 15/1999, de 13 de Diciembre, de Protección de Datos de Carácter Personal. Por ello, le informa de su política de protección de datos para que Usted determine voluntariamente si desea facilitar sus datos personales a la Compañía.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-2">1. Recogida y uso de datos</h2>
        <p className="mb-4">La Compañía le informa que sus datos personales recogidos a través de las páginas web https://www.aquasella.com (en adelante, el Portal), así como los que pudiera facilitar en el futuro en el marco de su relación con esta entidad, serán objeto de tratamiento con la finalidad de hacer posible el registro de los usuarios, gestionar, administrar y prestarle los servicios o productos que solicite o contrate a través del Portal, facilitar el cumplimiento y ejecución de dichos servicios, conocer mejor sus gustos y opiniones respecto a los servicios de la Compañía y adecuar los mismos a sus preferencias, así como poder ofrecerle nuevos servicios y enviarle información comercial, incluso por vía electrónica, relacionada con las novedades y promociones de la Compañía.</p>

        <p className="mb-4">Siempre que se solicite, y el Usuario facilite, una dirección de correo electrónico, teléfono móvil u otro medio de comunicación electrónica, el Usuario expresamente acepta y autoriza que dichos medios sean utilizados preferentemente como canal de comunicación, como canal para cumplir todas o alguna de las finalidades anteriormente informadas así como canal a través del cual poderle informar de cualesquiera otros cambios relevantes que se produzcan en el Portal.</p>

        <p className="mb-4">Salvo en los campos en que expresamente se determine lo contrario, las respuestas a las preguntas sobre datos personales son voluntarias, sin que la falta de contestación a dichas preguntas implique una merma en la calidad de los servicios que usted solicita. La falta de cumplimentación de los campos determinados como obligatorios o el suministro de datos incorrectos imposibilitará que la Compañía pueda prestarle los servicios que solicite.</p>

        <p className="mb-4">Para poder registrarse y navegar por el Portal usted debe ser mayor de 14 años. La Compañía podrá utilizar su información personal para verificar su edad y garantizar el cumplimiento de esta restricción.</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-2">2. Cookies</h2>
        <p className="mb-4">En la búsqueda de total transparencia en su relación con el usuario, la Compañía le informa de la utilización en el Portal de otros mecanismos informáticos relacionados con los datos personales, como son cookies y logs. A tal efecto, les requerimos para que accedan a nuestra Política de Cookies (más abajo).</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-2">3. Contacto</h2>
        <p className="mb-4">Usted tiene reconocidos los derechos de acceso, rectificación, cancelación y oposición (A.R.C.O) los cuales podrá ejercitar dirigiendo una comunicación postal, y fotocopia del DNI/Pasaporte, con el asunto “Protección de Datos” a la siguiente dirección:<br />
        AZURASA 21 S.L,CIF B-74417858,C/ Doctor Casal, nº4,3ºD,33001 Oviedo (Asturias).</p>

        <h2 className="text-xl font-bold text-white mt-6 mb-2">4. Política de Cookies</h2>
        <h3 className="font-semibold text-white mt-2">¿Qué son las cookies?</h3>
        <p className="mb-4">Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre hábitos de navegación de un usuario o un equipo y, dependiendo de la información que contengan y de la forma que utilice su equipo, pueden utilizarse para conocer al usuario.</p>

        <h3 className="font-semibold text-white mt-2">¿Para qué utiliza las cookies esta página web y cuáles son?</h3>
        <p className="mb-4">Esta página web utiliza las cookies para la siguiente finalidad:</p>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          <li><strong>Análisis:</strong> son aquellas cookies que bien, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la experiencia del usuario. (cookies: _utma, _utmb, _utmc, _utmz).</li>
        </ul>

        <h3 className="font-semibold text-white mt-2">¿Cómo puedo desactivar o eliminar las cookies?</h3>
        <p className="mb-4">Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Firefox: <a className="text-sky-400 hover:underline" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noreferrer">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</a></li>
          <li>Chrome: <a className="text-sky-400 hover:underline" href="https://support.google.com/accounts/answer/61416?hl=es" target="_blank" rel="noreferrer">https://support.google.com/accounts/answer/61416?hl=es</a></li>
          <li>Explorer: <a className="text-sky-400 hover:underline" href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9" target="_blank" rel="noreferrer">http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9</a></li>
          <li>Otros navegadores: consulte la documentación del navegador que tenga instalado.</li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPage;
