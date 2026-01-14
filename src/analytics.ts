// Reemplaza con tu Measurement ID real de Google Analytics
const GA_MEASUREMENT_ID = 'G-6LS29WRZ3L'; // Cambia esto por tu ID real

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const initGA = () => {
  window.gtag('config', GA_MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

export const enableGA = () => {
  // Habilitar tracking removiendo la flag de disable
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  initGA();
};

export const disableGA = () => {
  // Deshabilitar tracking
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
};