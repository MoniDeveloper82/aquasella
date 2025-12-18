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
import BonoCulturalJoven from './pages/tickets/BonoCulturalJoven';
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
import ZonaDescansoPage from './pages/info/ZonaDescanso';
import InfoGlampingPage from './pages/info/InfoGlamping';
import InfoLockersPage from './pages/info/InfoLockers';
import InfoBateriasPage from './pages/info/InfoBaterias';
import TourOnTheRoadPage from './pages/info/TourOnTheRoad';
import LocalizacionPage from './pages/info/Localizacion';
import PlanoPage from './pages/info/Plano';
import ColaboradoresPage from './pages/info/Colaboradores';
import HistoriaPage from './pages/info/Historia';
import ShopPage from './pages/Shop';
import PrivacyPage from './pages/Privacy';
import CookiesPage from './pages/Cookies';
import LegalPage from './pages/Legal';
import VentaPlazosPage from './pages/tickets/VentaPlazos';

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
        path: 'info/zona-descanso',
        element: <ZonaDescansoPage />,
      },
      {
        path: 'info/glamping',
        element: <InfoGlampingPage />,
      },
      {
        path: 'info/lockers',
        element: <InfoLockersPage />,
      },
      {
        path: 'info/baterias',
        element: <InfoBateriasPage />,
      },
      {
        path: 'info/tour-on-the-road',
        element: <TourOnTheRoadPage />,
      },
      {
        path: 'info/localizacion',
        element: <LocalizacionPage />,
      },
      {
        path: 'info/plano',
        element: <PlanoPage />,
      },
      {
        path: 'info/colaboradores',
        element: <ColaboradoresPage />,
      },
      {
        path: 'info/historia',
        element: <HistoriaPage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
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
        element: <BonoCulturalJoven />,
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
        path: 'tickets/venta-plazos',
        element: <VentaPlazosPage />,
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