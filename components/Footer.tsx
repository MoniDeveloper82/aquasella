
import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: InstagramIcon, href: 'https://www.instagram.com/aquasellafest/?hl=es', label: 'Instagram', target: '_blank', rel: 'noopener noreferrer' },
    { Icon: FacebookIcon, href: 'https://www.facebook.com/aquasellafest', label: 'Facebook', target: '_blank', rel: 'noopener noreferrer' },
    { Icon: YoutubeIcon, href: 'https://www.youtube.com/user/AquasellaChannel', label: 'YouTube', target: '_blank', rel: 'noopener noreferrer' },
  ];
  return (
    <footer
      className="relative"
      style={{
        backgroundImage: `url('/img/footer.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 70%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* filtro negro */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
                <img 
                  src="/img/AQS.png" 
                  alt="Aquasella Festival Logo"
                  className="h-40"
                />
                <p>El corazón de la música electrónica en el norte de España.</p>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-300 mb-3">Síguenos en nuestras redes sociales</p>
                  <div className="flex justify-center space-x-6">
                   {socialLinks.map(({ Icon, href, label, target, rel }) => (
                       <a
                         key={label}
                         href={href}
                         className="text-gray-400 hover:text-rose-400 transition-colors"
                         aria-label={label}
                         target={target}
                         rel={rel}
                       >
                          <Icon className="h-8 w-8 text-white" />
                      </a>
                   ))}
                  </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-lg text-white uppercase tracking-wider">Newsletter</h4>
                <p className="mt-2">Recibe las últimas noticias y ofertas exclusivas.</p>
                <form className="mt-4 flex">
                    <input type="email" placeholder="tu.email@ejemplo.com" className="w-full bg-gray-800 border border-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-r-md transition-colors">
                        Suscribir
                    </button>
                </form>
            </div>

             <div>
                <h4 className="font-bold text-lg text-white uppercase tracking-wider">Legal</h4>
            <ul className="mt-2 space-y-2">
              {/* <li><a href="#" className="hover:text-sky-400 transition-colors">Términos y Condiciones</a></li> */}
              <li><Link to="/privacy" className="hover:text-rose-400 transition-colors">Política de Privacidad</Link></li>
                    <li><Link to="/cookies" className="hover:text-rose-400 transition-colors">Política de Cookies</Link></li>
                    <li><Link to="/legal" className="hover:text-sky-400 transition-colors">Aviso Legal</Link></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Contacto</a></li>
            </ul>
            </div>
        </div>

        <div className="mt-12 pt-8 text-center text-gray-200 text-sm">
          <p className="text-white">&copy; {new Date().getFullYear()} Aquasella Festival. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;