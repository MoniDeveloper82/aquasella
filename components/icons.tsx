import React from 'react';

// Props for all icons
interface IconProps {
  className?: string;
}

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const CarIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 0 .094-1.612l3.4-6.817a3.375 3.375 0 0 1 2.924-1.875h4.156a3.375 3.375 0 0 1 2.924 1.875l3.4 6.817a3.375 3.375 0 0 0 .094 1.612v1.875m-17.25 4.5h15M6 10.5h12v-1.5H6v1.5Z" />
    </svg>
);

export const TrainIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5h1.5m1.5 0h1.5m1.5 0h1.5m1.5 0h1.5m1.5 0h1.5m1.5 0h1.5m-16.5 6h18m-18 0a1.5 1.5 0 0 1-1.5-1.5v-3.75a1.5 1.5 0 0 1 1.5-1.5h18a1.5 1.5 0 0 1 1.5 1.5v3.75a1.5 1.5 0 0 1-1.5 1.5m-18 0h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5v-3.75a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.5v-6.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v6.75" />
    </svg>
);

export const BusIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9.75a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v9.75m-16.5 0h16.5" />
    </svg>
);

export const AllowedIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const ForbiddenIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46,6C21.71,6.33 20.91,6.55 20.06,6.66C20.91,6.13 21.56,5.32 21.88,4.31C21.09,4.79 20.23,5.16 19.33,5.38C18.59,4.59 17.5,4 16.31,4C14.04,4 12.17,5.88 12.17,8.15C12.17,8.47 12.21,8.79 12.28,9.1C8.2,8.89 4.67,7.03 2.18,4.35C1.83,4.95 1.63,5.66 1.63,6.4C1.63,7.88 2.38,9.2 3.53,9.97C2.86,9.95 2.22,9.76 1.68,9.44C1.68,9.46 1.68,9.47 1.68,9.49C1.68,11.45 3.08,13.08 4.9,13.43C4.58,13.52 4.25,13.56 3.9,13.56C3.65,13.56 3.4,13.54 3.16,13.5C3.68,15.12 5.16,16.25 6.92,16.28C5.54,17.33 3.86,18 2.04,18C1.72,18 1.4,17.98 1.08,17.94C2.88,19.05 4.96,19.67 7.22,19.67C16.3,19.67 20.45,12.51 20.45,6.46C20.45,6.29 20.45,6.12 20.44,5.95C21.3,5.32 21.98,4.56 22.46,3.68L22.46,6Z" />
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M16.8,6.2C16.8,6.64 16.44,7 16,7C15.56,7 15.2,6.64 15.2,6.2C15.2,5.76 15.56,5.4 16,5.4C16.44,5.4 16.8,5.76 16.8,6.2Z" />
    </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M17,7H15.5C14.67,7 14,7.67 14,8.5V10H17L16.5,12H14V17H12V12H10V10H12V8.5C12,6.57 13.57,5 15.5,5H17V7Z" />
    </svg>
);

export const YoutubeIcon: React.FC<IconProps> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M10,16.5V7.5L16,12L10,16.5Z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);
  
export const ChevronRightIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const TicketIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-5.25 0h3m-3 0h-1.5m0 0H5.625c-.621 0-1.125.504-1.125 1.125v3.375c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9H7.875a1.125 1.125 0 0 0-1.125 1.125v1.5" />
  </svg>
);