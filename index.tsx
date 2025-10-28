import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import LineUpPage from './pages/LineUp';
import ArtistsPage from './pages/Artists';
import CartelPage from './pages/Cartel';
import HorariosPage from './pages/Horarios';
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
        path: 'lineup',
        element: <LineUpPage />,
      },
      {
        path: 'lineup/artistas',
        element: <ArtistsPage />,
      },
      {
        path: 'lineup/cartel',
        element: <CartelPage />,
      },
      {
        path: 'lineup/horarios',
        element: <HorariosPage />,
      },
      {
        path: 'info',
        element: <InfoPage />,
      },
      {
        path: 'tickets',
        element: <TicketsPage />,
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