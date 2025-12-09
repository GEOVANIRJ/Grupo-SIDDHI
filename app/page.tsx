'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
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
        {/* Fondo con animación Ken Burns (usa imagen en public/) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          
      <div
        className="absolute inset-0 bg-center bg-cover bg-kenburns z-0 transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

          {/* overlay para mejorar contraste del texto (light/dark) */}
          <div className="absolute inset-0 z-10 bg-white/30" />

          {/* Elementos decorativos */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-10"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-10"></div>
        </div>

        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in-down">
            GRUPO SIDDHI
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-in-up max-w-2xl mx-auto">
            Diseño y corte de precisión en Zumpango
          </p>
          <Link
            href="/catalogo"
            className="inline-block bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-lg transition-all duration-300 animate-fade-in-up hover:scale-105 hover:shadow-2xl"
          >
            Ver catálogo
          </Link>
        </div>
      </section>
    </div>
  );
}

