import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../lib/utils';
import Button from './ui/Button';

// Initializing the AI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function ChatHub() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Halo! Saya KreatifHub Assistant. Ada yang bisa saya bantu untuk kebutuhan kreatif Anda hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `
              Persona: You are KreatifHub Assistant, an AI expert specializing in the creative industry in Indonesia.
              Context: You help users on KreatifHub Indonesia, a marketplace for Photographers, Videographers, and Editors.
              Knowledge: Our featured creators include Andi Pratama (Wedding Photo), Siska Putri (Bali Video), Budi Santoso (Product Editor), and Dewi Lestari (Fashion Photo).
              Tone: Professional yet friendly, using a mix of polite Indonesian and creative slang.
              Current user question: ${userMessage}
            ` }]
          }
        ],
      });

      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'bot', content: '' }]);

      for await (const chunk of responseStream) {
        const chunkText = chunk.text;
        fullResponse += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: 'Maaf, sepertinya ada gangguan teknis. Coba lagi nanti ya!' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 bg-[#6366f1] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-opacity",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-[#f0f0f0] flex flex-col overflow-hidden z-[60]"
          >
            {/* Header */}
            <div className="p-4 bg-[#1a1a1a] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#6366f1] rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">KreatifHub AI</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex items-start gap-2 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                    msg.role === 'user' ? "bg-white text-[#1a1a1a]" : "bg-[#6366f1] text-white"
                  )}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-[#6366f1] text-white rounded-tr-none" 
                      : "bg-white text-[#1a1a1a] rounded-tl-none border border-gray-100 shadow-sm"
                  )}>
                    {msg.content || <Loader2 size={16} className="animate-spin text-[#6366f1]" />}
                  </div>
                </motion.div>
              ))}
              {isTyping && messages[messages.length - 1].role === 'user' && (
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Loader2 size={14} className="animate-spin" /> KreatifHub AI sedang mengetik...
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="flex-1 bg-gray-50 border-none rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-[#6366f1] transition-all outline-none"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 p-0 rounded-full shrink-0 shadow-md shadow-[#6366f1]/20"
                >
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
