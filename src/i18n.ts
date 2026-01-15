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