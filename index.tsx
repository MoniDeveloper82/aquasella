import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import LineUpPage from './pages/LineUp';
import ArtistsPage from './pages/Artists';
import CartelPage from './pages/Cartel';
import CartelCompleto from './pages/cartel/CartelCompleto';
import CartelPorDias from './pages/cartel/CartelPorDias';
import CartelPorEscenariosYDia from './pages/cartel/CartelPorEscenariosYDia';
import HorariosPage from './pages/Horarios';
import InfoPage from './pages/Info';
import TicketsPage from './pages/Tickets';
import VentaGeneral from './pages/tickets/VentaGeneral';
import BonoCultural from './pages/tickets/BonoCultural';
import UpgradesGeneral from './pages/tickets/UpgradesGeneral';
import UpgradesBono from './pages/tickets/UpgradesBono';
import Glamping from './pages/tickets/Glamping';
import Lockers from './pages/tickets/Lockers';
import Baterias from './pages/tickets/Baterias';
import BusOficial from './pages/tickets/BusOficial';
import PackMadrid from './pages/tickets/PackMadrid';
import PackAsturias from './pages/tickets/PackAsturias';
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
        path: 'lineup/cartel/completo',
        element: <CartelCompleto />,
      },
      {
        path: 'lineup/cartel/dias',
        element: <CartelPorDias />,
      },
      {
        path: 'lineup/cartel/escenarios',
        element: <CartelPorEscenariosYDia />,
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
        path: 'tickets/venta-general',
        element: <VentaGeneral />,
      },
      {
        path: 'tickets/bono-cultural',
        element: <BonoCultural />,
      },
      {
        path: 'tickets/upgrades-general',
        element: <UpgradesGeneral />,
      },
      {
        path: 'tickets/upgrades-bono',
        element: <UpgradesBono />,
      },
      {
        path: 'tickets/glamping',
        element: <Glamping />,
      },
      {
        path: 'tickets/lockers',
        element: <Lockers />,
      },
      {
        path: 'tickets/baterias',
        element: <Baterias />,
      },
      {
        path: 'tickets/bus-oficial',
        element: <BusOficial />,
      },
      {
        path: 'tickets/pack-madrid',
        element: <PackMadrid />,
      },
      {
        path: 'tickets/pack-asturias',
        element: <PackAsturias />,
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