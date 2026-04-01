import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Play, Music, Gamepad2, Tv, Film, Radio, Phone, Heart, Gift, Disc, Shield, Cloud, Zap, Users, CheckCircle, Star, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloatingParticles } from './FloatingParticles';

// Import official Weclix service icons
import weclixPlayIcon from 'figma:asset/810bee7d411166cdfd06ff3a1110faf44369e223.png';
import weclixSaudeIcon from 'figma:asset/5406f560b6c4f27a3c04fc17223a089a96e15a15.png';
import weclixFixoIcon from 'figma:asset/5a2e80fdb5b2a51c082fbdbe49a347ee80f51284.png';
import weclixVantagensIcon from 'figma:asset/5ebf228282371006d42b31d4fed99514f224aca2.png';

// Import partner app logos
import deezerLogo from 'figma:asset/afbd2b20edd23ffe0c840bf510c256756db4f512.png';
import disneyPlusLogo from 'figma:asset/f6e9d3cdf90bd5d30b64e9a20d52810bf820c539.png';
import globoPlayLogo from 'figma:asset/5bd10446f02080c5d09ca010dfadf7b8a6d05daf.png';
import exitLagLogo from 'figma:asset/f8027bc1a0ee8c9f43e004372b4aa4a0de549038.png';
import hboMaxLogo from 'figma:asset/bd5738bcd7f63efc9cb8b826fb3841611c2e4d92.png';

export function FamilyBenefits() {
  const businessServices = [
    {
      name: "Weclix Business Cloud",
      icon: <ImageWithFallback src={weclixPlayIcon} alt="Weclix Business Cloud" className="w-full h-full object-contain" />,
      description: "Armazenamento em nuvem seguro para backup de arquivos empresariais",
      category: "Weclix",
      isWeclixOwn: true,
      useCustomIcon: true
    },
    {
      name: "Weclix Fixo Empresarial",
      icon: <ImageWithFallback src={weclixFixoIcon} alt="Weclix Fixo Empresarial" className="w-full h-full object-contain" />,
      description: "Linha telefônica dedicada com ramais ilimitados para sua empresa",
      category: "Weclix",
      isWeclixOwn: true,
      useCustomIcon: true
    },
    {
      name: "Weclix Security",
      icon: <ImageWithFallback src={weclixSaudeIcon} alt="Weclix Security" className="w-full h-full object-contain" />,
      description: "Monitoramento de segurança digital 24/7 para proteger dados empresariais",
      category: "Weclix",
      isWeclixOwn: true,
      useCustomIcon: true
    },
    {
      name: "Weclix Business Hub",
      icon: <ImageWithFallback src={weclixVantagensIcon} alt="Weclix Business Hub" className="w-full h-full object-contain" />,
      description: "Plataforma de colaboração com ferramentas de produtividade para equipes",
      category: "Weclix",
      isWeclixOwn: true,
      useCustomIcon: true
    },
    {
      name: "Microsoft 365",
      icon: <ImageWithFallback src={disneyPlusLogo} alt="Microsoft 365" className="w-full h-full object-contain" />,
      description: "Suite completa de produtividade com Word, Excel, PowerPoint e Teams integrados",
      category: "Produtividade",
      isWeclixOwn: false,
      useCustomIcon: true
    },
    {
      name: "Google Workspace",
      icon: <ImageWithFallback src={globoPlayLogo} alt="Google Workspace" className="w-full h-full object-contain" />,
      description: "Colaboração em tempo real com Gmail empresarial, Drive e Meet profissional",
      category: "Colaboração",
      isWeclixOwn: false,
      useCustomIcon: true
    },
    {
      name: "Zoom Pro",
      icon: <ImageWithFallback src={hboMaxLogo} alt="Zoom Pro" className="w-full h-full object-contain" />,
      description: "Videoconferências profissionais com qualidade HD e recursos avançados",
      category: "Comunicação",
      isWeclixOwn: false,
      useCustomIcon: true
    },
    {
      name: "Slack Business",
      icon: <ImageWithFallback src={deezerLogo} alt="Slack Business" className="w-full h-full object-contain" />,
      description: "Comunicação empresarial otimizada com canais dedicados e integrações",
      category: "Comunicação",
      isWeclixOwn: false,
      useCustomIcon: true
    },
    {
      name: "VPN Empresarial",
      icon: <ImageWithFallback src={exitLagLogo} alt="VPN Empresarial" className="w-full h-full object-contain" />,
      description: "Acesso remoto seguro aos sistemas empresariais com criptografia avançada",
      category: "Segurança",
      isWeclixOwn: false,
      useCustomIcon: true
    }
  ];

  const categories = [
    { name: "Serviços Weclix", icon: <Heart className="w-6 h-6" />, count: 4, color: "from-[#02B3AA] to-[#02B3AA]/80" },
    { name: "Produtividade", icon: <Film className="w-6 h-6" />, count: 3, color: "from-blue-400 to-blue-600" },
    { name: "Comunicação & Segurança", icon: <Music className="w-6 h-6" />, count: 2, color: "from-purple-400 to-purple-600" }
  ];

  const businessFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IP Fixo Dedicado",
      description: "Endereço IP fixo exclusivo para sua empresa com maior estabilidade e segurança"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suporte Prioritário 24/7",
      description: "Atendimento especializado com técnicos dedicados para empresas"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Alta Performance",
      description: "Internet empresarial com máxima velocidade para suportar múltiplos usuários e aplicações críticas."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Backup Automático",
      description: "Sistema de backup em nuvem para proteção total dos seus dados"
    }
  ];

  return (
    <section className="relative bg-[#151e47] overflow-visible">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col items-center py-24">
          <div className="text-center px-4 max-w-6xl mx-auto w-full">
            
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-[#1C1F3C] hover:bg-[#1C1F3C]/90 rounded-full shadow-lg shadow-black/20 mb-10 border border-white/5 group transition-all duration-300">
              <Globe className="w-5 h-5 text-[#2ba9a0] mr-3 group-hover:animate-pulse" />
              <span className="text-white font-semibold">Conectividade empresarial do futuro</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-bold leading-tight">
              Conectividade sob medida
              <span className="block text-[#2ba9a0]">
                para sua empresa
              </span>
            </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Nossa equipe comercial está pronta para desenvolver a solução ideal para suas necessidades empresariais
              </p>

              {/* Business Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {businessFeatures.filter((_, index) => index !== 3).map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-[32px] p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-[#2ba9a0] mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-white text-lg mb-2 text-center">{feature.title}</h3>
                    <p className="text-gray-300 text-sm text-center leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>


            </div>
          </div>
        
        {/* Floating Network Nodes (maintained as background elements) */}
        <div className="absolute inset-0 pointer-events-none">
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

      {/* Business Services Section */}
      <div className="relative container mx-auto px-4 mt-32">

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
}