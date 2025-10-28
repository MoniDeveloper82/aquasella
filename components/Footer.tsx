
import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: TwitterIcon, href: '#', label: 'Twitter' },
    { Icon: InstagramIcon, href: '#', label: 'Instagram' },
    { Icon: FacebookIcon, href: '#', label: 'Facebook' },
    { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
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
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
                <img 
                  src="/img/HEADER_2.png" 
                  alt="Aquasella Festival Logo"
                  className="h-12 md:h-16 lg:h-20 w-auto filter brightness-110 contrast-110"
                />
                <p className="text-gray-400">El corazón de la música electrónica en el norte de España.</p>
                <div className="flex space-x-6">
                 {socialLinks.map(({ Icon, href, label }) => (
                     <a key={label} href={href} className="text-gray-400 hover:text-rose-400 transition-colors" aria-label={label}>
                        <Icon className="h-6 w-6" />
                    </a>
                 ))}
                </div>
            </div>

            <div>
                <h4 className="font-bold text-lg text-white uppercase tracking-wider">Newsletter</h4>
                <p className="text-gray-400 mt-2">Recibe las últimas noticias y ofertas exclusivas.</p>
                <form className="mt-4 flex">
                    <input type="email" placeholder="tu.email@ejemplo.com" className="w-full bg-gray-800 border border-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                    <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-4 py-2 rounded-r-md transition-colors">
                        Suscribir
                    </button>
                </form>
            </div>

             <div>
                <h4 className="font-bold text-lg text-white uppercase tracking-wider">Legal</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              {/* <li><a href="#" className="hover:text-sky-400 transition-colors">Términos y Condiciones</a></li> */}
              <li><Link to="/privacy" className="hover:text-rose-400 transition-colors">Política de Privacidad</Link></li>
                    <li><Link to="/cookies" className="hover:text-rose-400 transition-colors">Política de Cookies</Link></li>
                    <li><Link to="/legal" className="hover:text-sky-400 transition-colors">Aviso Legal</Link></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Contacto</a></li>
            </ul>
            </div>
        </div>

        <div className="mt-12 pt-8 text-center text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Aquasella Festival. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;