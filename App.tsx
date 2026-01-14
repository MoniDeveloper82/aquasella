import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { trackPageView } from './src/analytics';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isShopPage = location.pathname === '/shop';

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view solo si cookies aceptadas
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      trackPageView(location.pathname);
    }
  }, [location]);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isHomePage || isShopPage ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      {!isShopPage && <Footer />}
      <CookieBanner />
    </div>
  );
};

export default App;