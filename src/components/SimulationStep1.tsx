import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

interface SimulationStep1Props {
  onNext: (data: { name: string; email: string; phone: string }) => void;
  onBack: () => void;
}

export function SimulationStep1({ onNext, onBack }: SimulationStep1Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    
    const complete = Object.values(updatedData).every(val => val.trim() !== '');
    setIsComplete(complete);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isComplete) {
      onNext(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 bg-gray-800/90 backdrop-blur-sm border-gray-700 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-white mb-3">Vamos começar sua simulação!</h2>
          <p className="text-gray-300">Preencha seus dados para verificarmos a cobertura na sua região.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#02B3AA] focus:ring-[#02B3AA]/20"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-300">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#02B3AA] focus:ring-[#02B3AA]/20"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-300">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="mt-1 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#02B3AA] focus:ring-[#02B3AA]/20"
              />
            </div>
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
              className={`flex-1 h-12 transition-all duration-300 ${
                isComplete
                  ? 'bg-[#1C1F3C] text-white hover:bg-[#1C1F3C]/90 shadow-lg shadow-[#1C1F3C]/25'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!isComplete}
            >
              {isComplete ? 'Escolher meu plano' : 'Escolher meu plano'}
              {isComplete && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}