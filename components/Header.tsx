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
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const headerClass = !isHomePage || scrolled || isMenuOpen
    ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg'
    : 'bg-transparent';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerClass}`}>
        <nav
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
            <div className="flex-shrink-0">
              <NavLink 
                to="/" 
                className="text-2xl font-black text-white uppercase tracking-wider text-glow cursor-pointer"
                onClick={handleLinkClick}
              >
                AQUASELLA
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-sky-400' : 'text-gray-300 hover:text-sky-400'
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <MenuIcon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
           {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `text-3xl font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-sky-400' : 'text-gray-300 hover:text-sky-400'
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