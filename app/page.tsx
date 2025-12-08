'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      `}</style>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section 
        className="relative h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
          backgroundColor: '#0a0a0a'
        }}
      >
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
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
