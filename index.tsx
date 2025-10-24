import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import ArtistsPage from './pages/Artists';
import InfoPage from './pages/Info';
import TicketsPage from './pages/Tickets';
import CampingPage from './pages/services/Camping';
import HowToGetTherePage from './pages/services/HowToGetThere';
import AllowedItemsPage from './pages/services/AllowedItems';
import PrivacyPage from './pages/Privacy';
import CookiesPage from './pages/Cookies';
import LegalPage from './pages/Legal';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'artistas',
        element: <ArtistsPage />,
      },
      {
        path: 'info',
        element: <InfoPage />,
      },
      {
        path: 'services',
        children: [
          { path: 'camping', element: <CampingPage /> },
          { path: 'how-to-get-there', element: <HowToGetTherePage /> },
          { path: 'allowed-items', element: <AllowedItemsPage /> },
        ],
      },
      {
        path: 'legal',
        element: <LegalPage />,
      },
      {
        path: 'cookies',
        element: <CookiesPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'tickets',
        element: <TicketsPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);