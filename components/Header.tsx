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
                  src="/img/FOTOPERFIL_AQS.png" 
                  alt="Aquasella"
                  className="h-28 lg:h-32 xl:h-36 w-auto"
                />
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12 lg:space-x-16 xl:space-x-20 header-nav">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) => {
                    // If the link is 'INICIO' use a silver hover; otherwise keep red hover
                    const hoverClass = link.label === 'INICIO' ? 'hover:text-[#cfcfcf]' : 'hover:text-rose-600';
                    const extra = link.label === 'INICIO' ? ' silver-hover' : '';
                    return `text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-rose-600' : `text-gray-300 ${hoverClass}`} ${extra}`;
                  }}
                >
                    {link.label === 'LINE UP' ? (
                      <img src="/img/letra.png" alt="LINE UP" className="inline-block h-14 lg:h-16 xl:h-20 letra-img" />
                    ) : link.label === 'INFO' ? (
                      <img src="/img/info.png" alt="INFO" className="inline-block h-14 lg:h-16 xl:h-20 info-img" />
                    ) : link.label === 'TICKETS' ? (
                      <img src="/img/tickets.png" alt="TICKETS" className="inline-block h-14 lg:h-16 xl:h-20 tickets-img" />
                    ) : link.label === 'SHOP' ? (
                      <img src="/img/shop.png" alt="SHOP" className="inline-block h-14 lg:h-16 xl:h-20 shop-img" />
                    ) : link.label === 'INICIO' ? (
                      <img src="/img/inicio.png" alt="INICIO" className="inline-block h-14 lg:h-16 xl:h-20 inicio-img" />
                    ) : (
                      link.label
                    )}
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
      {/* Banner just under the fixed header: use top margin to account for fixed header height */}
      <div className="mt-32 lg:mt-36 xl:mt-40">
        <Banner />
      </div>
      
      {/* Halo de luz debajo del header */}
      <div className="fixed top-32 lg:top-36 xl:top-40 left-0 right-0 h-16 bg-gradient-to-b from-red-500/50 via-red-600/35 to-transparent blur-md z-40"></div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black z-50 flex flex-col justify-start pt-32 px-8 animate-fade-in md:hidden"
        >
          <div className="flex flex-col space-y-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={({ isActive }) => {
                  const hoverClass = link.label === 'INICIO' ? 'hover:text-[#cfcfcf]' : 'hover:text-rose-600';
                  return `text-white text-3xl font-bold uppercase tracking-wide transition-colors duration-300 border-b border-gray-700 pb-4 ${isActive ? 'text-rose-600' : `${hoverClass}`}`;
                }}
              >
                {link.label === 'LINE UP' ? (
                  <span>LINE UP</span>
                ) : link.label === 'INFO' ? (
                  <span>INFO</span>
                ) : link.label === 'TICKETS' ? (
                  <span>TICKETS</span>
                ) : link.label === 'SHOP' ? (
                  <span>SHOP</span>
                ) : link.label === 'INICIO' ? (
                  <span>INICIO</span>
                ) : (
                  link.label
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      
      {/* ensure silver hover shows even if the link is active (higher specificity) */}
      <style>{`
        /* Ensure each nav link centers its content (text or image) vertically */
        .header-nav a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem; /* small spacing if a label is present */
          line-height: 1;
        }
        /* Make images behave predictably inside inline-flex containers */
        .header-nav a img,
        .header-nav img {
          display: block;
          vertical-align: middle;
        }

        .header-nav .silver-hover:hover {
          color: #cfcfcf !important;
        }
        /* Hover effect for LINE UP image */
        .header-nav .letra-img {
          transition: transform 180ms ease, filter 220ms ease;
          will-change: transform, filter;
          /* ensure the image renders crisply when transformed */
          transform-origin: center;
          display: block;
        }
        /* Default subtle state so the hover red stands out */
        .header-nav .letra-img,
        .header-nav .info-img,
        .header-nav .tickets-img,
        .header-nav .shop-img,
        .header-nav .inicio-img {
          filter: grayscale(30%) brightness(0.95);
        }

        /* Nudge tickets/shop images slightly upward so they visually line up with the others */
        .header-nav .tickets-img,
        .header-nav .shop-img {
          transform: translateY(-3px);
        }

        /* When hovering the link or the image, tint the image red strongly and add a glow */
        .header-nav a:hover .letra-img,
        .header-nav .letra-img:hover,
        .header-nav a:hover .info-img,
        .header-nav .info-img:hover,
        .header-nav a:hover .tickets-img,
        .header-nav .tickets-img:hover,
        .header-nav a:hover .shop-img,
        .header-nav .shop-img:hover {
          /* keep the small upward nudge for tickets/shop while scaling */
          transform: translateY(-3px) scale(1.08);
          /* stronger red tint using sepia+hue and an added red glow via drop-shadow */
          filter: sepia(1) saturate(6) hue-rotate(-15deg) brightness(0.95) contrast(1.05) drop-shadow(0 0 12px rgba(255,60,60,0.9));
        }

        /* INICIO: silver/tin hover effect instead of red */
        .header-nav a:hover .inicio-img,
        .header-nav .inicio-img:hover {
          transform: scale(1.06);
          /* desaturate for a silver look, brighten slightly and add a subtle white glow */
          filter: saturate(0) brightness(1.25) contrast(1.05) drop-shadow(0 0 10px rgba(255,255,255,0.65));
        }

        /* Slightly different scaling on small screens */
        @media (max-width: 767px) {
          .header-nav a:hover .letra-img,
          .header-nav .letra-img:hover,
          .header-nav a:hover .info-img,
          .header-nav .info-img:hover,
          .header-nav a:hover .tickets-img,
          .header-nav .tickets-img:hover,
          .header-nav a:hover .shop-img,
          .header-nav .shop-img:hover {
            transform: translateY(-2px) scale(1.04);
          }
        }
      `}</style>
    </>
  );
};

export default Header;