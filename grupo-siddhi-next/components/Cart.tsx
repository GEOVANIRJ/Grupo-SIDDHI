'use client';

import { useEffect, useState } from 'react';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
}

export default function Cart() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [buyerPhone, setBuyerPhone] = useState('');

  useEffect(() => {
    const load = () => {
      const stored = JSON.parse(localStorage.getItem('carrito') || '[]');
      setCarrito(stored);
    };

    load();

    const onUpdate = () => load();
    window.addEventListener('cartUpdated', onUpdate);
    return () => window.removeEventListener('cartUpdated', onUpdate);
  }, []);

  const quitar = (index: number) => {
    const next = [...carrito];
    next.splice(index, 1);
    setCarrito(next);
    localStorage.setItem('carrito', JSON.stringify(next));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const vaciar = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const total = carrito.reduce((s, p) => s + (p.precio || 0), 0);

  const enviarWhatsApp = () => {
    if (!buyerPhone) {
      alert('Por favor ingresa tu número de teléfono antes de enviar.');
      return;
    }

    // Número administrativo que recibirá el pedido (con prefijo 52 para México)
    // Usamos el número que indicaste: 5645689216 -> con prefijo +52 queda 525645689216
    const adminNumber = '525645689216';

    let mensaje = `Pedido desde: ${buyerPhone}%0A`;
    mensaje += `%0AProductos:%0A`;
    carrito.forEach(p => {
      mensaje += `• ${p.nombre} - $${p.precio}%0A`;
    });
    mensaje += `%0ATotal: $${total}`;

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Carrito</h3>

      {carrito.length === 0 ? (
        <p className="text-gray-400">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-3">
          <ul className="space-y-2">
            {carrito.map((p, i) => (
              <li key={i} className="flex items-center justify-between bg-gray-800 p-3 rounded">
                <div>
                  <div className="font-medium">{p.nombre}</div>
                  <div className="text-gray-400 text-sm">${p.precio}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => quitar(i)} className="text-sm px-3 py-1 bg-red-600 rounded text-white">Quitar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-2 border-t border-gray-800">
            <div className="text-gray-300">Total:</div>
            <div className="font-bold">${total}</div>
          </div>

          <div className="mt-4 grid gap-2">
            <label className="text-sm text-gray-300">Número de contacto (compradora):</label>
            <input
              value={buyerPhone}
              onChange={e => setBuyerPhone(e.target.value)}
              placeholder="Ej: 5512345678"
              className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
            />

            <div className="flex gap-2">
              <button onClick={enviarWhatsApp} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold">Enviar por WhatsApp</button>
              <button onClick={vaciar} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Vaciar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
