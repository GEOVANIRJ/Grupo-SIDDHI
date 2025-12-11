'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Zap, Users, Award } from 'lucide-react';

export default function Nosotros() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-white to-gray-50 text-black'
    }`}>
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">SOBRE NOSOTROS</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Creando soluciones únicas con tecnología láser de precisión
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-20 px-6 md:px-8">
          {/* Misión Statement */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Nuestra Misión</h2>
            <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Proporcionamos productos y servicios de corte y grabado láser de la más alta calidad, personalizados para satisfacer las necesidades específicas de cada cliente.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Valor 1 */}
            <div className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:border-[#ff2e55] ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2959c7]/5 to-[#fe3158]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-[#ff2e55] to-[#fe3158] rounded-2xl mb-6 shadow-lg">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovación</h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Utilizamos tecnología de punta para materializar tus proyectos con precisión y creatividad.
                </p>
              </div>
            </div>

            {/* Valor 2 */}
            <div className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:border-[#2959c7] ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2959c7]/5 to-[#fe3158]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-[#2959c7] to-[#1e47a1] rounded-2xl mb-6 shadow-lg">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Compromiso</h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Nuestro equipo está dedicado a ofrecer el mejor servicio y productos de calidad superior.
                </p>
              </div>
            </div>

            {/* Valor 3 */}
            <div className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:border-[#ff2e55] ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2959c7]/5 to-[#fe3158]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-br from-[#fe3158] to-[#ff2e55] rounded-2xl mb-6 shadow-lg">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excelencia</h3>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Cada proyecto es tratado como una oportunidad para demostrar nuestra pasión por la perfección.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-[#2959c7] to-[#ff2e55] rounded-3xl p-12 md:p-16 text-white mb-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-lg opacity-90">Proyectos Completados</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">100%</p>
                <p className="text-lg opacity-90">Satisfacción Garantizada</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">10+</p>
                <p className="text-lg opacity-90">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-lg opacity-90">Clientes Activos</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo</h2>
            <p className={`text-lg max-w-2xl mx-auto mb-12 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Profesionales apasionados dedicados a transformar tus ideas en realidad
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#2959c7] to-[#ff2e55] rounded-full mb-6"></div>
                  <h3 className="text-xl font-bold mb-2">Miembro del Equipo</h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Especialista en Diseño Láser</p>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>Experto con más de 5 años de experiencia</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`mt-20 text-center p-12 md:p-16 rounded-3xl border-2 ${
            darkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un Proyecto?</h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Contáctanos hoy y transformemos tu idea en realidad
            </p>
            <a 
              href="/ubicacion" 
              className="inline-block bg-gradient-to-r from-[#ff2e55] to-[#fe3158] text-white px-8 py-4 rounded-xl font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}