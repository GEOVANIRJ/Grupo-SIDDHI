'use client';

import { useState, useEffect } from 'react';
import { Home, Package, MapPin, Users, Menu, X, ShoppingCart, Check } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/catalogo', label: 'Catálogo', icon: Package },
  { href: '/ubicacion', label: 'Ubicación', icon: MapPin },
  { href: '/nosotros', label: 'Nosotros', icon: Users },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
      setCartCount(carrito.length);
    };
    
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    setCartCount(carrito.length);
    
    // Escuchar eventos personalizados del carrito
    const handleCartEvent = (e: any) => {
      updateCartCount();
      if (e.detail?.message) {
        setToastMessage(e.detail.message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    };
    
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('cartAction', handleCartEvent);
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('cartAction', handleCartEvent);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full px-4 md:px-8 py-4 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2959c7] to-[#fe3158] rounded-full blur-md opacity-50"></div>
            <img 
              src="/logo.jpg" 
              alt="SIDDHI" 
              className="relative w-10 h-10 md:w-12 md:h-12 object-contain rounded-full ring-2 ring-white shadow-lg" 
            />
          </div>
          <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-[#2959c7] to-[#fe3158] bg-clip-text text-transparent">
            GRUPO SIDDHI
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2 items-center">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'bg-gradient-to-r from-[#2959c7] to-[#fe3158] text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Icon size={18} />
                <span className="font-medium text-sm">{item.label}</span>
              </a>
            );
          })}
          
          {/* Carrito Icon */}
          <a 
            href="/carrito"
            className="relative ml-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gradient-to-r from-[#ff2e55] to-[#fe3158] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gradient-to-r from-[#ff2e55] to-[#fe3158] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay - cierra menú al hacer clic fuera */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 top-16 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 z-40 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#2959c7] hover:to-[#fe3158] hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </a>
            );
          })}
          
          {/* Carrito in mobile menu */}
          <a 
            href="/carrito"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-[#2959c7] hover:to-[#fe3158] hover:text-white transition-all duration-300 relative"
          >
            <ShoppingCart size={20} />
            <span className="font-medium">Carrito</span>
            {cartCount > 0 && (
              <span className="ml-auto bg-gradient-to-r from-[#ff2e55] to-[#fe3158] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>

      {/* Toast notification - Alerta cuando se agrega al carrito */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
            <div className="flex-shrink-0">
              <Check size={20} className="text-white" />
            </div>
            <span className="font-semibold">{toastMessage}</span>
          </div>
        </div>
      )}
    </header>
  );
}