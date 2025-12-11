'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare } from 'lucide-react';

export default function Ubicacion() {
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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode
      ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white'
      : 'bg-gradient-to-b from-white to-gray-50 text-black'
      }`}>
      <Header />
      <div className="pt-32">
        {/* Hero Section */}
        <div className="relative py-20 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e55] via-[#fe3158] to-[#0b0506]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2959c7] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">ENCUÉNTRANOS</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Visítanos en nuestro taller y conoce nuestro trabajo
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-20 px-6 md:px-8">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Información de Contacto */}
            <div className="space-y-6">
              <div className="mb-8">
                <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#ff2e55]/10 to-[#2959c7]/10 rounded-full">
                  <span className="text-sm font-semibold bg-gradient-to-r from-[#ff2e55] to-[#2959c7] bg-clip-text text-transparent">
                    INFORMACIÓN DE CONTACTO
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Estamos aquí para ti</h2>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Contáctanos por cualquiera de estos medios. Estamos listos para ayudarte con tu proyecto.
                </p>
              </div>

              {/* Teléfono */}
              <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:border-[#ff2e55] ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gradient-to-br from-[#ff2e55] to-[#fe3158] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Teléfono</h3>
                    <a href="tel:+5512345678" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-[#ff2e55]' : 'text-gray-600 hover:text-[#2959c7]'
                      }`}>
                      +55 1234 5678
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:border-[#2959c7] ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gradient-to-br from-[#2959c7] to-[#1e47a1] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <a href="mailto:info@gruposiddhi.com" className={`break-all transition-colors ${darkMode ? 'text-gray-300 hover:text-[#ff2e55]' : 'text-gray-600 hover:text-[#2959c7]'
                      }`}>
                      info@gruposiddhi.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:border-[#ff2e55] ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gradient-to-br from-[#ff2e55] to-[#2959c7] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Horario de Atención</h3>
                    <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <p>Lunes - Sabado: <span className="font-medium">9:00 - 19:00</span></p>
                      <p>Domingo: <span className="font-medium">Cerrado</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <a
                  href="https://wa.me/5212345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-3 rounded-xl font-bold hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageSquare size={20} />
                  WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/48mZALHPpFXAie8Z9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff2e55] to-[#fe3158] text-white px-6 py-3 rounded-xl font-bold hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Navigation size={20} />
                  Google Maps
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="lg:sticky lg:top-32">
              <div className="space-y-4">
                <div className={`h-[600px] relative rounded-3xl overflow-hidden shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1578.3936815741893!2d-99.10353880875239!3d19.794459887858277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18bf5d8e2a0f3%3A0x8cef90a6f6bc1bb6!2sCorte%20Laser%20Shiddi!5e0!3m2!1ses-419!2smx!4v1765447682111!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                </div>
                <div className={`p-6 rounded-2xl border shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <MapPin size={20} className="text-[#ff2e55]" />
                    Dirección
                  </h3>
                  <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Av. Jesus Carranza 26, San Juan<br />
                    Código Postal 55600<br />
                    Zumpango de Ocampo, Méx.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}