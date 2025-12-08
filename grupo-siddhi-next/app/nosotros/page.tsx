'use client';

import Header from '@/components/Header';
import { Users, Zap, Award } from 'lucide-react';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-32">
        <div className="bg-gradient-to-b from-gray-800 to-black py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">SOBRE NOSOTROS</h1>
          <p className="text-xl opacity-80">Conoce al equipo detrás de Grupo SIDDHI</p>
        </div>

        <div className="max-w-6xl mx-auto py-16 px-8">
          {/* Historia */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Somos una empresa especializada en corte y grabado láser con más de 10 años 
              de experiencia. Nos dedicamos a transformar tus ideas en productos de calidad 
              usando tecnología de punta y atención personalizada.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all">
              <Award size={48} className="mx-auto text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Calidad</h3>
              <p className="text-gray-400">Productos con los más altos estándares de precisión</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all">
              <Zap size={48} className="mx-auto text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Innovación</h3>
              <p className="text-gray-400">Tecnología de punta para tus proyectos</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-all">
              <Users size={48} className="mx-auto text-white mb-4" />
              <h3 className="text-2xl font-bold mb-2">Servicio</h3>
              <p className="text-gray-400">Atención personalizada en cada proyecto</p>
            </div>
          </div>

          {/* Equipo */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-12">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-900" />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-1">Especialista {i}</h4>
                    <p className="text-gray-400 mb-3">Diseño y Corte Láser</p>
                    <p className="text-gray-500 text-sm">
                      Con años de experiencia en proyectos de precisión
                    </p>
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
