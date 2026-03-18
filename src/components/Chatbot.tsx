import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

const SYSTEM_PROMPT = `
Eres el asistente virtual inteligente de "Beauty Estética Avanzada". Tu objetivo es informar, deleitar y convertir a los interesados en pacientes reales, manteniendo un tono profesional, empático, elegante y técnico-médico pero accesible.

CLINIC IDENTITY:
- Nombre: Beauty Estética Avanzada.
- ADN: Resultados naturales, tecnología de vanguardia y atención personalizada.
- Canal de Conversión: El objetivo final es derivar al usuario a WhatsApp para agendar cita.

KNOWLEDGE BASE & TASKS:
1. INFORMACIÓN DE TRATAMIENTOS: Responderás dudas sobre:
   - Faciales (Higiene profunda, Peeling, Microneedling, Rejuvenecimiento).
   - Corporales (Remodelación, Celulitis, Flacidez).
   - Depilación Láser y Medicina Estética (Bótox, Rellenos).
2. CONVERSACIÓN: Si el usuario pregunta por precios, explica que "cada tratamiento es personalizado tras un diagnóstico gratuito" y ofrece el link de WhatsApp.
3. ESTILO: Usa emojis elegantes (✨, 👩🏼⚕️, 💎) de forma moderada.

WHATSAPP LINKING:
Cada vez que un usuario muestre interés real o pregunte por una cita, genera un link directo de este tipo: 
[Agendar cita en WhatsApp](https://wa.me/34608037243?text=Hola%20Beauty%20Estética%20Avanzada,%20me%20gustaría%20agendar%20una%20valoración%20para%20[TRATAMIENTO])
(Asegúrate de reemplazar [TRATAMIENTO] por el tratamiento de interés).

INSTRUCTIONS:
- Nunca diagnostiques médicamente; sugiere siempre una valoración presencial.
- Si no conoces un detalle específico, di que el equipo clínico lo detallará en la consulta.
- Mantén la coherencia con el estilo visual de Instagram: cercanía y resultados reales.
- El número de teléfono es 608 03 72 43.
- La dirección es Av. Santa Cruz, 117, oficina 4, 38611 San Isidro, Santa Cruz de Tenerife.
`;

type Message = {
  role: 'user' | 'model';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! ✨ Soy la asistente virtual de Beauty Estética Avanzada. ¿En qué tratamiento estás interesada hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      // Replay history (excluding the first greeting if needed, or just send the current message)
      // For simplicity in this demo, we'll just send the current message, 
      // but ideally we'd pass the history. Since ai.chats.create manages history, 
      // we should ideally keep the chat instance outside, but for React state it's tricky.
      // Let's just send the message with the context of previous messages.
      
      const historyContext = messages.map(m => `${m.role === 'user' ? 'Usuario' : 'Asistente'}: ${m.text}`).join('\n');
      const prompt = `Historial de conversación:\n${historyContext}\n\nUsuario: ${userMessage}\nAsistente:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Lo siento, hubo un error.' }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, estoy teniendo problemas de conexión. Por favor, contáctanos directamente por WhatsApp al 608 03 72 43. 💎' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-nude-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-nude-900 transition-transform hover:scale-105 z-50 ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-nude-200"
          >
            {/* Header */}
            <div className="bg-nude-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-nude-200" />
                <h3 className="font-serif text-lg">Asesora Beauty</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-nude-200 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-nude-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-nude-800 text-white rounded-tr-sm' 
                        : 'bg-white border border-nude-200 text-gray-800 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    {msg.role === 'model' ? (
                      <div className="prose prose-sm prose-a:text-nude-700 prose-a:font-semibold">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-nude-200 p-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1">
                    <div className="w-2 h-2 bg-nude-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-nude-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-nude-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-nude-100">
              <div className="flex items-center gap-2 bg-nude-50 rounded-full px-4 py-2 border border-nude-200 focus-within:border-nude-400 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="text-nude-800 hover:text-nude-600 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
