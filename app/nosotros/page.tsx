'use client';

import Header from '@/components/Header';
import { Users, Zap, Award, Target, Heart, Lightbulb } from 'lucide-react';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 text-black dark:text-white transition-colors duration-300">
      <Header />
      <div className="pt-32">
        {/* Hero Section */}
        <div className="relative py-20 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#224eb9] via-[#2959c7] to-[#071233]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fe3158] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">SOBRE NOSOTROS</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Transformando ideas en realidad con precisión y pasión
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-20 px-6 md:px-8">
          {/* Historia */}
          <div className="mb-28 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#2959c7]/10 to-[#fe3158]/10 rounded-full">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#2959c7] to-[#fe3158] bg-clip-text text-transparent">
                NUESTRA HISTORIA
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white">
              Una Década de Excelencia
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Somos una empresa especializada en corte y grabado láser con más de 10 años 
              de experiencia. Nos dedicamos a transformar tus ideas en productos de calidad 
              usando tecnología de punta y atención personalizada. Cada proyecto es una 
              oportunidad para superar expectativas y crear soluciones únicas.
            </p>
          </div>

          {/* Valores */}
          <div className="mb-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center dark:text-white">
              Nuestros Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl text-center hover:translate-y-[-8px] transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2959c7]/5 to-[#fe3158]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#2959c7] to-[#2959c7]/80 rounded-2xl mb-6 shadow-lg">
                    <Award size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">Calidad</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Productos con los más altos estándares de precisión y durabilidad
                  </p>
                </div>
              </div>

              <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl text-center hover:translate-y-[-8px] transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2959c7]/5 to-[#fe3158]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#fe3158] to-[#fe3158]/80 rounded-2xl mb-6 shadow-lg">
                    <Zap size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">Innovación</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Tecnología de vanguardia para materializar tus proyectos más ambiciosos
                  </p>
                </div>
              </div>

              <div className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl text-center hover:translate-y-[-8px] transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2959c7]/5 to-[#fe3158]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#2959c7] to-[#fe3158] rounded-2xl mb-6 shadow-lg">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-white">Servicio</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Atención personalizada y compromiso en cada etapa de tu proyecto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misión, Visión, Filosofía */}
          <div className="mb-28 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <Target className="text-[#2959c7] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Misión</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Proporcionar soluciones de corte y grabado láser de alta calidad que superen 
                las expectativas de nuestros clientes, combinando precisión técnica con creatividad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <Lightbulb className="text-[#fe3158] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Visión</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ser la empresa líder en tecnología láser en México, reconocida por nuestra 
                innovación constante y compromiso con la excelencia en cada proyecto.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <Heart className="text-[#2959c7] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Filosofía</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Creemos en el poder de la tecnología para transformar ideas en realidad. 
                Cada proyecto es una oportunidad para crear algo extraordinario.
              </p>
            </div>
          </div>

          {/* Equipo */}
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#2959c7]/10 to-[#fe3158]/10 rounded-full">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#2959c7] to-[#fe3158] bg-clip-text text-transparent">
                NUESTRO EQUIPO
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Expertos Apasionados
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
              Un equipo dedicado de profesionales con años de experiencia en diseño y tecnología láser
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { role: 'Diseño y Desarrollo', desc: 'Especialista en conceptualización y diseño técnico de proyectos' },
                { role: 'Producción Láser', desc: 'Experto en operación y optimización de tecnología láser' },
                { role: 'Control de Calidad', desc: 'Garantiza la excelencia en cada producto terminado' }
              ].map((member, i) => (
                <div key={i} className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800">
                  <div className="relative w-full h-64 bg-gradient-to-br from-[#2959c7] to-[#fe3158] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-900/50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users size={80} className="text-white/30" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 dark:text-white">Especialista {i + 1}</h4>
                    <p className="text-[#2959c7] dark:text-[#fe3158] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-28 text-center bg-gradient-to-br from-[#2959c7] to-[#fe3158] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para tu próximo proyecto?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Trabajemos juntos para hacer realidad tus ideas con la mejor tecnología láser
              </p>
              <a 
                href="/catalogo" 
                className="inline-block bg-white text-[#2959c7] px-8 py-4 rounded-xl font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}