'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import { ShoppingCart, Package, Tag, Sparkles, TrendingUp } from 'lucide-react';
import Cart from '../../components/Cart';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
  destacado?: boolean;
  nuevo?: boolean;
}

const PRODUCTOS: Producto[] = [
  { id: 1, nombre: "Letrero MDF 3mm", precio: 120, categoria: "letras", imagen: "https://via.placeholder.com/300x200?text=Letrero+MDF", destacado: true },
  { id: 2, nombre: "Decoración Mandala", precio: 250, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Mandala", nuevo: true },
  { id: 3, nombre: "Llaveros personalizados", precio: 60, categoria: "regalos", imagen: "https://via.placeholder.com/300x200?text=Llaveros" },
  { id: 4, nombre: "Nombre en acrílico", precio: 180, categoria: "personalizados", imagen: "https://via.placeholder.com/300x200?text=Acrilico", destacado: true },
  { id: 5, nombre: "Portarretratos", precio: 150, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Portarretratos" },
  { id: 6, nombre: "Letrero Luminoso", precio: 300, categoria: "letras", imagen: "https://via.placeholder.com/300x200?text=Letrero+Luminoso", nuevo: true },
  { id: 7, nombre: "Separadores de Libros", precio: 45, categoria: "regalos", imagen: "https://via.placeholder.com/300x200?text=Separadores" },
  { id: 8, nombre: "Calendario Perpetuo", precio: 200, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Calendario" },
];

const CATEGORIA_INFO = {
  letras: { icon: Package, color: 'from-[#2959c7] to-[#1e47a1]' },
  decoracion: { icon: Sparkles, color: 'from-[#ff2e55] to-[#e91e63]' },
  regalos: { icon: Tag, color: 'from-[#2959c7] to-[#ff2e55]' },
  personalizados: { icon: TrendingUp, color: 'from-[#ff2e55] to-[#2959c7]' },
};

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
      window.dispatchEvent(new Event('cartUpdated'));
      
      // Feedback visual
      const button = document.getElementById(`btn-${id}`);
      if (button) {
        button.textContent = '¡Agregado!';
        setTimeout(() => {
          button.innerHTML = '<svg class="inline" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> Agregar';
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 text-black dark:text-white transition-colors duration-300">
      <Header />
      <div className="pt-32">
        {/* Hero Section */}
        <div className="relative py-20 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e55] via-[#fe3158] to-[#2959c7]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2959c7] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">NUESTRO CATÁLOGO</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Descubre productos únicos hechos con precisión láser
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          {/* Carrito */}
          <div className="mb-12">
            <Cart />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#2959c7] to-[#ff2e55] bg-clip-text text-transparent">{PRODUCTOS.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Productos</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#ff2e55] to-[#2959c7] bg-clip-text text-transparent">{categorias.length - 1}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Categorías</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#2959c7] to-[#ff2e55] bg-clip-text text-transparent">{PRODUCTOS.filter(p => p.nuevo).length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Nuevos</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#ff2e55] to-[#2959c7] bg-clip-text text-transparent">{PRODUCTOS.filter(p => p.destacado).length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Destacados</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-[#ff2e55]/10 to-[#2959c7]/10 rounded-full">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#ff2e55] to-[#2959c7] bg-clip-text text-transparent">
                FILTRAR POR CATEGORÍA
              </span>
            </div>
            <div className="flex flex-wrap gap-3 justify-start">
              {categorias.map(cat => {
                const isActive = filtro === cat;
                const Icon = cat !== 'todos' ? CATEGORIA_INFO[cat as keyof typeof CATEGORIA_INFO]?.icon : Package;
                const gradientColor = cat !== 'todos' ? CATEGORIA_INFO[cat as keyof typeof CATEGORIA_INFO]?.color : 'from-[#2959c7] to-[#ff2e55]';
                
                return (
                  <button
                    key={cat}
                    onClick={() => handleFiltro(cat)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${gradientColor} text-white shadow-lg transform scale-105`
                        : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                    }`}
                  >
                    {Icon && <Icon size={18} />}
                    <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productos.map(producto => (
              <div
                key={producto.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {producto.nuevo && (
                      <span className="bg-gradient-to-r from-[#ff2e55] to-[#fe3158] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        NUEVO
                      </span>
                    )}
                    {producto.destacado && (
                      <span className="bg-gradient-to-r from-[#2959c7] to-[#1e47a1] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        DESTACADO
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {producto.categoria}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 dark:text-white group-hover:text-[#ff2e55] dark:group-hover:text-[#ff2e55] transition-colors">
                    {producto.nombre}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-3xl font-bold">
                      ${producto.precio}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">MXN</span>
                  </div>
                  <button
                    id={`btn-${producto.id}`}
                    onClick={() => agregarCarrito(producto.id)}
                    className="w-full bg-gradient-to-r from-[#ff2e55] to-[#fe3158] hover:from-[#fe3158] hover:to-[#ff2e55] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                  >
                    <ShoppingCart size={20} />
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {productos.length === 0 && (
            <div className="text-center py-20">
              <Package size={64} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
              <h3 className="text-2xl font-bold mb-2 dark:text-white">No hay productos</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No se encontraron productos en esta categoría
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-[#2959c7] to-[#ff2e55] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No encuentras lo que buscas?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Creamos productos personalizados según tus necesidades. ¡Contáctanos!
              </p>
              <a 
                href="/ubicacion" 
                className="inline-block bg-white text-[#2959c7] px-8 py-4 rounded-xl font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}