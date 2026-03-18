import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-nude-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-nude-600 font-semibold mb-2 block">
              Visítanos
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">Reserva tu cita</h2>
            
            <p className="text-gray-600 font-light mb-10 text-lg">
              Cada tratamiento es personalizado tras un diagnóstico gratuito. 
              Contacta con nosotros para agendar tu valoración y comenzar tu 
              viaje hacia tu mejor versión.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-nude-200 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-nude-800" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600 font-light">
                    Av. Santa Cruz, 117, oficina 4<br />
                    38611 San Isidro<br />
                    Santa Cruz de Tenerife
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-nude-200 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-nude-800" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Teléfono / WhatsApp</h4>
                  <a href="https://wa.me/34608037243" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-light hover:text-nude-800 transition-colors">
                    +34 608 03 72 43
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-nude-200 flex items-center justify-center shrink-0">
                  <Instagram size={20} className="text-nude-800" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Síguenos</h4>
                  <a href="https://www.instagram.com/beautyesteticaavanzada" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-light hover:text-nude-800 transition-colors">
                    @beautyesteticaavanzada
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Placeholder for Map - In a real app, use Google Maps iframe */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Ubicación de la clínica"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-serif text-gray-900 mb-2">Beauty Estética Avanzada</h3>
                <p className="text-sm text-gray-700 font-light">Av. Santa Cruz, 117, oficina 4, San Isidro</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
