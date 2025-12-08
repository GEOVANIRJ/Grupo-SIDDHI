'use client';

import Header from '@/components/Header';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Ubicacion() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-32">
        <div className="bg-gradient-to-b from-gray-800 to-black py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">UBICACIÓN</h1>
          <p className="text-xl opacity-80">Visítanos en nuestro taller</p>
        </div>

        <div className="max-w-4xl mx-auto py-16 px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Información */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-white flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Dirección</h3>
                  <p className="text-gray-400">Zumpango, Estado de México</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-white flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                  <p className="text-gray-400">(+55) 1234-5678</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-white flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-400">info@gruposiddhi.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-white flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Horarios</h3>
                  <p className="text-gray-400">Lun - Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-400">Sábado: 10:00 - 16:00</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8788858462534!2d-99.16180272346948!3d19.83805968212894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd0f0f0f0f0f%3A0x0!2sZumpango!5e0!3m2!1ses!2smx!4v1234567890"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
