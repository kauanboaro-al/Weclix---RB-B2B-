import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Wifi, Tv, Music, Gamepad2, Zap, Users } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  speed: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
}

interface SimulationStep3Props {
  onNext: (selectedPlan: Plan) => void;
  onBack: () => void;
}

export function SimulationStep3({ onNext, onBack }: SimulationStep3Props) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Essencial',
      speed: '100MB',
      price: 'R$ 79,90',
      icon: <Wifi className="w-8 h-8" />,
      features: ['Wi-Fi 6 incluso', 'Instalação grátis', 'Suporte 24h']
    },
    {
      id: 'standard',
      name: 'Conectado',
      speed: '300MB',
      price: 'R$ 99,90',
      icon: <Zap className="w-8 h-8" />,
      features: ['Wi-Fi 6 incluso', 'Netflix incluso', 'Instalação grátis'],
      popular: true
    },
    {
      id: 'premium',
      name: 'Ultra',
      speed: '500MB',
      price: 'R$ 129,90',
      icon: <Tv className="w-8 h-8" />,
      features: ['Wi-Fi 6 incluso', 'Netflix + Disney+', 'Suporte prioritário']
    },
    {
      id: 'gamer',
      name: 'Gamer Pro',
      speed: '600MB',
      price: 'R$ 149,90',
      icon: <Gamepad2 className="w-8 h-8" />,
      features: ['Baixa latência', 'Netflix + Gaming', 'Roteador Gamer']
    },
    {
      id: 'family',
      name: 'Família+',
      speed: '800MB',
      price: 'R$ 179,90',
      icon: <Users className="w-8 h-8" />,
      features: ['Multi streaming', 'Todos os apps', 'Controle parental']
    },
    {
      id: 'max',
      name: 'Max Velocidade',
      speed: '1GB',
      price: 'R$ 219,90',
      icon: <Music className="w-8 h-8" />,
      features: ['Velocidade máxima', 'Todos os serviços', 'Suporte VIP']
    }
  ];

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = () => {
    if (selectedPlan) {
      onNext(selectedPlan);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-6xl py-8">
        <Card className="p-8 bg-gray-800/90 backdrop-blur-sm border-gray-700 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-white mb-3">Planos disponíveis para você</h2>
            <p className="text-gray-300 mb-4">Escolha o que mais combina com seu uso</p>
            <div className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full inline-block">
              ⚠️ Planos atualizados mensalmente • Valores promocionais
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative p-6 cursor-pointer transition-all duration-300 border-2 ${
                  selectedPlan?.id === plan.id
                    ? 'border-[#02B3AA] bg-gray-700/70 shadow-lg shadow-[#02B3AA]/25'
                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500 hover:bg-gray-700/50'
                }`}
                onClick={() => handlePlanSelect(plan)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#02B3AA] text-white">
                    Mais Popular
                  </Badge>
                )}
                
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${
                    selectedPlan?.id === plan.id
                      ? 'bg-[#02B3AA] text-white'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  }`}>
                    {plan.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-white mb-1">{plan.name}</h3>
                    <div className="text-2xl text-[#02B3AA] mb-1">{plan.speed}</div>
                    <div className="text-sm text-gray-400">a partir de</div>
                    <div className="text-lg text-white">{plan.price}/mês</div>
                  </div>
                  
                  <div className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="text-sm text-gray-300 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#02B3AA] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    className={`w-full transition-colors ${
                      selectedPlan?.id === plan.id
                        ? 'bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    onClick={() => handlePlanSelect(plan)}
                  >
                    {selectedPlan?.id === plan.id ? 'Selecionado' : 'Selecionar Plano'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={onBack}
              variant="outline"
              className="px-8 h-12 border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Voltar
            </Button>
            
            <Button
              onClick={handleSubmit}
              className={`px-8 h-12 transition-all duration-300 ${
                selectedPlan
                  ? 'bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90 shadow-lg shadow-[#1C1F3C]/25'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!selectedPlan}
            >
              {selectedPlan ? 'Finalizar Pedido' : 'Selecione um plano'}
              {selectedPlan && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}