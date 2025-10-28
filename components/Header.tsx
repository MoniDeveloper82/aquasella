import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XMarkIcon } from './icons';

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
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerClass}`}>
        <nav
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-32 lg:h-36 xl:h-40 max-w-7xl mx-auto">
            <div className="flex-shrink-0">
              <NavLink 
                to="/" 
                className="cursor-pointer"
                onClick={handleLinkClick}
              >
                <img 
                  src="/img/PINOS_LOGOOP2.png" 
                  alt="Pinos"
                  className="h-28 lg:h-32 xl:h-36 w-auto"
                />
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12 lg:space-x-16 xl:space-x-20">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                    }`
                  }
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
                aria-expanded={isMenuOpen ? "true" : "false"}
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
      
      {/* Halo de luz debajo del header */}
      <div className="fixed top-32 lg:top-36 xl:top-40 left-0 right-0 h-16 bg-gradient-to-b from-red-500/50 via-red-600/35 to-transparent blur-md z-40"></div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-pink-900/95 z-40 flex flex-col items-center justify-center space-y-12 animate-fade-in md:hidden">
           {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `text-4xl font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
        </div>
      )}
    </>
  );
};

export default Header;