import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Phone, Zap, Shield, Clock, Gauge } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5516996282862?text=Vim do Google e quero saber mais sobre o plano Weclix Empresa';
    window.open(whatsappUrl, '_blank');
  };

  const handleCommercialClick = () => {
    const phoneUrl = 'tel:+551631234567';
    window.open(phoneUrl, '_self');
  };

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543946602-8496af5aaa53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwaW50ZXJuZXQlMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTczMzAwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}></div>
        </div>
        
        {/* Floating Network Nodes */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-[#02B3AA] rounded-full opacity-60 animate-network-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-80 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/6 w-5 h-5 bg-[#02B3AA]/70 rounded-full opacity-50 animate-network-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-blue-300 rounded-full opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-[#02B3AA]/90 rounded-full opacity-40 animate-network-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-[#02B3AA]/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-[#02B3AA]/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-[#02B3AA]/30 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-px bg-gradient-to-l from-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/6 h-20 w-px bg-gradient-to-b from-[#02B3AA]/20 to-transparent"></div>
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          

          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl text-white leading-tight">
              Pronto para transformar
              <span className="block" style={{ color: '#02B3AA' }}>
                a conectividade da sua empresa?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fale com nossos especialistas em soluções empresariais e descubra como a Weclix pode impulsionar seu negócio.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <div className="w-10 h-10 bg-[#02B3AA] rounded-lg flex items-center justify-center flex-shrink-0">
                <Gauge className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">Instalação Rápida</div>
                <div className="text-xs text-gray-400">Em até 72h</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <div className="w-10 h-10 bg-[#02B3AA] rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">Suporte Prioritário</div>
                <div className="text-xs text-gray-400">24/7 para empresas</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <div className="w-10 h-10 bg-[#02B3AA] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">SLA Garantido</div>
                <div className="text-xs text-gray-400">99,9% uptime</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">



          </div>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Consultoria técnica gratuita
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Proposta personalizada em 24h
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
}