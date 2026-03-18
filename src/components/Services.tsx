import React from 'react';
import { motion } from 'motion/react';

const services = [
  {
    id: 'faciales',
    title: 'Tratamientos Faciales',
    description: 'Higiene profunda, Peeling, Microneedling y Rejuvenecimiento para una piel radiante y luminosa.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'corporales',
    title: 'Tratamientos Corporales',
    description: 'Remodelación, tratamiento de celulitis y flacidez. Esculpe tu figura con tecnología avanzada.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'medicina',
    title: 'Medicina Estética',
    description: 'Bótox, rellenos dérmicos y armonización facial. Resultados naturales realizados por médicos expertos.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'laser',
    title: 'Depilación Láser Diodo',
    description: 'Eliminación del vello de forma segura, rápida y eficaz para todo tipo de pieles.',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-nude-600 font-semibold mb-2 block">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Tratamientos Exclusivos</h2>
          <div className="w-16 h-px bg-nude-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <h3 className="text-2xl mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                {service.description}
              </p>
              <a 
                href={`https://wa.me/34608037243?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm uppercase tracking-wider text-nude-800 font-medium hover:text-nude-600 transition-colors"
              >
                Saber más <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
