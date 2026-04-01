import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckCircle, Home } from 'lucide-react';

interface SimulationSuccessProps {
  onBackToHome: () => void;
  isNoCoverage?: boolean;
}

export function SimulationSuccess({ onBackToHome, isNoCoverage = false }: SimulationSuccessProps) {
  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 bg-gray-800/90 backdrop-blur-sm border-gray-700 shadow-2xl text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          
          {isNoCoverage ? (
            <>
              <h2 className="text-3xl text-white mb-4">Solicitação enviada!</h2>
              <p className="text-gray-300 text-lg mb-2">
                Recebemos sua solicitação para ser avisado.
              </p>
              <p className="text-gray-400">
                Entraremos em contato assim que a cobertura estiver disponível na sua região.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl text-white mb-4">Pedido enviado com sucesso!</h2>
              <p className="text-gray-300 text-lg mb-2">
                Obrigado por escolher a Weclix!
              </p>
              <p className="text-gray-400">
                Entraremos em contato para concluir a contratação e agendar a instalação.
              </p>
            </>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-gray-700/50 rounded-lg p-4 text-sm text-gray-300">
            <div className="flex items-center justify-center mb-2">
              <div className="w-2 h-2 bg-[#02B3AA] rounded-full mr-2"></div>
              Próximos passos
            </div>
            <ul className="space-y-1 text-left">
              <li>• Nossa equipe entrará em contato em até 24h</li>
              <li>• Confirmaremos os dados e agendaremos a instalação</li>
              <li>• Instalação profissional sem custo adicional</li>
            </ul>
          </div>

          <Button
            onClick={onBackToHome}
            className="w-full h-12 bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90 shadow-lg shadow-[#1C1F3C]/25"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar para início
          </Button>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          Dúvidas? Entre em contato via WhatsApp: (16) 99628-2862
        </div>
      </Card>
    </div>
  );
}