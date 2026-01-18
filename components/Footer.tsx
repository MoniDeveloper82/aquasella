
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from './icons';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    telefono: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');
  const socialLinks = [
    { Icon: InstagramIcon, href: 'https://www.instagram.com/aquasellafest/?hl=es', label: 'Instagram', target: '_blank', rel: 'noopener noreferrer' },
    { Icon: FacebookIcon, href: 'https://www.facebook.com/aquasellafest', label: 'Facebook', target: '_blank', rel: 'noopener noreferrer' },
    { Icon: YoutubeIcon, href: 'https://www.youtube.com/user/AquasellaChannel', label: 'YouTube', target: '_blank', rel: 'noopener noreferrer' },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError('');

    // Validación de campos obligatorios
    if (!contactForm.name.trim()) {
      setContactError('El nombre es obligatorio');
      return;
    }
    if (!contactForm.email.trim()) {
      setContactError('El email es obligatorio');
      return;
    }
    if (!contactForm.subject) {
      setContactError('Debes seleccionar un asunto');
      return;
    }
    if (!contactForm.message.trim()) {
      setContactError('El mensaje es obligatorio');
      return;
    }

    setIsSubmitting(true);
    try {
      // Create email with form data
      const subject = contactForm.subject;
      const body = `Nombre: ${contactForm.name}
Email: ${contactForm.email}
Teléfono: ${contactForm.telefono || 'No proporcionado'}

${contactForm.message}

---
Enviado desde el formulario de contacto de aquasella.com`;
      const mailtoLink = `mailto:info.aquasella@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.location.href = mailtoLink;

      setContactSubmitted(true);
      setContactForm({ name: '', email: '', subject: '', message: '', telefono: '' });
      // Close modal immediately
      setTimeout(() => {
        setShowContactModal(false);
        setContactSubmitted(false);
      }, 1500); // Show success message for 1.5 seconds then close
    } catch (error) {
      console.error('Error opening email client:', error);
      setContactError('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Mailchimp integration
      const response = await fetch('https://YOUR_DC.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('anystring:YOUR_API_KEY')
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('Error al suscribirte. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="relative"
      style={{
        backgroundImage: `url('/img/footer.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 70%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* filtro negro */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
                <img 
                  src="/img/AQS.png" 
                  alt="Aquasella Festival Logo"
                  className="h-40"
                />
                <p>{t('footer_description')}</p>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-300 mb-3">{t('footer_follow')}</p>
                  <div className="flex justify-center space-x-6">
                   {socialLinks.map(({ Icon, href, label, target, rel }) => (
                       <a
                         key={label}
                         href={href}
                         className="text-gray-400 hover:text-rose-400 transition-colors"
                         aria-label={label}
                         target={target}
                         rel={rel}
                       >
                          <Icon className="h-8 w-8 text-white hover:text-red-700 transition-colors" />
                      </a>
                   ))}
                  </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-lg text-white uppercase tracking-wider">Newsletter</h4>
                <p className="mt-2">Recibe las últimas noticias y ofertas exclusivas.</p>
                {submitted ? (
                  <div className="mt-4 p-3 bg-green-600 text-white rounded-md text-center">
                    ¡Gracias por suscribirte! Recibirás nuestras novedades pronto.
                  </div>
                ) : (
                  <form className="mt-4 flex" onSubmit={handleNewsletterSubmit}>
                      <input 
                        type="email" 
                        placeholder="tu.email@ejemplo.com" 
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button 
                        type="submit" 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-r-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? '...' : 'Suscribir'}
                      </button>
                  </form>
                )}
            </div>

             <div>
                <h4 className="font-bold text-lg text-white uppercase tracking-wider">Legal</h4>
            <ul className="mt-2 space-y-2">
              {/* <li><a href="#" className="hover:text-sky-400 transition-colors">Términos y Condiciones</a></li> */}
              <li><Link to="/privacy" className="hover:text-red-700 transition-colors">Política de Privacidad</Link></li>
                    <li><Link to="/cookies" className="hover:text-red-700 transition-colors">Política de Cookies</Link></li>
                    <li><Link to="/legal" className="hover:text-red-700 transition-colors">Aviso Legal</Link></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setShowContactModal(true); }} className="hover:text-red-700 transition-colors cursor-pointer">Contacto</a></li>
                    <li><a href="mailto:trabajo.lareal@gmail.com" className="hover:text-red-700 transition-colors">Trabaja con nosotros</a></li>
            </ul>
            </div>
        </div>

        <div className="mt-12 pt-8 text-center text-gray-200 text-sm">
          <p className="text-white">&copy; {new Date().getFullYear()} Aquasella Festival. Todos los derechos reservados.</p>
        </div>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 w-full max-w-md border-2 border-red-600 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Contacto</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {contactError && (
                  <div className="p-3 bg-red-600 text-white rounded-md text-center">
                    {contactError}
                  </div>
                )}
                
                {contactSubmitted && (
                  <div className="p-3 bg-green-600 text-white rounded-md text-center">
                    ¡Mensaje enviado! Se abrirá tu cliente de email para completar el envío.<br />
                    <span className="text-sm mt-1 block">Gracias por contactar con nosotros.</span>
                  </div>
                )}
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    value={contactForm.telefono}
                    onChange={(e) => setContactForm({...contactForm, telefono: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+34 600 123 456"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Asunto</label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="Información general">Información general</option>
                    <option value="Compra de entradas">Compra de entradas</option>
                    <option value="Objetos perdidos">Objetos perdidos</option>
                    <option value="Autobuses">Autobuses</option>
                    <option value="Zona de descanso">Zona de descanso</option>
                    <option value="Zona VIP">Zona VIP</option>
                    <option value="Colaboraciones">Colaboraciones</option>
                    <option value="Prensa">Prensa</option>
                    <option value="Problemas técnicos">Problemas técnicos</option>
                    <option value="Sugerencias">Sugerencias</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Mensaje</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 h-24 resize-none"
                    required
                    placeholder="Escribe aquí tu mensaje o consulta..."
                  />
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
