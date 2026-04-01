import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { MessageCircle, Menu, X } from 'lucide-react';
import logoWhite from '../assets/weclix-logo-white.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5516996282862?text=Vim do Google e quero saber mais sobre o plano Weclix Empresa';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-black/10 backdrop-blur-[2px]'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="h-8 md:h-12">
              <img src={logoWhite} alt="weclix" className="h-full w-auto object-contain" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#02B3AA]/20 to-transparent"></div>
    </header>
  );
}