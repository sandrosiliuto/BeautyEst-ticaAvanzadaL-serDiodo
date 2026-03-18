import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/34608037243?text=Hola%20Beauty%20Est%C3%A9tica%20Avanzada,%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n.', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
          alt="Clínica de estética" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nude-50/40 via-nude-50/60 to-nude-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-[0.2em] text-nude-800 font-semibold mb-4 block">
            Medicina Estética & Belleza
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Realza tu belleza <br/>
            <span className="italic text-nude-700">de forma natural</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-light">
            Tecnología de vanguardia y atención personalizada para lograr los resultados que siempre has deseado.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleWhatsApp}
              className="bg-nude-800 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-nude-900 transition-colors duration-300 text-sm uppercase tracking-wider w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              Agendar Valoración
            </button>
            <a 
              href="#servicios"
              className="px-8 py-4 rounded-full border border-nude-800 text-nude-800 hover:bg-nude-800 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider w-full sm:w-auto text-center"
            >
              Ver Tratamientos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
