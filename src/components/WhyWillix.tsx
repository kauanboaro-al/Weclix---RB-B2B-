import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Headphones, Users, Star } from 'lucide-react';

export function WhyWillix() {
  const reasons = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte rápido e humanizado",
      description: "Atendimento personalizado com pessoas reais, não robôs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mais de 50 mil clientes atendidos",
      description: "Experiência comprovada em conectar famílias"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Avaliação 5 estrelas no Google",
      description: "Satisfação comprovada pelos nossos clientes"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-blue-900 border-orange-200">
              Por que somos diferentes
            </Badge>
            <h2 className="text-3xl mb-4 text-gray-900">Por que escolher a Willix?</h2>
            <p className="text-gray-600">Compromisso com qualidade e satisfação do cliente</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-700">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl mb-4 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}