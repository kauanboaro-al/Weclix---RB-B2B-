import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Check, Wifi, Play, ArrowRight, Crown, Flame, Zap, Shield, Globe, Star, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoNew from '../assets/weclix-logo-new.png';

// Import official Weclix service icons
import weclixPlayIcon from 'figma:asset/810bee7d411166cdfd06ff3a1110faf44369e223.png';
import weclixSaudeIcon from 'figma:asset/5406f560b6c4f27a3c04fc17223a089a96e15a15.png';
import weclixFixoIcon from 'figma:asset/5a2e80fdb5b2a51c082fbdbe49a347ee80f51284.png';
import weclixFixoLogo from 'figma:asset/89ebba56e649c2f5a80f661b13b88af6f527f7cb.png';
import weclixVantagensIcon from 'figma:asset/5ebf228282371006d42b31d4fed99514f224aca2.png';

// Import partner app logos
import deezerLogo from 'figma:asset/afbd2b20edd23ffe0c840bf510c256756db4f512.png';
import disneyPlusLogo from 'figma:asset/f6e9d3cdf90bd5d30b64e9a20d52810bf820c539.png';
import globoPlayLogo from 'figma:asset/5bd10446f02080c5d09ca010dfadf7b8a6d05daf.png';
import exitLagLogo from 'figma:asset/f8027bc1a0ee8c9f43e004372b4aa4a0de549038.png';
import maxLogo from 'figma:asset/bd5738bcd7f63efc9cb8b826fb3841611c2e4d92.png';

interface PlansPageProps {
  userData: {
    name: string;
    whatsapp: string;
    city: string;
  };
  onBack: () => void;
  onPlanSelect: (plan: any) => void;
  promotionalGroup?: 'group1' | 'group2' | 'group3' | 'group4' | null;
}

export function PlansPage({ userData, onBack, onPlanSelect, promotionalGroup = null }: PlansPageProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visiblePlans, setVisiblePlans] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // App images mapping
  const appImages = {
    'Disney Plus': disneyPlusLogo,
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

  // Check if city has promotional plans
  const hasPromotionalPlans = userData.city === 'Catanduva' || userData.city === 'Ribeirão Preto';

  // Base plans - Planos empresariais Weclix para todas as cidades
  const basePlans = [
    {
      id: 'weclix-700-simples',
      name: '700 MEGA',
      tagline: '700 MEGA',
      description: 'Internet de alta velocidade para empresas',
      speed: '700',
      uploadSpeed: '50',
      price: '89,90',
      popular: !hasPromotionalPlans, // Popular apenas nas cidades base
      category: 'empresarial',
      features: ['700 MEGA'],
      isPromotional: false,
      isPortabilityPlan: false,
      portabilityPrefix: '',
      portabilityNote: '',
      isFirstMonth: false,
      originalPrice: ''
    },
    {
      id: 'weclix-700-telefonia',
      name: '700 MEGA',
      tagline: '700 MEGA + TELEFONIA FIXA',
      description: 'Internet de alta velocidade + telefonia fixa para empresas',
      speed: '700',
      uploadSpeed: '50',
      price: '99,90',
      popular: false,
      category: 'empresarial',
      features: ['700 MEGA', 'Telefonia fixa'],
      isPromotional: false,
      isPortabilityPlan: false,
      portabilityPrefix: '',
      portabilityNote: '',
      isFirstMonth: false,
      originalPrice: ''
    },
    {
      id: 'weclix-700-ip-fixo',
      name: '700 MEGA',
      tagline: '700 MEGA + IP FIXO',
      description: 'Internet de alta performance com IP fixo para empresas',
      speed: '700',
      uploadSpeed: '50',
      price: '109,90',
      popular: false,
      category: 'empresarial',
      features: ['700 MEGA', 'IP fixo dedicado'],
      isPromotional: false,
      isPortabilityPlan: false,
      portabilityPrefix: '',
      portabilityNote: '',
      isFirstMonth: false,
      originalPrice: ''
    },
    {
      id: 'weclix-700-completo',
      name: '700 MEGA',
      tagline: '700 MEGA + TELEFONIA FIXA + WI-FI 6 + IP FIXO + PowerClix',
      description: 'Solução corporativa completa com Mini no-break inteligente da Weclix',
      speed: '700',
      uploadSpeed: '50',
      price: '139,90',
      popular: false,
      category: 'empresarial',
      features: ['700 MEGA', 'Telefonia fixa', 'Wi-Fi 6', 'IP fixo dedicado', 'PowerClix', 'Mini no-break inteligente da Weclix'],
      isPromotional: false,
      isPortabilityPlan: false,
      portabilityPrefix: '',
      portabilityNote: '',
      isFirstMonth: false,
      originalPrice: ''
    }
  ];

  // Special promotional plans for Catanduva and Ribeirão Preto
  const promotionalPlans = [
    {
      id: 'weclix-800-simples',
      name: '800 MEGA',
      tagline: '800 MEGA',
      description: 'Internet de ultra velocidade para empresas',
      speed: '800',
      uploadSpeed: '60',
      price: '99,90',
      popular: true, // Popular nas cidades especiais
      category: 'empresarial',
      features: ['800 MEGA'],
      isPromotional: true,
      isPortabilityPlan: false,
      portabilityPrefix: '',
      portabilityNote: '',
      isFirstMonth: false,
      originalPrice: ''
    },
    {
      id: 'weclix-800-ip-fixo',
      name: '800 MEGA',
      tagline: '800 MEGA + IP FIXO',
      description: 'Internet de alta performance com IP fixo para empresas',
      speed: '800',
      uploadSpeed: '60',
      price: '119,90',
      popular: false,
      category: 'empresarial',
      features: ['800 MEGA', 'IP fixo dedicado'],
      isPromotional: true,
      isPortabilityPlan: false,
      portabilityPrefix: '',
      portabilityNote: '',
      isFirstMonth: false,
      originalPrice: ''
    },
    {
      id: 'weclix-800-completo',
      name: '800 MEGA',
      tagline: '800 MEGA + TELEFONIA FIXA + WI-FI 6 + IP FIXO + PowerClix',
      description: 'Solução corporativa completa com todos os benefícios',
      speed: '800',
      uploadSpeed: '60',
      price: '169,90',
      popular: false,
      category: 'empresarial',
      features: ['800 MEGA', 'Telefonia fixa', 'Wi-Fi 6', 'IP fixo dedicado', 'PowerClix'],
      isPromotional: true,
      isPortabilityPlan: false,
      portabilityPrefix: '',
      portabilityNote: '',
      isFirstMonth: false,
      originalPrice: ''
    }
  ];
  
  // Combine plans based on city
  const plans = hasPromotionalPlans 
    ? [...basePlans, ...promotionalPlans]
    : basePlans;

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan.id);
    setTimeout(() => {
      onPlanSelect(plan);
    }, 300);
  };

  // Calculate visible plans based on scroll position and viewport
  const calculateVisiblePlans = useCallback(() => {
    if (!carouselRef.current) return;
    
    const container = carouselRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerLeft = containerRect.left + 16; // Account for padding
    const containerRight = containerRect.right - 16; // Account for padding
    
    // Get all plan cards
    const planCards = container.querySelectorAll('[data-plan-card]');
    const visibleIndexes: number[] = [];
    
    planCards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + (cardRect.width / 2);
      
      // Check if card center is visible in container
      if (cardCenter >= containerLeft && cardCenter <= containerRight) {
        visibleIndexes.push(index);
      }
    });
    
    setVisiblePlans(visibleIndexes);
  }, []);

  // Scroll carousel function
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const container = carouselRef.current;
    // Adjust card width and gap for mobile
    const cardWidth = isMobile ? 280 : 300;
    const gap = isMobile ? 16 : 24;
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'right') {
      container.scrollLeft += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
    }
    
    // Update visible plans after scroll animation
    setTimeout(() => {
      calculateVisiblePlans();
    }, 150);
  };

  // Throttle scroll events for performance
  const throttledCalculateVisible = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateVisiblePlans, 50);
    };
  }, [calculateVisiblePlans]);

  // Effect to calculate visible plans on mount and scroll
  useEffect(() => {
    const handleScroll = throttledCalculateVisible();
    const handleResize = throttledCalculateVisible();

    const container = carouselRef.current;
    if (container) {
      // Initial calculation
      setTimeout(calculateVisiblePlans, 100);
      
      container.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [calculateVisiblePlans, throttledCalculateVisible]);

  // Initialize visible plans count on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateVisiblePlans();
    }, 200);
    
    return () => clearTimeout(timer);
  }, [calculateVisiblePlans]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 border-[#1C1F3C]/20 text-[#1C1F3C] hover:bg-[#1C1F3C] hover:text-white transition-all duration-200 h-9 md:h-10 text-xs md:text-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Voltar
            </Button>
            
            <div className="flex items-center justify-center flex-1 pr-10 md:pr-0">
              <div className="h-7 md:h-10">
                <img src={logoNew} alt="weclix" className="h-full w-auto object-contain" />
              </div>
            </div>
            
            <div className="hidden md:block w-20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {/* User Info */}
        <div className="bg-[#2ba9a0]/10 border border-[#2ba9a0]/30 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#2ba9a0]/20 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-[#2ba9a0]" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#1c1f3c] font-semibold">{userData.name}</h3>
              <p className="text-gray-600 text-sm">{userData.whatsapp} • {userData.city}</p>
              <p className="text-[#2ba9a0] text-sm">{plans.length} soluções empresariais disponíveis na sua região</p>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-[#1c1f3c] mb-2">
            Soluções Empresariais
          </h2>
          <p className="text-gray-600">
            Conectividade profissional personalizada para seu negócio
          </p>
          {hasPromotionalPlans && (
            <div className="mt-4 p-4 bg-gradient-to-r from-[#02B3AA]/20 to-[#2ba9a0]/20 border border-[#02B3AA] rounded-lg inline-block">
              <div className="flex items-center gap-2 text-[#1c1f3c]">
                <Flame className="w-5 h-5 text-[#02B1A9]" />
                <span className="font-semibold">Promoções exclusivas disponíveis para {userData.city}!</span>
              </div>
            </div>
          )}
        </div>

        {/* Plans Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-x-auto overflow-y-visible pb-6 pt-4 px-4 scroll-smooth scrollbar-hide"
          >
            <div className="flex gap-4 md:gap-6 w-max py-4">
              {plans
                .sort((a, b) => {
                  // 1. Popular plans first
                  if (a.popular && !b.popular) return -1;
                  if (!a.popular && b.popular) return 1;
                  
                  // 2. Promotional plans second (if neither is popular)
                  if (!a.popular && !b.popular) {
                    if (a.isPromotional && !b.isPromotional) return -1;
                    if (!a.isPromotional && b.isPromotional) return 1;
                  }
                  
                  // 3. Sort by speed (lower MEGA first)
                  const speedA = parseInt(a.speed);
                  const speedB = parseInt(b.speed);
                  if (speedA !== speedB) {
                    return speedA - speedB; // Lower speed first
                  }
                  
                  // 4. If same speed, sort by number of features (more features first)
                  const featuresA = a.features ? a.features.length : 0;
                  const featuresB = b.features ? b.features.length : 0;
                  return featuresB - featuresA; // More features first
                })
                .map((plan, index) => {
                  // Check if this card should have hover effects applied (mobile + visible)
                  const shouldApplyHoverEffects = isMobile && visiblePlans.includes(index);
                  
                  return (
                    <Card 
                      key={plan.id}
                      data-plan-card
                      className={`relative overflow-visible border-0 shadow-lg transition-all duration-300 cursor-pointer group hover:shadow-xl hover:scale-105 flex flex-col rounded-[32px] flex-shrink-0 w-[280px] md:w-[300px] h-[420px] md:h-[450px] ${
                        shouldApplyHoverEffects 
                          ? 'bg-[#02B1A9]/10 shadow-xl scale-105' 
                          : 'bg-gray-50 hover:bg-[#02B1A9]/10'
                      }`}
                      onClick={() => handlePlanSelect(plan)}
                    >
                      {/* Popular Badge */}
                      {plan.popular && (
                        <div className="absolute -top-4 md:-top-6 -left-2 md:-left-3 z-10">
                          <div className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg flex items-center gap-1.5 md:gap-1.5 border-2 border-white transition-all duration-300 ${
                            shouldApplyHoverEffects 
                              ? 'bg-[#2ba9a0] text-white' 
                              : 'bg-[#02B3AA] group-hover:bg-[#2ba9a0] text-white'
                          }`}>
                            <Star className="w-3 h-3" />
                            <span className="text-xs font-bold whitespace-nowrap">
                              Popular
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {/* Promotional Badge */}
                      {plan.isPromotional && !plan.popular && (
                        <div className="absolute -top-4 md:-top-6 -right-2 md:-right-3 z-10">
                          <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg flex items-center gap-1.5 md:gap-1.5 border-2 border-white bg-[#02B1A9] text-white">
                            <Flame className="w-3 h-3" />
                            <span className="text-xs font-bold whitespace-nowrap">
                              Exclusiva
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div className={`flex flex-col justify-between h-full overflow-hidden rounded-[32px] ${plan.popular ? 'bg-[#02B1A9]' : ''}`}>
                        {/* Top Section */}
                        <div className="flex flex-col">
                          {/* Plan Header */}
                          <div className="p-4 md:p-6 pb-3 md:pb-4 h-20 md:h-28 flex flex-col justify-center">
                            <div className="text-left">
                              <h3 className={`text-2xl md:text-3xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-[#1c1f3c]'}`}>
                                {plan.speed} Mega
                              </h3>
                              <p className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                                {plan.tagline}
                              </p>
                            </div>
                          </div>

                          {/* Price Section */}
                          <div className="px-4 md:px-6 pb-3 md:pb-4 h-16 md:h-15 flex items-center">
                            <div className="text-left">
                              {plan.isPortabilityPlan ? (
                                <div className="flex items-baseline gap-1 flex-wrap">
                                  <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                                    {plan.portabilityPrefix}
                                  </span>
                                  <span className={`text-3xl md:text-4xl font-bold -mt-3 ${plan.popular ? 'text-white' : 'text-[#1c1f3c]'}`}>
                                    {plan.price}
                                  </span>
                                  <span className={`text-xs ml-1 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                                    {plan.portabilityNote}
                                  </span>
                                </div>
                              ) : plan.isFirstMonth ? (
                                <div className="flex items-baseline gap-1 flex-wrap">
                                  <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>1x R$</span>
                                  <span className={`text-3xl md:text-4xl font-bold -mt-3 ${plan.popular ? 'text-white' : 'text-[#1c1f3c]'}`}>
                                    {plan.price}
                                  </span>
                                  {plan.originalPrice && (
                                    <span className={`text-xs ml-1 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                                      (após R$ {plan.originalPrice}/mês )
                                    </span>
                                  )}
                                </div>
                              ) : (
                                <div className="flex items-baseline gap-1">
                                  <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>R$</span>
                                  <span className={`text-3xl md:text-4xl font-bold -mt-3 ${plan.popular ? 'text-white' : 'text-[#1c1f3c]'}`}>
                                    {plan.price}
                                  </span>
                                  <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>/mês</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Button Section */}
                          <div className="px-4 md:px-6 pb-3 md:pb-4">
                            <Button 
                              onClick={() => handlePlanSelect(plan)}
                              className={`w-full h-12 rounded-[32px] font-semibold transition-all duration-300 flex flex-col items-center justify-center gap-0 ${
                                selectedPlan === plan.id
                                  ? 'bg-gray-400 text-white cursor-not-allowed'
                                  : 'bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90'
                              }`}
                              disabled={selectedPlan === plan.id}
                            >
                              {selectedPlan === plan.id ? (
                                <div className="flex items-center gap-2">
                                  <Check className="w-4 h-4" />
                                  <span>Selecionado</span>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center gap-0">
                                  <span className="text-sm font-semibold leading-tight">Contratar agora</span>
                                </div>
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex-1 p-4 md:p-6 pt-3 md:pt-4 bg-white rounded-[32px]">
                          <div className="space-y-2 md:space-y-3">
                            <h4 className="font-semibold text-sm text-[#1c1f3c]">
                              Incluídos no plano
                            </h4>
                            
                            {/* Dynamic features based on plan */}
                            {plan.features ? plan.features.map((feature, featureIndex) => {
                              // Choose appropriate icon based on feature type
                              let icon = <Check className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              
                              if (feature.toLowerCase().includes('') || feature.toLowerCase().includes('')) {
                                icon = <Wifi className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              } else if (feature.toLowerCase().includes('telefonia')) {
                                icon = <Phone className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              } else if (feature.toLowerCase().includes('wi-fi')) {
                                icon = <Wifi className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              } else if (feature.toLowerCase().includes('ip fixo')) {
                                icon = <Globe className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              } else if (feature.toLowerCase().includes('powerclix')) {
                                icon = <Zap className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              } else if (feature.toLowerCase().includes('mini no-break')) {
                                icon = <Shield className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              } else if (feature.toLowerCase().includes('suporte')) {
                                icon = <Shield className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />;
                              }
                              
                              return (
                                <div key={featureIndex} className="flex items-center gap-2 md:gap-3">
                                  <div className="w-7 md:w-8 h-7 md:h-8 flex items-center justify-center border border-gray-200 bg-white rounded-[32px]">
                                    <Check className="w-4 h-4 text-[#151e47]" />
                                  </div>
                                  <span className="text-sm text-gray-700">
                                    {feature}
                                  </span>
                                </div>
                              );
                            }) : (
                              // Fallback to default features if plan.features doesn't exist
                              <>
                                <div className="flex items-center gap-2 md:gap-3">
                                  <div className="w-7 md:w-8 h-7 md:h-8 rounded-[32px] flex items-center justify-center bg-white border border-gray-200">
                                    <Wifi className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />
                                  </div>
                                  <span className="text-sm text-gray-700">
                                    Download: {plan.speed} Mbps
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 md:gap-3">
                                  <div className="w-7 md:w-8 h-7 md:h-8 rounded-[32px] flex items-center justify-center bg-white border border-gray-200">
                                    <Globe className="w-3 md:w-4 h-3 md:h-4 text-[#1c1f3c]" />
                                  </div>
                                  <span className="text-sm text-gray-700">
                                    IP fixo dedicado
                                  </span>
                                </div>

                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-4 gap-4 md:gap-8">
            <button
              onClick={() => scrollCarousel('left')}
              className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white border-2 border-[#2ba9a0] transition-all duration-200 flex items-center justify-center group hover:bg-[#2ba9a0] hover:shadow-lg shadow-md"
            >
              <ArrowLeft className="w-4 md:w-5 h-4 md:h-5 text-[#2ba9a0] group-hover:text-white transition-colors duration-200" />
            </button>

            {/* Visual Plans Indicator */}
            <div className="flex items-center gap-4">
              {/* Circles representing each plan */}
              {plans.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 md:w-3 h-2.5 md:h-3 rounded-full border-2 border-[#2ba9a0] transition-all duration-300 z-20 relative ${
                    visiblePlans.includes(index) 
                      ? 'bg-[#2ba9a0]' 
                      : 'bg-white'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollCarousel('right')}
              className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white border-2 border-[#2ba9a0] transition-all duration-200 flex items-center justify-center group hover:bg-[#2ba9a0] hover:shadow-lg shadow-md"
            >
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 text-[#2ba9a0] group-hover:text-white transition-colors duration-200" />
            </button>
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="text-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
            {/* Suporte técnico 24/7 */}
            <div className="flex items-center justify-center gap-2 p-4">
              <div className="w-6 h-6 bg-[#2ba9a0] rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-700 font-medium">Suporte técnico 24/7</span>
            </div>

            {/* Garantias Weclix */}
            <div className="flex items-center justify-center gap-2 p-4">
              <div className="w-8 h-8 bg-[#1c1f3c] rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm text-gray-700 font-medium">Garantias Weclix</span>
            </div>

            {/* Instalação 100% gratuita */}
            <div className="flex items-center justify-center gap-2 p-4">
              <div className="w-6 h-6 bg-[#2ba9a0] rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-700 font-medium">Instalação 100% gratuita</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            * Promoção válida exclusivamente para planos corporativos contratados nas localidades listadas acima. A adesão está sujeita à análise técnica de viabilidade na área de instalação. As demais condições comerciais e contratuais seguem as regras vigentes dos planos empresariais e estão previstas no contrato de prestação de serviços da Weclix. Promoções não cumulativas com outras campanhas ou ofertas da Weclix.
          </p>
        </div>
      </div>
    </div>
  );
}