import React from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import Logo3Fbd9C11 from '../imports/Logo3Fbd9C11';

export function Footer() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/5516996282862?text=Vim do Google e quero saber mais sobre o plano Weclix Empresa';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Company Branding */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <div className="w-32 h-10 mb-4">
                  <Logo3Fbd9C11 />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Weclix lidera em conectividade, oferecendo soluções de internet de alta velocidade com tecnologia de ponta e suporte especializado.
              </p>
            </div>

            {/* Internet Plans */}
            <div>
              <h4 className="text-white font-medium mb-6">Institucional</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Mundo weclix</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Nosso Blog</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Trabalhe conosco</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Relações com investidores</a></li>
              </ul>
            </div>

            {/* Support Services */}
            <div>
              <h4 className="text-white font-medium mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Central de ajuda</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Segunda via</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Suporte técnico</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Atendimento online</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Configuração WiFi</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-medium mb-6">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Sobre a Weclix</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Nossa história</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Trabalhe conosco</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-medium mb-6">Social</h4>
              <ul className="space-y-3 mb-6">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </a></li>
              </ul>
              

            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-12 mt-12 border-t border-gray-800">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">LGPD</a>
            </div>
            
            <div className="text-sm text-gray-400 mt-4 lg:mt-0">
              &copy; 2025 Weclix Internet
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}