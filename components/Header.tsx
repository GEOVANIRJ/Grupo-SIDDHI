'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Package, MapPin, Users } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/catalogo', label: 'Catálogo', icon: Package },
  { href: '/ubicacion', label: 'Ubicación', icon: MapPin },
  { href: '/nosotros', label: 'Nosotros', icon: Users },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-0 w-full bg-black border-b border-gray-800 px-8 py-4 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold">CORTE LÁSER ZUMPANGO</h3>
        </div>

        <nav className="flex gap-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex flex-col items-center text-sm text-white transition-all duration-300 hover:text-gray-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Icon 
                  size={24}
                  className={`transition-all ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
