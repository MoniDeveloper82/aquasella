import React from 'react';

const ShopPage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Camiseta Aquasella 2025',
      price: '25€',
      image: '/img/Hector-Oaks.avif',
      category: 'Ropa'
    },
    {
      id: 2,
      name: 'Sudadera Official',
      price: '45€',
      image: '/img/Hector-Oaks.avif',
      category: 'Ropa'
    },
    {
      id: 3,
      name: 'Gorra Aquasella',
      price: '18€',
      image: '/img/Hector-Oaks.avif',
      category: 'Accesorios'
    },
    {
      id: 4,
      name: 'Botella Reutilizable',
      price: '12€',
      image: '/img/Hector-Oaks.avif',
      category: 'Accesorios'
    },
    {
      id: 5,
      name: 'Vinilo Compilation',
      price: '35€',
      image: '/img/Hector-Oaks.avif',
      category: 'Música'
    },
    {
      id: 6,
      name: 'Llavero Festival',
      price: '8€',
      image: '/img/Hector-Oaks.avif',
      category: 'Accesorios'
    }
  ];

  const categories = ['Todos', 'Ropa', 'Accesorios', 'Música'];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 text-glow">
            Shop Oficial
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Llévate un pedazo de Aquasella contigo. Merchandising oficial y productos exclusivos del festival.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-gray-800 hover:bg-sky-600 rounded-full text-sm font-bold uppercase tracking-wider transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="aspect-square bg-gradient-to-br from-sky-600 to-purple-700 flex items-center justify-center">
                <div className="text-6xl">🎵</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <span className="bg-sky-600 text-xs px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-sky-400">{product.price}</span>
                  <button className="bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700 px-4 py-2 rounded-lg font-bold transition-colors">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información de envío */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-3">Envío Gratis</h3>
            <p className="text-gray-300">En pedidos superiores a 40€</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎪</div>
            <h3 className="text-xl font-bold mb-3">Recogida en Festival</h3>
            <p className="text-gray-300">Disponible en el stand oficial</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Devoluciones</h3>
            <p className="text-gray-300">30 días para cambios</p>
          </div>
        </div>

        {/* Productos destacados */}
        <div className="bg-gradient-to-r from-sky-600 to-purple-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🌟 Colección Limitada 2025</h3>
          <p className="text-lg mb-6">
            Productos exclusivos diseñados especialmente para esta edición del festival.
          </p>
          <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Ver Colección Exclusiva
          </button>
        </div>

        {/* Próximamente */}
        <div className="mt-12 bg-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">🔜 Próximamente</h3>
          <p className="text-gray-300 mb-4">
            La tienda online estará disponible próximamente. Mientras tanto, encuentra nuestros productos en el festival.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-700 text-gray-300 px-6 py-2 rounded-lg cursor-not-allowed">
              Tienda Online (Próximamente)
            </button>
            <button className="bg-sky-600 hover:bg-sky-700 px-6 py-2 rounded-lg font-bold transition-colors">
              Visita el Stand en el Festival
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;