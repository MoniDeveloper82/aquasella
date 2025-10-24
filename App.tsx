import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isHomePage ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;