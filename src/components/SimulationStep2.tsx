import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { ArrowRight, MapPin, AlertCircle } from 'lucide-react';

interface SimulationStep2Props {
  onNext: () => void;
  onBack: () => void;
  onNoCoverage: (contactInfo: string) => void;
}

export function SimulationStep2({ onNext, onBack, onNoCoverage }: SimulationStep2Props) {
  const [address, setAddress] = useState('');
  const [showNoCoverage, setShowNoCoverage] = useState(false);
  const [contactInfo, setContactInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    setIsLoading(true);
    
    // Simular verificação de cobertura (70% chance de ter cobertura)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const hasCoverage = Math.random() > 0.3;
    
    setIsLoading(false);
    
    if (hasCoverage) {
      onNext();
    } else {
      setShowNoCoverage(true);
    }
  };

  const handleNoCoverageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNoCoverage(contactInfo);
  };

  if (showNoCoverage) {
    return (
      <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-gray-800/90 backdrop-blur-sm border-gray-700 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#02B3AA]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-[#02B3AA]" />
            </div>
            <h2 className="text-2xl text-white mb-3">Ainda não atendemos sua região</h2>
            <p className="text-gray-300">Gostaria que entrássemos em contato assim que disponível?</p>
          </div>

          <form onSubmit={handleNoCoverageSubmit} className="space-y-6">
            <div>
              <Label htmlFor="contact" className="text-gray-300">E-mail ou telefone para contato (opcional)</Label>
              <Input
                id="contact"
                type="text"
                placeholder="Deixe seu contato para ser avisado"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#02B3AA] focus:ring-[#02B3AA]/20"
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                onClick={onBack}
                variant="outline"
                className="flex-1 h-12 border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Voltar
              </Button>
              
              <Button
                type="submit"
                className="flex-1 h-12 bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90"
              >
                Sim, quero ser avisado
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 bg-gray-800/90 backdrop-blur-sm border-gray-700 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl text-white mb-3">Informe seu endereço</h2>
          <p className="text-gray-300">Vamos verificar a disponibilidade na sua região.</p>
        </div>

        <form onSubmit={handleAddressSubmit} className="space-y-6">
          <div>
            <Label htmlFor="address" className="text-gray-300">Endereço completo</Label>
            <Input
              id="address"
              type="text"
              placeholder="Rua, número, bairro, cidade - CEP"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#02B3AA] focus:ring-[#02B3AA]/20"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="flex-1 h-12 border-gray-600 text-gray-300 hover:bg-gray-700"
              disabled={isLoading}
            >
              Voltar
            </Button>
            
            <Button
              type="submit"
              className={`flex-1 h-12 transition-all duration-300 ${
                address.trim() && !isLoading
                  ? 'bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90 shadow-lg shadow-[#1C1F3C]/25'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!address.trim() || isLoading}
            >
              {isLoading ? 'Verificando...' : 'Verificar Disponibilidade'}
              {!isLoading && address.trim() && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}