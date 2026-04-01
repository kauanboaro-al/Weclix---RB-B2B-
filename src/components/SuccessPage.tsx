import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Check, User, MapPin, Wifi, ArrowLeft, MessageCircle, Star, Zap, Play, Edit, Save, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Logo3Fbd9C11 from '../imports/Logo3Fbd9C11';
import weclixLogo from 'figma:asset/69020851b35481bd32440b6ca254f1c9e29863ed.png';

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
import maxLogo from 'figma:asset/bd5738bcd7f63efc9cb8b826fb3841611c2e4d92.png';

interface SuccessPageProps {
  userData: {
    name: string;
    whatsapp: string;
    city: string;
  };
  selectedPlan: {
    name: string;
    speed: string;
    price: string;
    tagline?: string;
    apps?: string[];
    features?: string[];
  } | null;
  onBack: () => void;
  onNewSimulation: () => void;
  onUpdateUserData?: (userData: { name: string; whatsapp: string; city: string }) => void;
}

export function SuccessPage({ userData, selectedPlan, onBack, onNewSimulation, onUpdateUserData }: SuccessPageProps) {
  // Early return if no plan is selected
  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1c1f3c] mb-4">Nenhum plano selecionado</h2>
          <p className="text-gray-600 mb-6">Por favor, volte e selecione um plano.</p>
          <Button onClick={onBack} className="bg-[#2ba9a0] text-white hover:bg-[#2ba9a0]/90">
            Voltar aos Planos
          </Button>
        </div>
      </div>
    );
  }
  // Estados para edição
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState({
    name: userData.name,
    whatsapp: userData.whatsapp
  });

  // Função para formatar telefone
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const limitedNumbers = numbers.slice(0, 11);
    
    if (limitedNumbers.length <= 2) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 6) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
    } else if (limitedNumbers.length <= 10) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`;
    } else {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`;
    }
  };

  // Funções de edição
  const handleEditClick = () => {
    setIsEditing(true);
    setEditingData({
      name: userData.name,
      whatsapp: userData.whatsapp
    });
  };

  const handleSaveEdit = () => {
    if (onUpdateUserData) {
      onUpdateUserData({
        name: editingData.name,
        whatsapp: editingData.whatsapp,
        city: userData.city
      });
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingData({
      name: userData.name,
      whatsapp: userData.whatsapp
    });
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    setEditingData(prev => ({ ...prev, whatsapp: formattedValue }));
  };

  // App images mapping com as imagens oficiais da Weclix
  const appImages = {
    'Disney Plus': disneyPlusLogo,
    'Disney+': disneyPlusLogo,
    'Weclix Play': weclixPlayIcon,
    'ExitLag': exitLagLogo,
    'Deezer': deezerLogo,
    'GloboPlay': globoPlayLogo,
    'Globo Play': globoPlayLogo,
    'Max': maxLogo,
    'Weclix Fixo': weclixFixoIcon,
    'Weclix Saúde': weclixSaudeIcon,
    'Weclix Vantagens': weclixVantagensIcon
  };

  const handleWhatsApp = () => {
    if (!selectedPlan) return;
    
    const message = `Vim do Google e quero saber mais sobre a promoção da Weclix`;

    const whatsappUrl = `https://wa.me/5516996282862?text=${encodeURIComponent('Vim do Google e quero saber mais sobre o plano Weclix Empresa')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Effects - Light Theme */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(29, 78, 216, 0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Hexagonal Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundColor: '#02B3AA'
          }}></div>
        </div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-[#02B3AA]/40 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-px bg-gradient-to-l from-blue-500/40 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/6 h-20 w-px bg-gradient-to-b from-[#02B3AA]/40 to-transparent"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#02B3AA]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex items-center gap-2 bg-white border-gray-300 text-[#151e47] hover:bg-gray-50 shadow-sm rounded-[50px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <div className="w-20"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Weclix Logo */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-32 md:w-40 h-auto">
              <ImageWithFallback
                src={weclixLogo}
                alt="Weclix"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Selected Plan Card */}
          <Card className="bg-white border border-[#02B3AA]/40 p-8 mb-8 relative overflow-hidden shadow-lg">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#02B3AA]/5 to-blue-500/5"></div>
            {/* Trocar Button */}
            <div className="absolute top-4 right-4">
              <Button
                onClick={onBack}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-white border-gray-300 text-[#151e47] hover:bg-gray-50 shadow-sm rounded-[50px]"
              >
                <Edit className="w-4 h-4" />
                Trocar
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Plan Info */}
                <div className="text-left">
                  <div className="inline-flex items-center px-3 py-1 bg-[#02B3AA]/20 border border-[#02B3AA]/40 rounded-full mb-4 bg-[#02B3AA]">
                    <Zap className="w-3 h-3 text-white mr-1" />
                    <span className="text-xs text-white font-medium">SEU PLANO</span>
                  </div>
                  <h2 className="text-[36px] text-[#151e47] font-bold mb-2">{selectedPlan.speed} Mega</h2>
                  <p className="text-[16px] text-[#151e47] mb-4">{selectedPlan.tagline || `${selectedPlan.speed} MEGA + GloboPlay`}</p>
                  <div className="mb-1">
                    <span className="text-3xl text-[#151e47] font-bold">1x {selectedPlan.price}</span>
                  </div>
                  <div className="text-sm text-[#151e47]">(após R$ 99,90/mês)</div>
                </div>

                {/* Right Column - Included Benefits */}
                <div className="text-left">
                  <h3 className="text-lg text-[#151e47] font-semibold mb-4">Incluídos no plano</h3>
                  <div className="space-y-3">
                    {/* Speed */}


                    {/* Apps from selected plan */}
                    {selectedPlan.apps && selectedPlan.apps.map((app, index) => {
                      const appImage = appImages[app];
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-sm overflow-hidden flex items-center justify-center bg-white border border-gray-200">
                            {appImage ? (
                              <ImageWithFallback
                                src={appImage}
                                alt={app}
                                className="w-4 h-4 object-contain"
                              />
                            ) : (
                              <div className="w-5 h-5 bg-[#151e47] rounded-sm flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{app.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <span className="text-[#151e47] font-medium">{app}</span>
                        </div>
                      );
                    })}

                    {/* Features from selected plan */}
                    {selectedPlan.features && selectedPlan.features.map((feature, index) => (
                      <div key={`feature-${index}`} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#151e47]" />
                        <span className="text-[#151e47] font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* User Data Card */}
          <Card className="bg-white border border-gray-200 p-4 md:p-3 mb-6 md:mb-4 relative overflow-hidden shadow-md">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-gray-50/50"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3 md:mb-2">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-lg flex items-center justify-center shadow-sm">
                    <User className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl text-[#151e47] font-semibold">Dados para Contratação</h3>
                </div>
                
                {!isEditing ? (
                  <Button
                    onClick={handleEditClick}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-white border-gray-300 text-[#151e47] hover:bg-gray-50 shadow-sm rounded-[50px]"
                  >
                    <Edit className="w-4 h-4" />
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSaveEdit}
                      size="sm"
                      className="flex items-center gap-2 bg-[#60DCD6] text-white hover:bg-[#4fb8b1] shadow-sm rounded-[50px]"
                    >
                      <Save className="w-4 h-4" />
                      Salvar
                    </Button>
                    <Button
                      onClick={handleCancelEdit}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-white border-gray-300 text-[#151e47] hover:bg-gray-50 shadow-sm rounded-[50px]"
                    >
                      <X className="w-4 h-4" />
                      Cancelar
                    </Button>
                  </div>
                )}
              </div>
              <div className="space-y-3 md:space-y-2">
                <div className="flex items-center gap-3 p-2 md:p-3 bg-gray-50 border border-gray-200 rounded-[50px]">
                  <User className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div className="flex-1">
                    <span className="text-[#151e47] text-xs md:text-sm">Nome:</span>
                    {!isEditing ? (
                      <p className="text-[#151e47] font-medium text-sm md:text-base">{userData.name}</p>
                    ) : (
                      <Input
                        type="text"
                        value={editingData.name}
                        onChange={(e) => {
                          const filteredValue = e.target.value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, '');
                          setEditingData(prev => ({ ...prev, name: filteredValue }));
                        }}
                        className="mt-1 bg-white border-gray-300 text-[#151e47] placeholder:text-gray-500 focus:border-[#60DCD6] focus:ring-[#60DCD6]/20 rounded-[50px] text-sm md:text-base"
                        placeholder="Digite seu nome completo"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 md:p-3 bg-gray-50 border border-gray-200 rounded-[50px]">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  <div className="flex-1">
                    <span className="text-[#151e47] text-xs md:text-sm">WhatsApp:</span>
                    {!isEditing ? (
                      <p className="text-[#151e47] font-medium text-sm md:text-base">{userData.whatsapp}</p>
                    ) : (
                      <Input
                        type="tel"
                        value={editingData.whatsapp}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className="mt-1 bg-white border-gray-300 text-[#151e47] placeholder:text-gray-500 focus:border-[#60DCD6] focus:ring-[#60DCD6]/20 rounded-[50px] text-sm md:text-base"
                        placeholder="(11) 99999-9999"
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 md:p-3 bg-gray-50 border border-gray-200 rounded-[50px]">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <div>
                    <span className="text-[#151e47] text-xs md:text-sm">Cidade:</span>
                    <p className="text-[#151e47] font-medium text-sm md:text-base">{userData.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleWhatsApp}
              className="w-full h-14 bg-gradient-to-r from-[#25d366] to-[#20b858] hover:from-[#20b858] hover:to-[#1ea851] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg rounded-[50px]"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-6 p-4 bg-white border border-gray-200 rounded-lg relative overflow-hidden shadow-md">
            {/* Card Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-gray-50/50"></div>
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#02B3AA] rounded-full animate-pulse"></div>
                <p className="text-[#151e47] text-sm">
                  Tem alguma dúvida? Nossa equipe está pronta para ajudar!
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[#151e47] font-semibold">(16) 2525-0999</p>
                <p className="text-[#151e47] text-xs">Atendimento de Segunda a Sábado, das 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}