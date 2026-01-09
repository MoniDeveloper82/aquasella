import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isShopPage = location.pathname === '/shop';
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isHomePage || isShopPage ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      {!isShopPage && <Footer />}
    </div>
  );
};

export default App;