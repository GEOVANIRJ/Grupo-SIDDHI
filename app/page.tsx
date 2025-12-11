'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const images = [
    "/img/fondo-home.png",
    "/img/fondo-home2.png",
    "/img/fondo-home3.png",
    "/img/fondo-home4.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar modo oscuro inicial y escuchar cambios
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDark);
    };

    checkDarkMode();

    const handleDarkModeChange = () => {
      checkDarkMode();
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => window.removeEventListener('darkModeChanged', handleDarkModeChange);
  }, []);

  return (
    <div className={`min-h-screen font-poppins transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .nav-icon-hover {
          transition: all 0.3s ease;
        }
        
        /* Ken Burns background animation */
        @keyframes kenburns {
          0% {
            transform: scale(1) translateY(0);
            filter: brightness(0.9) saturate(1);
          }
          100% {
            transform: scale(1.12) translateY(-4%);
            filter: brightness(0.95) saturate(1.03);
          }
        }

        .bg-kenburns {
          animation: kenburns 24s ease-in-out infinite alternate;
          transform-origin: center;
          will-change: transform, filter;
        }
      `}</style>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section 
        className="relative h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Fondo con animación Ken Burns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover bg-kenburns z-0 transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />

          {/* Overlay adaptativo según modo oscuro */}
          <div className={`absolute inset-0 z-10 transition-colors duration-300 ${
            darkMode ? 'bg-black/50' : 'bg-white/30'
          }`} />

          {/* Elementos decorativos adaptativos */}
          <div className={`absolute top-20 left-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-10 transition-colors duration-300 ${
            darkMode ? 'bg-blue-500' : 'bg-gray-700'
          }`}></div>
          <div className={`absolute bottom-20 right-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-10 transition-colors duration-300 ${
            darkMode ? 'bg-purple-500' : 'bg-gray-600'
          }`}></div>
        </div>

        <div className="text-center z-10 px-4">
          <h1 className={`text-6xl md:text-7xl font-bold mb-4 animate-fade-in-down transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            GRUPO SIDDHI
          </h1>
          <p className={`text-xl md:text-2xl mb-8 animate-fade-in-up max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Diseño y corte de precisión en Zumpango
          </p>
          <Link
            href="/catalogo"
            className={`inline-block font-semibold px-8 py-4 rounded-lg transition-all duration-300 animate-fade-in-up hover:scale-105 hover:shadow-2xl ${
              darkMode 
                ? 'bg-gradient-to-r from-[#2959c7] to-[#fe3158] text-white hover:from-[#1e4aa8] hover:to-[#e12847]' 
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Ver catálogo
          </Link>
        </div>
      </section>
    </div>
  );
}

