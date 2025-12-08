'use client';

import Header from '@/components/Header';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare } from 'lucide-react';

export default function Ubicacion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 text-black dark:text-white transition-colors duration-300">
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
                <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
                  Estamos aquí para ti
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Contáctanos por cualquiera de estos medios. Estamos listos para ayudarte con tu proyecto.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-[#ff2e55] dark:hover:border-[#ff2e55]">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gradient-to-br from-[#ff2e55] to-[#ff2e55]/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 dark:text-white">Dirección</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Zumpango, Estado de México<br />
                        <span className="text-sm">A solo minutos del centro</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-[#2959c7] dark:hover:border-[#2959c7]">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gradient-to-br from-[#2959c7] to-[#2959c7]/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 dark:text-white">Teléfono</h3>
                      <a href="tel:+5512345678" className="text-gray-600 dark:text-gray-400 hover:text-[#2959c7] dark:hover:text-[#2959c7] transition-colors">
                        (+55) 1234-5678
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        Llamadas y WhatsApp
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-[#ff2e55] dark:hover:border-[#ff2e55]">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gradient-to-br from-[#ff2e55] to-[#2959c7] rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 dark:text-white">Email</h3>
                      <a href="mailto:info@gruposiddhi.com" className="text-gray-600 dark:text-gray-400 hover:text-[#2959c7] dark:hover:text-[#2959c7] transition-colors break-all">
                        info@gruposiddhi.com
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        Respuesta en 24 horas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-[#2959c7] dark:hover:border-[#2959c7]">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gradient-to-br from-[#2959c7] to-[#ff2e55] rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 dark:text-white">Horarios</h3>
                      <div className="space-y-1 text-gray-600 dark:text-gray-400">
                        <p>Lunes - Viernes: <span className="font-medium">9:00 - 18:00</span></p>
                        <p>Sábado: <span className="font-medium">10:00 - 16:00</span></p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                          Domingo: Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <a 
                  href="https://wa.me/5212345678" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-4 rounded-xl font-bold hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <MessageSquare size={20} />
                  WhatsApp
                </a>
                <a 
                  href="https://maps.google.com/?q=Zumpango,Estado+de+México" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2959c7] to-[#ff2e55] text-white px-6 py-4 rounded-xl font-bold hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Navigation size={20} />
                  Cómo llegar
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                <div className="h-[600px] relative">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8788858462534!2d-99.16180272346948!3d19.83805968212894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd0f0f0f0f0f%3A0x0!2sZumpango!5e0!3m2!1ses!2smx!4v1234567890"
                    allowFullScreen
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      📍 Zumpango, Estado de México
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Haz clic en el mapa para abrir en Google Maps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-28 text-center bg-gradient-to-br from-[#2959c7] to-[#ff2e55] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes alguna pregunta?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                No dudes en contactarnos. Estamos aquí para ayudarte a hacer realidad tu proyecto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+5512345678" 
                  className="inline-block bg-white text-[#2959c7] px-8 py-4 rounded-xl font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Llamar Ahora
                </a>
                <a 
                  href="mailto:info@gruposiddhi.com" 
                  className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#2959c7] hover:transform hover:scale-105 transition-all duration-300"
                >
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}