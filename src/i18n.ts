import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  es: {
    translation: {
      // Navigation
      "home": "Inicio",
      "lineup": "Cartel",
      "tickets": "Entradas",
      "info": "Información",
      "shop": "Tienda",

      // History page
      "history_title": "Historia de Aquasella",
      "history_subtitle": "Desde 1997 hasta 2026, descubre la increíble trayectoria de Aquasella, un festival que ha marcado la historia de la música electrónica en España.",
      "history_paragraph_1": "El festival Aquasella nació en 1997 en Arriondas/ Cangas de Onís, Asturias, impulsado por La Real Producciones, con el objetivo de crear un espacio dedicado a la música electrónica en el norte de España. Lo que comenzó como un evento de pequeño formato fue creciendo de manera progresiva hasta consolidarse como uno de los festivales más importantes de Europa con una identidad propia.",
      "history_paragraph_2": "Desde sus primeras ediciones, Aquasella ha desarrollado una línea artística coherente, combinando artistas nacionales e internacionales y acompañando la evolución de la música electrónica a lo largo de casi tres décadas. Esta continuidad, junto a un entorno natural singular y una relación cercana con su público, ha definido el carácter del festival desde sus inicios.",
      "history_paragraph_3": "Con el paso del tiempo, Aquasella evolucionó hacia un formato de mayor escala, manteniendo siempre una fuerte conexión con su comunidad. Actualmente, el festival reúne cada verano a miles de asistentes procedentes de distintos países, consolidándose como una cita destacada dentro del panorama electrónico español.",
      "history_paragraph_4": "En 2026, Aquasella celebra su 29ª edición, respaldada por una trayectoria sólida y por el éxito de las últimas ediciones, que han alcanzado el sold out. Un recorrido construido sobre la experiencia, la coherencia y una pasión compartida por la música electrónica.",
      "history_paragraph_5": "Aquasella es hoy un punto de encuentro donde conviven historia, presente y futuro de la música electrónica.",

      // Essence section
      "essence_title": "La Esencia de Aquasella",
      "essence_text": "Más de dos décadas creando momentos inolvidables. Aquasella es la historia viva de la música electrónica en España, un legado que continúa escribiéndose con cada edición.",

      // Common
      "back": "Volver",
      "language": "Idioma"
    }
  },
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "lineup": "Lineup",
      "tickets": "Tickets",
      "info": "Info",
      "shop": "Shop",

      // History page
      "history_title": "Aquasella History",
      "history_subtitle": "From 1997 to 2026, discover the incredible journey of Aquasella, a festival that has marked the history of electronic music in Spain.",
      "history_paragraph_1": "The Aquasella festival was born in 1997 in Arriondas/Cangas de Onís, Asturias, promoted by La Real Producciones, with the aim of creating a space dedicated to electronic music in northern Spain. What began as a small-format event grew progressively until it consolidated as one of Europe's most important festivals with its own identity.",
      "history_paragraph_2": "From its first editions, Aquasella has developed a coherent artistic line, combining national and international artists and accompanying the evolution of electronic music over almost three decades. This continuity, together with a unique natural environment and a close relationship with its audience, has defined the festival's character from its beginnings.",
      "history_paragraph_3": "Over time, Aquasella evolved into a larger format, always maintaining a strong connection with its community. Today, the festival brings together thousands of attendees from different countries each summer, consolidating itself as a prominent event within the Spanish electronic scene.",
      "history_paragraph_4": "In 2026, Aquasella celebrates its 29th edition, backed by a solid track record and the success of recent editions, which have reached sold out. A journey built on experience, consistency and a shared passion for electronic music.",
      "history_paragraph_5": "Aquasella is today a meeting point where the history, present and future of electronic music coexist.",

      // Essence section
      "essence_title": "The Essence of Aquasella",
      "essence_text": "More than two decades creating unforgettable moments. Aquasella is the living history of electronic music in Spain, a legacy that continues to be written with each edition.",

      // Common
      "back": "Back",
      "language": "Language"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;