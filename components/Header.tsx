import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XMarkIcon } from './icons';
import Banner from './Banner';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial render to set the correct state
    } else {
      setScrolled(true); // For non-home pages, header should always be solid
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/', label: 'INICIO' },
    { to: '/lineup', label: 'LINE UP' },
    { to: '/info', label: 'INFO' },
    { to: '/tickets', label: 'TICKETS' },
    { to: '/shop', label: 'SHOP' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const headerClass = !isHomePage || scrolled || isMenuOpen
    ? 'bg-black/95 backdrop-blur-sm shadow-lg'
    : 'bg-transparent';

  return (
    <>
      {/* Video de fondo solo en móvil */}
      <div className="absolute top-0 left-0 w-full h-24 lg:h-28 xl:h-32 overflow-hidden z-0">
        <video
          className="w-full h-full object-cover"
          src={"/videos/hederDefinitivo.mp4?v=" + Date.now()}
          key={"hederDefinitivo-" + Date.now()}
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/heder_fallback.gif"
        />
      </div>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerClass}`}>
        <nav
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-24 lg:h-28 xl:h-32 max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <NavLink 
                to="/" 
                className="cursor-pointer"
                onClick={handleLinkClick}
              >
                <img 
                  src="/img/FOTOPERFIL_AQS.png" 
                  alt="Aquasella"
                  className="h-20 lg:h-24 xl:h-28 w-auto"
                />
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-5 header-nav">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) => {
                    // If the link is 'INICIO' use a silver hover; otherwise keep red hover
                    const hoverClass = link.label === 'INICIO' ? 'hover:text-[#cfcfcf]' : 'hover:text-rose-600';
                    const extra = link.label === 'INICIO' ? ' silver-hover' : '';
                    return `text-base lg:text-lg xl:text-xl font-semibold uppercase tracking-tight transition-all duration-300 transform hover:scale-105 ${isActive ? 'text-rose-600' : `text-gray-300 ${hoverClass}`} ${extra}`;
                  }}
                  style={{ fontFamily: 'ClashDisplay, sans-serif' }}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-4 lg:p-5 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label="Toggle main menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-10 w-10 lg:h-12 lg:w-12" />
                ) : (
                  <MenuIcon className="block h-10 w-10 lg:h-12 lg:w-12" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* Banner just under the fixed header: use top margin to account for fixed header height */}
      <div className="mt-24 lg:mt-28 xl:mt-32">
        <Banner />
      </div>
      
      {/* Halo de luz debajo del header */}
      <div className="fixed top-24 lg:top-28 xl:top-32 left-0 right-0 h-16 bg-gradient-to-b from-red-500/50 via-red-600/35 to-transparent blur-md z-40"></div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col justify-start pt-24 px-8 animate-fade-in md:hidden"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={({ isActive }) => {
                  const hoverClass = link.label === 'INICIO' ? 'hover:text-[#cfcfcf] mobile-silver-hover' : 'hover:text-rose-600';
                  const extra = link.label === 'INICIO' ? ' mobile-silver-hover' : '';
                  return `text-xl font-semibold uppercase tracking-tight transition-all duration-300 transform hover:scale-105 border-b border-gray-700 pb-3 mobile-nav-item ${isActive ? 'text-rose-600' : `text-gray-300 ${hoverClass}`} ${extra}`;
                }}
                style={{ fontFamily: 'ClashDisplay, sans-serif' }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      
      {/* ensure silver hover shows even if the link is active (higher specificity) */}
      <style>{`
        .header-nav a {
          display: inline-flex;
          align-items: center;
          line-height: 1;
          font-family: 'ClashDisplay', sans-serif;
        }

        .header-nav .silver-hover:hover {
          color: #cfcfcf !important;
        }

        /* Efecto de brillo para el texto del menú desktop */
        .header-nav a:hover {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.8);
        }

        .header-nav .silver-hover:hover {
          text-shadow: 0 0 10px rgba(207, 207, 207, 0.8);
        }

        /* Estilos para el menú móvil - mismos efectos que desktop */
        .mobile-nav-item {
          font-family: 'ClashDisplay', sans-serif;
        }

        /* Efecto de brillo para el menú móvil */
        .mobile-nav-item:hover {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.8);
        }

        /* Efecto plateado para INICIO en móvil */
        .mobile-silver-hover:hover {
          color: #cfcfcf !important;
          text-shadow: 0 0 10px rgba(207, 207, 207, 0.8) !important;
        }
      `}</style>
    </>
  );
};

export default Header;