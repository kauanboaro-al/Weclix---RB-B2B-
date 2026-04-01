import React from 'react';
import { Card } from './ui/card';
import { Wifi, Zap, Users, Shield } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Wi-Fi Grátis",
      description: "Roteador Wi-Fi incluído sem custo adicional"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instalação Rápida",
      description: "Técnico especializado em até 24 horas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Humano",
      description: "Suporte personalizado quando você precisar"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sem Fidelidade",
      description: "Cancele quando quiser, sem multas"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Por que escolher a Willix?</h2>
            <p className="text-gray-600">Vantagens que fazem a diferença no seu dia a dia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}