import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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

      // Banner
      "buy_tickets": "COMPRA TUS TICKETS",
      "buy": "Comprar",

      // Tickets page
      "tickets_subtitle": "Asegura tu sitio en el valle de la música electrónica.",
      "tickets_subtitle2": "Elige la opción que mejor se adapte a ti.",
      "tickets_guide_title": "GUÍA DE COMPRA - AQUASELLA 2026",
      "tickets_general_title": "ABONOS GENERALES",
      "tickets_general_question": "¿Cuándo comienza la venta?",
      "tickets_general_answer": "Este martes 11 de noviembre a las 13:00h, pondremos a la venta una nueva promoción de Abonos Generales desde",
      "tickets_general_price": "79,90€ + gastos de gestión.",
      "tickets_general_rest": "La Zona de Descanso (Acampada) se podrá adquirir por separado más adelante como complemento.",
      "tickets_general_web": "La venta se realizará desde nuestra Web Oficial:",
      "tickets_general_ticketer": "Siendo nuestra Ticketera oficial Vivaticket:",
      "tickets_types_title": "TIPOS DE ABONOS",
      "tickets_types_question": "¿Qué tipos de Abonos hay a la venta?",
      "tickets_types_list1": "✅ Abono General",
      "tickets_types_list2": "✅ Precio mínimo garantizado para la próxima edición AQUASELLA 2026.",
      "tickets_types_list3": "✅ El abono general da acceso al recinto del festival desde el jueves 13 hasta el domingo 16 de agosto de 2026.",
      "tickets_sales_title": "FORMAS DE VENTA",
      "tickets_sales_question": "¿Qué tipos de venta se realizarán?",
      "tickets_sales_list1": "✅ Venta General en un único pago",
      "tickets_sales_list2": "✅ Venta a Plazos: Tres pagos mensuales",
      "tickets_sales_list3": "✅ Venta con Bono Cultural Joven",
      "tickets_sales_warning": "⚠️ El acceso al evento es exclusivamente para mayores de 18 años.",
      "tickets_sales_info": "ℹ️ Durante el proceso de compra, se solicitarán los siguientes datos del comprador:",
      "tickets_sales_data": "Nombre y Apellidos, DNI, Email, Teléfono, Fecha de Nacimiento y Código Postal.",
      "tickets_payment_title": "MÉTODOS DE PAGO",
      "tickets_payment_question": "¿Cómo comprar los bonos?",
      "tickets_payment_text": "Se podrán realizar en un mismo proceso la compra de hasta 6 abonos. Los métodos de pago aceptados son los siguientes:",
      "tickets_payment_credit": "✅ Tarjeta crédito / débito: Visa, Mastercard.",
      "tickets_payment_credit_info": "ℹ️ Importante: Deberás tener activado el 'comercio electrónico seguro'.",
      "tickets_payment_bizum": "✅ Bizum.",
      "tickets_payment_bizum_info": "ℹ️ Importante: Deberás tener activado el servicio de Bizum en la aplicación de tu banco.",
      "tickets_support_title": "SOPORTE",
      "tickets_support_question": "¿Problemas con la compra?",
      "tickets_support_text1": "En el caso de no recibir el correo con los abonos en tu bandeja de entrada tras un tiempo de espera, revisa tu carpeta de spam.",
      "tickets_support_text2": "Si aún así no lo has recibido, puedes ponerte en contacto con el servicio de atención al cliente a través de los siguientes medios:",
      "tickets_support_email": "📧 Email:",
      "tickets_support_phone": "📞 Tfno:",
      "tickets_sections_general_title": "Venta General",
      "tickets_sections_general_desc": "Entradas individuales para todos los días del festival",
      "tickets_sections_installments_title": "Venta a Plazos",
      "tickets_sections_installments_desc": "Paga tu entrada cómodamente en varios plazos",
      "tickets_sections_bono_title": "Bono Cultural Joven",
      "tickets_sections_bono_desc": "Aprovecha el Bono Cultural para jóvenes de 18 años",
      "tickets_bottom_title": "Venta de Entradas",
      "tickets_bottom_text": "Las entradas ya están disponibles. ¡Consigue la tuya antes de que se agoten!",
      "tickets_bottom_terms": "Al comprar una entrada, aceptas nuestros Términos y Condiciones y nuestra Política de Privacidad",

      // Tickets page navigation
      "tickets_nav_previous": "Anterior",
      "tickets_nav_next": "Siguiente",
      "tickets_nav_go_to_slide": "Ir a slide",

      // Footer
      "footer_description": "El corazón de la música electrónica en el norte de España.",
      "footer_follow": "Síguenos en nuestras redes sociales",

      // Home page
      "countdown_title": "CUENTA ATRÁS AQUASELLA 2026",
      "gallery_title": "GALERÍA DE FOTOS",
      "view_full_gallery": "Ver Galería Completa",

      // Gallery page
      "back_to_home": "← Volver al Inicio",

      // Tickets subpages
      "back_to_tickets": "← Volver a Tickets",
      "general_sale_title": "Venta General",
      "general_sale_subtitle": "Entradas estándar para vivir la experiencia completa de Aquasella 2026",
      "ticket_general_4_days": "Entrada General 4 Días",
      "ticket_general_4_days_desc": "Acceso completo a los 4 días del festival",
      "ticket_general_4_days_feature1": "Acceso a todos los escenarios",
      "ticket_general_4_days_feature2": "Horario: 13/08 - 16/08",
      "ticket_general_4_days_feature3": "Sin camping incluido",
      "ticket_1_day": "Entrada 1 Día",
      "ticket_1_day_price": "Desde 35€",
      "ticket_1_day_desc": "Entrada para un día específico del festival",
      "ticket_1_day_feature1": "Acceso día completo",
      "ticket_1_day_feature2": "Elige tu día favorito",
      "ticket_1_day_feature3": "Jueves, Viernes, Sábado o Domingo",
      "ticket_camping_4_days": "Entrada + Camping 4 Días",
      "ticket_camping_4_days_price": "150€",
      "ticket_camping_4_days_desc": "Entrada completa con acceso al camping",
      "ticket_camping_4_days_feature1": "Entrada 4 días incluida",
      "ticket_camping_4_days_feature2": "Camping del 13-17/08",
      "ticket_camping_4_days_feature3": "Zona de acampada oficial",

      // Installments sale page
      "installments_sale_title": "Venta a Plazos",
      "installments_sale_subtitle": "Compra tu entrada pagando en varios plazos cómodamente.",

      // Cultural voucher page
      "cultural_voucher_title": "Bono Cultural Joven",
      "cultural_voucher_subtitle": "¡Aprovecha tu Bono Cultural para vivir Aquasella! Descuentos especiales para jóvenes de 18 años.",
      "what_is_cultural_voucher": "¿Qué es el Bono Cultural?",
      "cultural_voucher_description": "El Bono Cultural Joven es una ayuda de 400€ del Ministerio de Cultura para jóvenes que cumplan 18 años en 2025, destinada a actividades culturales como festivales de música.",
      "general_entry_4_days": "Entrada General 4 Días",
      "with_cultural_voucher": "Con Bono Cultural",
      "full_access_4_days": "Acceso completo 4 días",
      "all_stages": "Todos los escenarios",
      "august_13_16_2026": "13-16 Agosto 2026",
      "buy_with_cultural_voucher": "Comprar con Bono Cultural",
      "entry_plus_camping_4_days": "Entrada + Camping 4 Días",
      "entry_4_days_included": "Entrada 4 días incluida",
      "official_camping": "Camping oficial",
      "august_13_17_2026": "13-17 Agosto 2026",

      // Schedule page
      "back_to_lineup": "← Volver a Line Up",
      "schedule_coming_soon": "PROXIMAMENTE TODA LA INFORMACIÓN",
      "schedule_working": "Estamos trabajando en los horarios completos. ¡Mantente atento!",

      // Lineup/Cartel page
      "lineup_coming_soon": "PROXIMAMENTE TODA LA INFORMACIÓN",
      "lineup_working": "Estamos trabajando en el cartel completo. ¡Mantente atento!",

      // Artists page
      "artists_title": "Artistas",
      "artists_description": "Descubre el pulso electrónico que hará vibrar Aquasella. Desde leyendas del techno hasta las nuevas promesas que vienen pisando fuerte. Aquí tienes a los artífices de tu experiencia.",
      "artists_filter_all": "|A-Z|",
      "artists_filter_thu": "Jue",
      "artists_filter_fri": "Vie",
      "artists_filter_sat": "Sáb",
      "artists_filter_sun": "Dom",
      "artists_day": "Día:",
      "artists_stage": "Escenario:",
      "artists_time": "Horario:",
      "artists_coming_soon": "Próximamente",
      "artists_close_modal": "Cerrar modal",
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

      // Banner
      "buy_tickets": "BUY YOUR TICKETS",
      "buy": "Buy",

      // Tickets page
      "tickets_subtitle": "Secure your spot in the valley of electronic music.",
      "tickets_subtitle2": "Choose the option that best suits you.",
      "tickets_guide_title": "PURCHASE GUIDE - AQUASELLA 2026",
      "tickets_general_title": "GENERAL PASSES",
      "tickets_general_question": "When does the sale start?",
      "tickets_general_answer": "This Tuesday, November 11th at 13:00h, we will put on sale a new promotion of General Passes from",
      "tickets_general_price": "79.90€ + management fees.",
      "tickets_general_rest": "The Rest Area (Camping) can be purchased separately later as a complement.",
      "tickets_general_web": "The sale will be carried out from our Official Website:",
      "tickets_general_ticketer": "Being our official ticketer Vivaticket:",
      "tickets_types_title": "TYPES OF PASSES",
      "tickets_types_question": "What types of Passes are on sale?",
      "tickets_types_list1": "✅ General Pass",
      "tickets_types_list2": "✅ Minimum price guaranteed for the next AQUASELLA 2026 edition.",
      "tickets_types_list3": "✅ The general pass gives access to the festival venue from Thursday 13th to Sunday 16th August 2026.",
      "tickets_sales_title": "SALES METHODS",
      "tickets_sales_question": "What types of sales will be carried out?",
      "tickets_sales_list1": "✅ General Sale in a single payment",
      "tickets_sales_list2": "✅ Installment Sale: Three monthly payments",
      "tickets_sales_list3": "✅ Sale with Young Cultural Voucher",
      "tickets_sales_warning": "⚠️ Access to the event is exclusively for people over 18 years old.",
      "tickets_sales_info": "ℹ️ During the purchase process, the following buyer data will be requested:",
      "tickets_sales_data": "Name and Surname, ID, Email, Phone, Date of Birth and Postal Code.",
      "tickets_payment_title": "PAYMENT METHODS",
      "tickets_payment_question": "How to buy the passes?",
      "tickets_payment_text": "Up to 6 passes can be purchased in the same process. The accepted payment methods are the following:",
      "tickets_payment_credit": "✅ Credit/debit card: Visa, Mastercard.",
      "tickets_payment_credit_info": "ℹ️ Important: You must have 'secure electronic commerce' activated.",
      "tickets_payment_bizum": "✅ Bizum.",
      "tickets_payment_bizum_info": "ℹ️ Important: You must have the Bizum service activated in your bank's app.",
      "tickets_support_title": "SUPPORT",
      "tickets_support_question": "Problems with the purchase?",
      "tickets_support_text1": "If you do not receive the email with the passes in your inbox after waiting, check your spam folder.",
      "tickets_support_text2": "If you still haven't received it, you can contact customer service through the following means:",
      "tickets_support_email": "📧 Email:",
      "tickets_support_phone": "📞 Phone:",
      "tickets_sections_general_title": "General Sale",
      "tickets_sections_general_desc": "Individual tickets for all festival days",
      "tickets_sections_installments_title": "Installment Sale",
      "tickets_sections_installments_desc": "Pay your ticket comfortably in several installments",
      "tickets_sections_bono_title": "Young Cultural Voucher",
      "tickets_sections_bono_desc": "Take advantage of the Cultural Voucher for 18-year-old youth",
      "tickets_bottom_title": "Ticket Sale",
      "tickets_bottom_text": "Tickets are now available. Get yours before they sell out!",
      "tickets_bottom_terms": "By purchasing a ticket, you accept our Terms and Conditions and our Privacy Policy",

      // Tickets page navigation
      "tickets_nav_previous": "Previous",
      "tickets_nav_next": "Next",
      "tickets_nav_go_to_slide": "Go to slide",

      // Footer
      "footer_description": "The heart of electronic music in northern Spain.",
      "footer_follow": "Follow us on our social networks",

      // Home page
      "countdown_title": "COUNTDOWN TO AQUASELLA 2026",
      "gallery_title": "PHOTO GALLERY",
      "view_full_gallery": "View Full Gallery",

      // Gallery page
      "back_to_home": "← Back to Home",

      // Tickets subpages
      "back_to_tickets": "← Back to Tickets",
      "general_sale_title": "General Sale",
      "general_sale_subtitle": "Standard tickets to experience the full Aquasella 2026 experience",
      "ticket_general_4_days": "General Entry 4 Days",
      "ticket_general_4_days_desc": "Full access to all 4 festival days",
      "ticket_general_4_days_feature1": "Access to all stages",
      "ticket_general_4_days_feature2": "Schedule: 13/08 - 16/08",
      "ticket_general_4_days_feature3": "No camping included",
      "ticket_1_day": "1 Day Entry",
      "ticket_1_day_price": "From 35€",
      "ticket_1_day_desc": "Entry for a specific festival day",
      "ticket_1_day_feature1": "Full day access",
      "ticket_1_day_feature2": "Choose your favorite day",
      "ticket_1_day_feature3": "Thursday, Friday, Saturday or Sunday",
      "ticket_camping_4_days": "Entry + Camping 4 Days",
      "ticket_camping_4_days_price": "150€",
      "ticket_camping_4_days_desc": "Complete entry with camping access",
      "ticket_camping_4_days_feature1": "4-day entry included",
      "ticket_camping_4_days_feature2": "Camping from 13-17/08",
      "ticket_camping_4_days_feature3": "Official camping area",

      // Installments sale page
      "installments_sale_title": "Installment Sale",
      "installments_sale_subtitle": "Buy your ticket by paying in several installments comfortably.",

      // Cultural voucher page
      "cultural_voucher_title": "Young Cultural Voucher",
      "cultural_voucher_subtitle": "Take advantage of your Cultural Voucher to experience Aquasella! Special discounts for 18-year-old youth.",
      "what_is_cultural_voucher": "What is the Cultural Voucher?",
      "cultural_voucher_description": "The Young Cultural Voucher is a 400€ aid from the Ministry of Culture for young people who turn 18 in 2025, intended for cultural activities such as music festivals.",
      "general_entry_4_days": "General Entry 4 Days",
      "with_cultural_voucher": "With Cultural Voucher",
      "full_access_4_days": "Full access 4 days",
      "all_stages": "All stages",
      "august_13_16_2026": "August 13-16, 2026",
      "buy_with_cultural_voucher": "Buy with Cultural Voucher",
      "entry_plus_camping_4_days": "Entry + Camping 4 Days",
      "entry_4_days_included": "4-day entry included",
      "official_camping": "Official camping",
      "august_13_17_2026": "August 13-17, 2026",

      // Schedule page
      "back_to_lineup": "← Back to Line Up",
      "schedule_coming_soon": "COMING SOON ALL INFORMATION",
      "schedule_working": "We are working on the complete schedules. Stay tuned!",

      // Lineup/Cartel page
      "lineup_coming_soon": "COMING SOON ALL INFORMATION",
      "lineup_working": "We are working on the complete lineup. Stay tuned!",

      // Artists page
      "artists_title": "Artists",
      "artists_description": "Discover the electronic pulse that will make Aquasella vibrate. From techno legends to the new promises coming strong. Here you have the creators of your experience.",
      "artists_filter_all": "|A-Z|",
      "artists_filter_thu": "Thu",
      "artists_filter_fri": "Fri",
      "artists_filter_sat": "Sat",
      "artists_filter_sun": "Sun",
      "artists_day": "Day:",
      "artists_stage": "Stage:",
      "artists_time": "Time:",
      "artists_coming_soon": "Coming Soon",
      "artists_close_modal": "Close modal",
    }
  }
};

i18n
  .use(LanguageDetector)
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