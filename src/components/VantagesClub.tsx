import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Gift, CreditCard } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VantagesClub() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-[#02B3AA]/20 text-[#02B3AA] border-[#02B3AA]/30">
                <Gift className="w-4 h-4 mr-2" />
                Exclusivo para clientes
              </Badge>
              <h2 className="text-3xl mb-6">Clube de Vantagens Willix</h2>
              <p className="text-lg mb-6 text-blue-100">
                Descontos exclusivos em lojas parceiras, cashback em compras e muito mais benefícios para você economizar.
              </p>
              <ul className="space-y-3 mb-8 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#02B3AA] rounded-full mr-3"></div>
                  Descontos de até 30% em restaurantes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#02B3AA] rounded-full mr-3"></div>
                  Cashback em compras online
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#02B3AA] rounded-full mr-3"></div>
                  Promoções exclusivas toda semana
                </li>
              </ul>
              <Button 
                onClick={() => {
                  const whatsappUrl = 'https://wa.me/5516996282862?text=Vim do Google e quero saber mais sobre o plano Weclix Empresa';
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90 h-12 px-8"
              >
                Saiba mais
              </Button>
            </div>

            <div className="flex justify-center">
              <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-sm">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="w-12 h-12 text-[#02B3AA]" />
                  </div>
                  <h3 className="text-xl mb-4 text-gray-900">Cartão Willix</h3>
                  <p className="text-gray-600 mb-6">
                    Tenha acesso a todos os benefícios do clube com nosso cartão digital
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=120&fit=crop"
                      alt="Exemplo de cupom de desconto"
                      className="w-full h-20 object-cover rounded"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}