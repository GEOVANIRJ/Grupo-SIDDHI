'use client';

import { useState, useEffect } from 'react';
import { Home, Package, MapPin, Users, Menu, X } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 ${
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
        </div>
      </div>
    </header>
  );
}