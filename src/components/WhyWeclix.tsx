import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Zap, Signal, Headphones, Star, Globe, Wifi, Users, Gamepad2, Laptop, Smartphone, Clock, Cable, CheckCircle, Activity } from 'lucide-react';
import logoNew from '../assets/weclix-logo-new.png';

export function WhyWeclix() {
  const features = [
    {
      icon: <Cable className="w-6 h-6" />,
      title: "Fibra dedicada empresarial",
      description: "Conectividade exclusiva sem compartilhamento, garantindo performance máxima para seu negócio"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Velocidade garantida", 
      description: "Upload e download equilibrados, essencial para videoconferências e transferência de arquivos"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "SLA de 99,9% uptime",
      description: "Acordo de nível de serviço com compensação financeira em caso de indisponibilidade"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Suporte técnico prioritário",
      description: "Atendimento especializado 24/7 com tempo de resposta reduzido para empresas"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "IP fixo incluído",
      description: "Acesso remoto seguro aos sistemas da empresa e configuração de servidores próprios"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança corporativa",
      description: "Firewall avançado e monitoramento 24/7 para proteger dados sensíveis da empresa"
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      




      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#02B3AA] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-gray-700 font-medium">Por que somos diferentes</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Por que escolher a{' '}
              <div className="inline-block h-10 ml-2 mr-2 relative align-middle transform -translate-y-1">
                <img src={logoNew} alt="weclix" className="h-full w-auto object-contain" />
              </div>
{' '}
              para sua empresa?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conectividade empresarial com tecnologia de ponta e suporte especializado
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[rgba(255,255,253,0)]">
            {features.map((feature, index) => (
              <Card key={index} className="group relative bg-[#02B3AA] border border-[#02B3AA]/20 p-8 text-center hover:bg-[#02B3AA]/90 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#02B3AA]/20 rounded-[32px]">
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    {/* Simple Icon Circle */}
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-gray-100 transition-colors duration-300">
                        <div className="text-[#02B3AA] group-hover:text-[#02B3AA]/80 transition-colors duration-300">
                          {index === 2 ? <Clock className="w-6 h-6" /> : feature.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-white mb-2 group-hover:text-white/90 transition-colors duration-300 font-[Nunito_Sans] font-bold text-[32px] text-center">
                    {index === 2 ? "Instalação rápida" : feature.title}
                  </h3>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {index === 2 ? "Instalação garantida por equipe especializada após fechamento da contratação." : feature.description}
                  </p>
                </div>

                {/* Connection Network Lines */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-gradient-to-r from-gray-400/60 to-transparent transform -translate-y-1/2 group-hover:from-gray-600/100 transition-all duration-300"></div>
                )}
                {index >= 3 && index < 5 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-gradient-to-r from-gray-400/60 to-transparent transform -translate-y-1/2 group-hover:from-gray-600/100 transition-all duration-300"></div>
                )}
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#1C1F3C] hover:bg-[#1C1F3C]/90 rounded-full shadow-lg shadow-[#1C1F3C]/25 group hover:shadow-[#1C1F3C]/40 transition-all duration-300">
              <Globe className="w-5 h-5 text-white mr-3 group-hover:animate-pulse" />
              <span className="text-white font-semibold">Conectividade empresarial do futuro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}