'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Cart from '../../components/Cart';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
}

const PRODUCTOS: Producto[] = [
  { id: 1, nombre: "Letrero MDF 3mm", precio: 120, categoria: "letras", imagen: "https://via.placeholder.com/300x200?text=Letrero+MDF" },
  { id: 2, nombre: "Decoración Mandala", precio: 250, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Mandala" },
  { id: 3, nombre: "Llaveros personalizados", precio: 60, categoria: "regalos", imagen: "https://via.placeholder.com/300x200?text=Llaveros" },
  { id: 4, nombre: "Nombre en acrílico", precio: 180, categoria: "personalizados", imagen: "https://via.placeholder.com/300x200?text=Acrilico" },
  { id: 5, nombre: "Portarretratos", precio: 150, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Portarretratos" },
];

export default function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>(PRODUCTOS);
  const [filtro, setFiltro] = useState('todos');

  const categorias = ['todos', ...new Set(PRODUCTOS.map(p => p.categoria))];

  const handleFiltro = (categoria: string) => {
    setFiltro(categoria);
    if (categoria === 'todos') {
      setProductos(PRODUCTOS);
    } else {
      setProductos(PRODUCTOS.filter(p => p.categoria === categoria));
    }
  };

  const agregarCarrito = (id: number) => {
    const producto = PRODUCTOS.find(p => p.id === id);
    if (producto) {
      const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      // Notify cart component to refresh
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-32">
        <div className="bg-gradient-to-b from-gray-800 to-black py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">CATÁLOGO</h1>
          <p className="text-xl opacity-80">Descubre nuestros productos y servicios</p>
        </div>

        {/* Carrito arriba del catálogo */}
        <div className="max-w-6xl mx-auto px-8">
          <Cart />
        </div>

        <div className="w-full bg-black text-white py-12 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Filtros */}
            <div className="mb-12 flex flex-wrap gap-4 justify-center">
              {categorias.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleFiltro(cat)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    filtro === cat
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Grid de productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.map(producto => (
                <div
                  key={producto.id}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all"
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                    <p className="text-gray-300 text-2xl font-bold mb-4">
                      ${producto.precio}
                    </p>
                    <button
                      onClick={() => agregarCarrito(producto.id)}
                      className="w-full bg-white text-black hover:bg-gray-200 text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                    >
                      <ShoppingCart size={20} />
                      Agregar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
