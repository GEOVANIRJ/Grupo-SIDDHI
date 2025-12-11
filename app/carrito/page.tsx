'use client';

import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

interface CartItem {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [buyerPhone, setBuyerPhone] = useState('');
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Cargar carrito desde localStorage
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito') || '[]');
    setCarrito(carritoGuardado);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Cargar el estado inicial del modo oscuro desde la clase del HTML
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);

    // Escuchar cambios en el modo oscuro
    const handleDarkModeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => window.removeEventListener('darkModeChanged', handleDarkModeChange);
  }, []);

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  const eliminarDelCarrito = (id: string) => {
    const itemAEliminar = carrito.find(item => item.id === id);
    const carritoActualizado = carrito.filter(item => item.id !== id);
    setCarrito(carritoActualizado);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    window.dispatchEvent(new Event('cartUpdated'));
    if (itemAEliminar) {
      window.dispatchEvent(new CustomEvent('cartAction', { 
        detail: { message: `${itemAEliminar.nombre} eliminado del carrito` }
      }));
    }
  };

  const incrementarCantidad = (id: string) => {
    const carritoActualizado = carrito.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCarrito(carritoActualizado);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    window.dispatchEvent(new Event('cartUpdated'));
    const item = carritoActualizado.find(i => i.id === id);
    if (item) {
      window.dispatchEvent(new CustomEvent('cartAction', { 
        detail: { message: `Cantidad: ${item.cantidad}` }
      }));
    }
  };

  const decrementarCantidad = (id: string) => {
    const carritoActualizado = carrito.map(item =>
      item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    setCarrito(carritoActualizado);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    window.dispatchEvent(new Event('cartUpdated'));
    const item = carritoActualizado.find(i => i.id === id);
    if (item) {
      window.dispatchEvent(new CustomEvent('cartAction', { 
        detail: { message: `Cantidad: ${item.cantidad}` }
      }));
    }
  };

  const vaciarCarrito = () => {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
      setCarrito([]);
      localStorage.setItem('carrito', JSON.stringify([]));
      window.dispatchEvent(new Event('cartUpdated'));
      window.dispatchEvent(new CustomEvent('cartAction', { 
        detail: { message: 'Carrito vaciado' }
      }));
    }
  };

  const enviarWhatsApp = () => {
    if (!buyerPhone) {
      alert('Por favor ingresa tu número de teléfono antes de enviar.');
      return;
    }

    // Número administrativo que recibirá el pedido (con prefijo 52 para México)
    const adminNumber = '525645689216';

    let mensaje = `Pedido desde: ${buyerPhone}\n\n`;
    mensaje += `📦 Productos:\n`;
    carrito.forEach(item => {
      mensaje += `• ${item.nombre} (x${item.cantidad}) - $${(item.precio * item.cantidad).toLocaleString('es-AR')}\n`;
    });
    mensaje += `\n💰 Total: $${calcularTotal().toLocaleString('es-AR')}`;

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    
    window.dispatchEvent(new CustomEvent('cartAction', { 
      detail: { message: 'Redirigiendo a WhatsApp...' }
    }));
  };

  if (loading) {
    return (
      <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gradient-to-r from-[#2959c7] to-[#fe3158] mx-auto"></div>
            <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Cargando carrito...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Header />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2959c7] via-[#1e47a1] to-[#fe3158] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <a href="/catalogo" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Volver</span>
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
            <ShoppingBag size={40} />
            Tu Carrito
          </h1>
          <p className="mt-3 text-blue-100 text-lg">
            {carrito.length} {carrito.length === 1 ? 'artículo' : 'artículos'} en el carrito
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {carrito.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag size={64} className={`mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
            <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Tu carrito está vacío
            </h2>
            <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Agrega productos de nuestro catálogo para empezar
            </p>
            <a
              href="/catalogo"
              className="inline-block bg-gradient-to-r from-[#2959c7] to-[#fe3158] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Ir al Catálogo
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {carrito.map((item) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border hover:shadow-md transition-shadow ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {item.nombre}
                        </h3>
                        <p className="text-2xl font-bold bg-gradient-to-r from-[#2959c7] to-[#fe3158] bg-clip-text text-transparent">
                          ${item.precio.toLocaleString('es-AR')}
                        </p>
                      </div>
                      <button
                        onClick={() => eliminarDelCarrito(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Eliminar del carrito"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Cantidad:
                      </span>
                      <div className={`flex items-center border rounded-lg ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      }`}>
                        <button
                          onClick={() => decrementarCantidad(item.id)}
                          className={`px-3 py-1 font-semibold transition-colors ${
                            darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          −
                        </button>
                        <span className={`px-4 py-1 font-bold min-w-12 text-center ${
                          darkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {item.cantidad}
                        </span>
                        <button
                          onClick={() => incrementarCantidad(item.id)}
                          className={`px-3 py-1 font-semibold transition-colors ${
                            darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          +
                        </button>
                      </div>
                      <span className={`ml-auto font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <div className={`rounded-lg p-6 border sticky top-24 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
              }`}>
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Resumen
                </h2>

                <div className={`space-y-3 mb-6 pb-6 border-b ${
                  darkMode ? 'border-gray-700' : 'border-gray-300'
                }`}>
                  <div className={`flex justify-between ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span>Subtotal:</span>
                    <span>${calcularTotal().toLocaleString('es-AR')}</span>
                  </div>
                  <div className={`flex justify-between ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span>Envío:</span>
                    <span className="text-green-600 font-semibold">Gratis</span>
                  </div>
                  <div className={`flex justify-between ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span>Impuestos:</span>
                    <span>Calculados al pagar</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center text-xl">
                    <span className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Total:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#2959c7] to-[#fe3158] bg-clip-text text-transparent">
                      ${calcularTotal().toLocaleString('es-AR')}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => setShowPhoneModal(true)}
                    className="w-full bg-gradient-to-r from-[#2959c7] to-[#fe3158] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    Proceder al Pago
                  </button>
                  <button
                    onClick={() => window.location.href = '/catalogo'}
                    className={`w-full border-2 font-bold py-3 rounded-lg transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600' 
                        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    Seguir Comprando
                  </button>
                  <button
                    onClick={vaciarCarrito}
                    className={`w-full border font-semibold py-2 rounded-lg transition-colors duration-300 ${
                      darkMode
                        ? 'text-red-400 border-red-800 hover:bg-red-900/20'
                        : 'text-red-600 border-red-300 hover:bg-red-50'
                    }`}
                  >
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal - Solicitar número de teléfono */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl max-w-md w-full p-8 shadow-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              Ingresa tu Teléfono
            </h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Necesitamos tu número para contactarte sobre tu pedido
            </p>
            
            <input
              type="tel"
              value={buyerPhone}
              onChange={(e) => setBuyerPhone(e.target.value.replace(/\D/g, ''))}
              placeholder="Ej: 5512345678"
              className={`w-full px-4 py-3 border-2 rounded-lg mb-6 focus:outline-none focus:border-[#2959c7] ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-800'
              }`}
              autoFocus
            />
            
            <div className="space-y-3">
              <button
                onClick={enviarWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                📱 Enviar por WhatsApp
              </button>
              <button
                onClick={() => setShowPhoneModal(false)}
                className={`w-full font-semibold py-3 rounded-lg transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}