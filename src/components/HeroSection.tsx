import React, { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Wifi, Zap, Globe, Signal, ArrowRight, Play, Gamepad2, CheckCircle } from 'lucide-react';
import heroBanner from 'figma:asset/b1640857d215b8208589466844298b8a746486f0.png';
import backgroundImage from 'figma:asset/01ba27e8528dc57bd3a7538d62d5fb8b603b8e62.png';
import newBackgroundImage from 'figma:asset/7024e41179cc225f4d9674cbb1cbc5aec76cbd87.png';
import businessBackground from 'figma:asset/291427bd4eba98f6cd3cc528a8b70476d7725051.png';
import mobileBackgroundImage from 'figma:asset/798a567dda6747dc9be44306b32b023b31977f59.png';
import weclixPlayIcon from 'figma:asset/810bee7d411166cdfd06ff3a1110faf44369e223.png';
import disneyPlusLogo from 'figma:asset/f6e9d3cdf90bd5d30b64e9a20d52810bf820c539.png';
import globoPlayLogo from 'figma:asset/5bd10446f02080c5d09ca010dfadf7b8a6d05daf.png';
import hboMaxLogo from 'figma:asset/bd5738bcd7f63efc9cb8b826fb3841611c2e4d92.png';
import weclixEmpresasLogo from '../assets/logo-weclix-empresas-new.png';
import weclixFixoLogo from '../assets/logo-weclix-fixo.png';
import weclixMainLogo from 'figma:asset/89ebba56e649c2f5a80f661b13b88af6f527f7cb.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { captureLeadToSheets, captureLeadLocally, type LeadData } from '../services/leadCapture';

interface HeroSectionProps {
  onNavigateToPlans: (userData: any) => void;
}

export function HeroSection({ onNavigateToPlans }: HeroSectionProps) {
  const [userData, setUserData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    documentType: ''
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'warning'>('idle');

  // Lista de cidades disponíveis
  const cities = [
    'Américo Brasiliense',
    'Araraquara',
    'Bady Bassitt',
    'Barrinha',
    'Batatais',
    'Bebedouro',
    'Borborema',
    'Brodowski',
    'Cachoeira Paulista',
    'Catanduva',
    'Cruzeiro',
    'Elisiário',
    'Fernandópolis',
    'Franca',
    'Ibirá',
    'Ibitinga',
    'Itajobi',
    'Itapira',
    'Jaboticabal',
    'Jardinópolis',
    'Lavrinhas',
    'Marapoama',
    'Matão',
    'Mogi Guaçu',
    'Mogi Mirim',
    'Monte Alto',
    'Monte Azul',
    'Morro Agudo',
    'Novo Horizonte',
    'Nuporanga',
    'Orlândia',
    'Palmares Paulista',
    'Pitangueiras',
    'Potirendaba',
    'Restinga',
    'Ribeirão Preto',
    'Sales Oliveira',
    'São Joaquim da Barra',
    'São José do Rio Preto',
    'Sertãozinho',
    'Taquaritinga',
    'Tabatinga',
    'Viradouro',
    'Outras'
  ];

  const handleInputChange = (field: string, value: string) => {
    const updatedInfo = { ...userData, [field]: value };
    setUserData(updatedInfo);
    
    // Check if all required fields are filled and valid
    const cnpjDigits = updatedInfo.documentType.replace(/\D/g, '');
    const whatsappDigits = updatedInfo.whatsapp.replace(/\D/g, '');
    const isComplete = updatedInfo.name.trim() !== '' && 
                      whatsappDigits.length >= 10 && 
                      updatedInfo.city.trim() !== '' &&
                      cnpjDigits.length === 14;
    setIsFormComplete(isComplete);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    const limitedNumbers = numbers.slice(0, 11);
    
    // Aplica a formatação
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

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhoneNumber(value);
    const updatedInfo = { ...userData, whatsapp: formattedValue };
    setUserData(updatedInfo);
    
    // Check if all required fields are filled and valid
    const cnpjDigits = updatedInfo.documentType.replace(/\D/g, '');
    const whatsappDigits = updatedInfo.whatsapp.replace(/\D/g, '');
    const isComplete = updatedInfo.name.trim() !== '' && 
                      whatsappDigits.length >= 10 && 
                      updatedInfo.city.trim() !== '' &&
                      cnpjDigits.length === 14;
    setIsFormComplete(isComplete);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação adicional: garantir que CNPJ tem 14 dígitos
    const cnpjDigits = userData.documentType.replace(/\D/g, '');
    if (cnpjDigits.length < 14) {
      return; // Impede o envio se CNPJ não estiver completo
    }
    
    if (isFormComplete) {
      setIsSubmitting(true);
      
      // Prepare lead data
      const leadData: LeadData = {
        name: userData.name,
        whatsapp: userData.whatsapp,
        city: userData.city,
        documentType: userData.documentType,
        timestamp: new Date().toLocaleString('pt-BR'),
        source: 'Hero Section B2B - Consultar Conectividade'
      };

      console.log('🎯 Iniciando captura de lead...');

      // Send to Make.com webhook first
      try {
        console.log('📤 Enviando para Make.com webhook...');
        const webhookResponse = await fetch('https://hook.us2.make.com/wrrp05u4v9k6ovkz6bnyvorzb9831o8w', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData)
        });

        if (webhookResponse.ok) {
          console.log('✅ Lead enviado com sucesso para Make.com!');
        } else {
          console.log('⚠️ Problema ao enviar para Make.com webhook');
        }
      } catch (error) {
        console.log('❌ Erro ao enviar para Make.com webhook:', error);
      }

      // Continue with existing Google Sheets backup
      try {
        const success = await captureLeadToSheets(leadData);
        if (success) {
          console.log('✅ Lead capturado com sucesso no Google Sheets!');
          setSubmitStatus('success');
        } else {
          console.log('⚠️ Problema com Google Sheets, salvando localmente...');
          captureLeadLocally(leadData);
          setSubmitStatus('warning');
        }
      } catch (error) {
        console.log('❌ Erro ao enviar para Google Sheets, salvando localmente...', error);
        captureLeadLocally(leadData);
        setSubmitStatus('warning');
      }

      setIsSubmitting(false);
      
      // Navigate to plans page with user data
      onNavigateToPlans(userData);
    }
  };

  const handleNewSimulation = () => {
    setUserData({
      name: '',
      whatsapp: '',
      city: '',
      documentType: ''
    });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">

      <div className="relative px-4 pt-20 pb-16 flex items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${businessBackground})`}}>
        {/* Overlay for better text readability */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${mobileBackgroundImage})`,
          }}
        >
          <div 
            className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${businessBackground})`,
            }}
          />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full max-w-6xl mx-auto md:gap-8">
          
          {/* Left Content - Column 1 */}
          <div className="text-gray-900 space-y-6 order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl leading-tight md:leading-none text-white font-[Nunito_Sans] font-bold md:-ml-36 lg:-ml-40 mt-10 md:mt-64 drop-shadow-lg">
                Internet empresarial
                <span className="block text-[#02B3AA] mt-1">
                  de alta performance
                </span>
              </h1>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-md md:-ml-36 lg:-ml-40 px-4 md:px-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#02B3AA] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[rgba(255,255,255,1)]">Alta Velocidade</div>
                  <div className="text-xs text-[rgba(255,255,255,1)]">Até 1GB</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#02B3AA] rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[rgba(255,255,255,1)]">IP Fixo</div>
                  <div className="text-xs text-[rgba(255,255,255,1)]">Sem oscilações</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#02B3AA] rounded-lg flex items-center justify-center">
                  <Signal className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[rgba(255,255,255,1)]">Suporte 24/7</div>
                  <div className="text-xs text-[rgba(255,255,255,1)]">Sempre disponível</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#02B3AA] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[rgba(255,255,255,1)]">SLA Garantido</div>
                  <div className="text-xs text-[rgba(255,255,255,1)]">99,9% uptime</div>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full md:-ml-36 lg:-ml-40 shadow-lg shadow-black/10 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/10 before:rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 mt-6 md:mt-auto mb-16">
              <div className="w-2 h-2 bg-[#02B3AA] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-white/90 font-medium relative z-10">Conectividade empresarial</span>
            </div>
          </div>

          {/* Right Content - Simulation Form - Column 2 */}
          <div className="w-full order-2 md:order-2">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 lg:-ml-20">
              {/* Service Circles - Visible below on mobile, left on desktop */}
              <div className="flex lg:flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 order-2 lg:order-1 mt-8 lg:mt-0 lg:-ml-32">
                {/* Weclix Empresas */}
                <div className="w-20 h-20 md:w-[120px] md:h-[120px] bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <ImageWithFallback 
                    src={weclixEmpresasLogo} 
                    alt="Weclix Empresas" 
                    className="w-full h-full object-cover scale-100"
                  />
                </div>

                {/* Weclix Fixo */}
                <div className="w-20 h-20 md:w-[120px] md:h-[120px] bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <ImageWithFallback 
                    src={weclixFixoLogo} 
                    alt="Weclix Fixo" 
                    className="w-full h-full object-cover scale-100"
                  />
                </div>
              </div>

              {/* Simulation Form */}
              <Card id="simulation-form" className="w-full max-w-md p-8 bg-white border-gray-200 shadow-2xl mx-auto lg:ml-12 order-1 lg:order-2 mt-4 lg:mt-20">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-gray-900 mb-2 font-[Nunito_Sans] font-bold text-[40px]">Solicite uma proposta</h3>
                  <p className="text-sm text-gray-600">Conectividade empresarial na sua região • Soluções personalizadas para seu negócio</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Nome</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={userData.name}
                        onChange={(e) => {
                          const filteredValue = e.target.value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, '');
                          handleInputChange('name', filteredValue);
                        }}
                        className="mt-1 bg-gray-50 border-gray-300 text-[#151e47] placeholder:text-gray-500 focus:border-[#60DCD6] focus:ring-[#60DCD6]/20 rounded-[50px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whatsapp" className="text-gray-700">Telefone/WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={userData.whatsapp}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={`mt-1 bg-gray-50 text-[#151e47] placeholder:text-gray-500 focus:ring-[#60DCD6]/20 rounded-[50px] ${
                          userData.whatsapp && userData.whatsapp.replace(/\D/g, '').length < 9 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 focus:border-[#60DCD6]'
                        }`}
                      />
                      {userData.whatsapp && userData.whatsapp.replace(/\D/g, '').length < 9 && (
                        <p className="text-red-500 text-sm mt-1 text-right text-[10px] font-[Nunito_Sans]">Número de telefone inválido</p>
                      )}
                    </div>

                    <div className="bg-[rgba(96,202,196,0)]">
                      <Label htmlFor="city" className="text-gray-700">Cidade</Label>
                      <Select value={userData.city} onValueChange={(value) => handleInputChange('city', value)}>
                        <SelectTrigger className="mt-1 bg-gray-50 border-gray-300 text-[#151e47] focus:border-[#60DCD6] focus:ring-[#60DCD6]/20 rounded-[50px]">
                          <SelectValue placeholder="Selecione sua cidade" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          {cities.sort().map((city) => (
                            <SelectItem key={city} value={city} className="text-gray-900 hover:bg-gray-100">
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-[rgba(96,202,196,0)]">
                      <Label htmlFor="cnpj" className="text-gray-700">CNPJ</Label>
                      <Input
                        id="cnpj"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        value={userData.documentType}
                        onChange={(e) => {
                          // Remove todos os caracteres não numéricos
                          const numericValue = e.target.value.replace(/\D/g, '');
                          // Limita a 14 dígitos
                          const limitedValue = numericValue.slice(0, 14);
                          // Aplica a máscara de CNPJ
                          let formattedValue = limitedValue;
                          if (limitedValue.length >= 2) {
                            formattedValue = limitedValue.replace(/^(\d{2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/, (match, p1, p2, p3, p4, p5) => {
                              let result = p1;
                              if (p2) result += '.' + p2;
                              if (p3) result += '.' + p3;
                              if (p4) result += '/' + p4;
                              if (p5) result += '-' + p5;
                              return result;
                            });
                          }
                          handleInputChange('documentType', formattedValue);
                        }}
                        className={`mt-1 bg-gray-50 text-[#151e47] placeholder:text-gray-500 focus:ring-[#60DCD6]/20 rounded-[50px] ${
                          userData.documentType && userData.documentType.replace(/\D/g, '').length < 14 
                            ? 'border-red-500 focus:border-red-500' 
                            : 'border-gray-300 focus:border-[#60DCD6]'
                        }`}
                        maxLength={18}
                      />
                      {userData.documentType && userData.documentType.replace(/\D/g, '').length < 14 && (
                        <p className="text-red-500 text-sm mt-1 text-right text-[10px] font-[Nunito_Sans]">CNPJ deve ter 14 dígitos</p>
                      )}
                    </div>
                  </div>

                  {/* CPF Warning Message */}
                  {userData.documentType === 'CPF' && (
                    <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 bg-[#02B3AA] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">!</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-cyan-900">
                            <strong>Atenção:</strong> Os planos disponíveis aqui são somente para contratação via CNPJ. 
                            Caso você queira verificar as promoções para contratação por CPF, visite: 
                            <a 
                              href="https://simulerpo.weclix.com.br" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-[#02B3AA] underline hover:text-[#02B3AA]/80 ml-1"
                            >
                              simulerpo.weclix.com.br
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className={`w-full h-12 transition-all duration-300 rounded-[50px] ${
                      isFormComplete && !isSubmitting
                        ? 'bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90 shadow-lg shadow-[#1C1F3C]/25'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!isFormComplete || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processando...
                      </>
                    ) : isFormComplete ? (
                      <>
                        Escolher meu plano
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      'Escolher meu plano'
                    )}
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Dados seguros
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Sem compromisso
                  </div>
                  {submitStatus === 'success' && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span className="text-xs">Enviado com sucesso!</span>
                    </div>
                  )}
                  {submitStatus === 'warning' && (
                    <div className="flex items-center text-orange-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                      <span className="text-xs">Salvo localmente</span>
                    </div>
                  )}
                </div>
              </Card>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}