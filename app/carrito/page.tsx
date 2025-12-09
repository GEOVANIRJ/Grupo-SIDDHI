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

  useEffect(() => {
    // Cargar carrito desde localStorage
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito') || '[]');
    setCarrito(carritoGuardado);
    setLoading(false);
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
      <div className="min-h-screen bg-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gradient-to-r from-[#2959c7] to-[#fe3158] mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando carrito...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
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
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">Agrega productos de nuestro catálogo para empezar</p>
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
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">{item.nombre}</h3>
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
                      <span className="text-sm font-medium text-gray-600">Cantidad:</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => decrementarCantidad(item.id)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition-colors font-semibold"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 font-bold text-gray-800 min-w-12 text-center">{item.cantidad}</span>
                        <button
                          onClick={() => incrementarCantidad(item.id)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition-colors font-semibold"
                        >
                          +
                        </button>
                      </div>
                      <span className="ml-auto font-bold text-gray-800">
                        Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Resumen</h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span>${calcularTotal().toLocaleString('es-AR')}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Envío:</span>
                    <span className="text-green-600 font-semibold">Gratis</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Impuestos:</span>
                    <span>Calculados al pagar</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center text-xl">
                    <span className="font-bold text-gray-800">Total:</span>
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
                    className="w-full bg-white border-2 border-gray-300 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Seguir Comprando
                  </button>
                  <button
                    onClick={vaciarCarrito}
                    className="w-full text-red-600 border border-red-300 font-semibold py-2 rounded-lg hover:bg-red-50 transition-colors duration-300"
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
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingresa tu Teléfono</h2>
            <p className="text-gray-600 mb-6">Necesitamos tu número para contactarte sobre tu pedido</p>
            
            <input
              type="tel"
              value={buyerPhone}
              onChange={(e) => setBuyerPhone(e.target.value.replace(/\D/g, ''))}
              placeholder="Ej: 5512345678"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-[#2959c7] text-gray-800"
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
                className="w-full bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300"
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
