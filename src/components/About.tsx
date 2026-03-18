import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-nude-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden border-8 border-white shadow-xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                alt="Tratamiento estético" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nude-300 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-nude-400 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-nude-600 font-semibold mb-4 block">
              Nuestra Filosofía
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
              La excelencia en <br/>
              <span className="italic text-nude-700">medicina estética</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 font-light text-lg">
              <p>
                En <strong>Beauty Estética Avanzada</strong>, creemos que la verdadera belleza reside en la naturalidad. Nuestro enfoque se basa en realzar tus rasgos únicos, no en transformarlos.
              </p>
              <p>
                Combinamos la tecnología más vanguardista del sector con un equipo de profesionales altamente cualificados para ofrecerte tratamientos seguros, eficaces y con resultados visibles desde la primera sesión.
              </p>
              <p>
                Cada paciente es único, por eso nuestro protocolo siempre comienza con un diagnóstico exhaustivo y personalizado. Tu bienestar y confianza son nuestra mayor prioridad.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-nude-800 mb-2">+10</h4>
                <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">Años de experiencia</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-nude-800 mb-2">100%</h4>
                <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">Atención personalizada</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
