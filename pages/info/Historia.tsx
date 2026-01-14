import React from 'react';
import { Link } from 'react-router-dom';

const HistoriaPage: React.FC = () => {
  const timeline = [
    {
      year: '2016',
      title: 'Los Inicios',
      description: 'Nace Aquasella como un pequeño festival local en Asturias con 2,000 asistentes',
      highlights: ['Primera edición', '10 artistas', 'Un solo escenario', 'Dos días de festival'],
      color: 'from-blue-600 to-blue-800',
      icon: '🌱'
    },
    {
      year: '2017',
      title: 'Crecimiento',
      description: 'Duplicamos la asistencia y añadimos el segundo escenario',
      highlights: ['4,000 asistentes', '18 artistas', 'Segundo escenario', 'Primera zona VIP'],
      color: 'from-green-600 to-green-800',
      icon: '📈'
    },
    {
      year: '2018',
      title: 'Reconocimiento',
      description: 'Aquasella se posiciona como referente de la música electrónica en el norte',
      highlights: ['8,000 asistentes', 'Primeros headliners internacionales', 'Cobertura nacional', 'Área de camping'],
      color: 'from-purple-600 to-purple-800',
      icon: '🎯'
    },
    {
      year: '2019',
      title: 'Expansión',
      description: 'El festival se consolida con artistas de talla mundial',
      highlights: ['15,000 asistentes', 'Tercer escenario', 'Festival de 3 días', 'Partners internacionales'],
      color: 'from-orange-600 to-orange-800',
      icon: '🌍'
    },
    {
      year: '2020-2021',
      title: 'Adaptación',
      description: 'Años de retos que nos hicieron más fuertes y creativos',
      highlights: ['Formato híbrido', 'Streaming mundial', 'Protocolos sanitarios', 'Innovación tecnológica'],
      color: 'from-red-600 to-red-800',
      icon: '💪'
    },
    {
      year: '2022',
      title: 'Regreso Triunfal',
      description: 'Volvimos con más fuerza que nunca',
      highlights: ['25,000 asistentes', 'Sold out histórico', '4 escenarios', 'Experiencia 360°'],
      color: 'from-yellow-600 to-yellow-800',
      icon: '🚀'
    },
    {
      year: '2023',
      title: 'Récord Histórico',
      description: 'El año que marcó un antes y un después',
      highlights: ['35,000 asistentes', 'Artistas exclusivos', 'Experiencias inmersivas', 'Impacto económico regional'],
      color: 'from-pink-600 to-pink-800',
      icon: '👑'
    },
    {
      year: '2024',
      title: 'Consolidación',
      description: 'Aquasella se establece como el festival de referencia',
      highlights: ['40,000 asistentes', 'Sostenibilidad 100%', 'Tecnología pionera', 'Reconocimiento europeo'],
      color: 'from-teal-600 to-teal-800',
      icon: '🏆'
    },
    {
      year: '2025',
      title: 'Décimo Aniversario',
      description: 'Celebramos una década de música, cultura y emociones',
      highlights: ['45,000 asistentes', 'Gira conmemorativa', 'Documental oficial', 'Legacy project'],
      color: 'from-indigo-600 to-indigo-800',
      icon: '🎂'
    },
    {
      year: '2026',
      title: 'El Futuro Es Ahora',
      description: 'Aquasella 2026: La experiencia definitiva que cambiará todo',
      highlights: ['50,000 asistentes esperados', '5 escenarios únicos', 'Realidad aumentada', 'Festival del futuro'],
      color: 'from-violet-600 to-purple-800',
      icon: '🌟'
    }
  ];

  const achievements = [
    { metric: '500,000+', description: 'Personas han vivido Aquasella', icon: '👥' },
    { metric: '300+', description: 'Artistas han actuado', icon: '🎤' },
    { metric: '50+', description: 'Países representados', icon: '🌍' },
    { metric: '€25M', description: 'Impacto económico generado', icon: '💰' },
    { metric: '10', description: 'Años de historia', icon: '📅' },
    { metric: '95%', description: 'Satisfacción de asistentes', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/info" className="inline-block mb-8 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          ← Volver a Información
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📜</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Historia de Aquasella
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desde sus humildes inicios hasta convertirse en el festival de referencia. Descubre el increíble viaje de una década de música, cultura y pasión.
          </p>
        </div>

        {/* Línea de tiempo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">📅 Línea de Tiempo</h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={event.year} className={`bg-gradient-to-r ${event.color} rounded-2xl p-8`}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="text-5xl">{event.icon}</div>
                    <div className="text-2xl font-black mt-2">{event.year}</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-black uppercase mb-3">{event.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{event.description}</p>
                    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas destacadas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">📊 10 Años en Números</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-4xl font-black text-blue-400 mb-2">{achievement.metric}</div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visión y misión */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">🎯 Nuestra Misión</h3>
            <p className="text-lg opacity-90">
              Crear experiencias musicales únicas que conecten a las personas a través de la música electrónica, 
              promoviendo la cultura, la sostenibilidad y el desarrollo de nuestro territorio.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">🌟 Nuestra Visión</h3>
            <p className="text-lg opacity-90">
              Ser el festival de música electrónica más influyente y sostenible de Europa, 
              manteniendo siempre nuestras raíces asturianas y el espíritu familiar que nos caracteriza.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">💎 Nuestros Valores</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl mb-3">🎵</div>
              <h4 className="font-bold mb-2">Pasión Musical</h4>
              <p className="text-sm text-gray-300">La música es nuestra razón de ser</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-bold mb-2">Sostenibilidad</h4>
              <p className="text-sm text-gray-300">Cuidamos el planeta que amamos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold mb-2">Comunidad</h4>
              <p className="text-sm text-gray-300">Somos una gran familia</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold mb-2">Innovación</h4>
              <p className="text-sm text-gray-300">Siempre buscamos lo siguiente</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📖 Una Década de Sueños</h3>
          <p className="text-gray-300">
            10 años creando momentos inolvidables. Aquasella es más que un festival, es una historia de pasión, 
            dedicación y la magia que sucede cuando la música une a las personas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoriaPage;