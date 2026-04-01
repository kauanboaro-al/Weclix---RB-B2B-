import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Check, Star } from 'lucide-react';

interface PlansSectionProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

export function PlansSection({ userInfo }: PlansSectionProps) {
  const plans = [
    {
      name: "Essencial 100",
      speed: "100 Mega",
      price: "R$ 59,90",
      originalPrice: "R$ 79,90",
      popular: false,
      benefits: [
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte 24h"
      ]
    },
    {
      name: "Turbo 300",
      speed: "300 Mega",
      price: "R$ 89,90",
      originalPrice: "R$ 109,90",
      popular: true,
      benefits: [
        "Wi-Fi grátis",
        "Netflix incluído",
        "Instalação gratuita",
        "Suporte prioritário"
      ]
    },
    {
      name: "Ultra 500",
      speed: "500 Mega",
      price: "R$ 119,90",
      originalPrice: "R$ 149,90",
      popular: false,
      benefits: [
        "Wi-Fi grátis",
        "Netflix + Disney+",
        "Instalação gratuita",
        "Suporte VIP"
      ]
    },
    {
      name: "Giga 1000",
      speed: "1 Giga",
      price: "R$ 179,90",
      originalPrice: "R$ 219,90",
      popular: false,
      benefits: [
        "Wi-Fi 6 grátis",
        "Netflix + Disney+ + HBO Max",
        "Instalação express",
        "Suporte VIP",
        "IP fixo grátis"
      ]
    }
  ];

  const handleSelectPlan = (planName: string) => {
    // Mock selection - could integrate with WhatsApp or form submission
    const message = `Vim do Google e quero saber mais sobre a promoção da Weclix`;
    const whatsappUrl = `https://wa.me/5516996282862?text=${encodeURIComponent('Vim do Google e quero saber mais sobre o plano Weclix Empresa')}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Planos Disponíveis para {userInfo.name}</h2>
            <p className="text-gray-600">Escolha o plano ideal para sua necessidade</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-6 border-2 transition-all duration-300 hover:shadow-xl hover:bg-[#02B1A9]/10 ${plan.popular ? 'border-[#02B3AA] bg-[#02B3AA]/10' : 'border-gray-200 hover:border-[#02B3AA]'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#02B3AA] text-white px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl mb-2 text-gray-900">{plan.name}</h3>
                  <div className="text-3xl text-blue-700 mb-1">{plan.speed}</div>
                  <div className="space-y-1">
                    <div className="text-2xl text-gray-900">{plan.price}</div>
                    <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                    <div className="text-sm text-gray-600">por mês</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-blue-700 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => handleSelectPlan(plan.name)}
                  className="w-full h-12 bg-[#1C1F3C] hover:bg-[#1C1F3C]/90 text-white"
                >
                  Contratar agora
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              * Valores promocionais válidos para novos clientes. Fidelidade de 12 meses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}