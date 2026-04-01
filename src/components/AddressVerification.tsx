import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { MapPin, CheckCircle, XCircle } from 'lucide-react';

interface AddressVerificationProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  setUserInfo: (info: any) => void;
  onVerify: (hasService: boolean) => void;
  hasServiceAtAddress: boolean;
}

export function AddressVerification({ userInfo, setUserInfo, onVerify, hasServiceAtAddress }: AddressVerificationProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [hasVerified, setHasVerified] = useState(false);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.address) return;

    setIsVerifying(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock verification logic - randomly return true/false for demo
    const hasService = Math.random() > 0.3; // 70% chance of having service
    
    setIsVerifying(false);
    setHasVerified(true);
    onVerify(hasService);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white shadow-lg border-0">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-700" />
              </div>
              <h2 className="text-2xl mb-2 text-gray-900">Verificação de Disponibilidade</h2>
              <p className="text-gray-600">Informe seu endereço para verificar a cobertura</p>
            </div>

            <form onSubmit={handleVerification} className="space-y-6">
              <div>
                <Label htmlFor="address">Endereço completo</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Rua, número, bairro, cidade - CEP"
                  value={userInfo.address}
                  onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-700 hover:bg-blue-800 h-12"
                disabled={!userInfo.address || isVerifying}
              >
                {isVerifying ? 'Verificando...' : 'Verificar Disponibilidade'}
              </Button>
            </form>

            {hasVerified && (
              <div className="mt-6">
                {hasServiceAtAddress ? (
                  <Alert className="border-blue-200 bg-blue-50">
                    <CheckCircle className="h-4 w-4 text-blue-700" />
                    <AlertDescription className="text-blue-900">
                      <strong>Ótima notícia!</strong> Temos cobertura na sua região. Continue para ver os planos disponíveis.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="border-[#02B3AA]/30 bg-[#02B3AA]/10">
                    <XCircle className="h-4 w-4 text-[#02B3AA]" />
                    <AlertDescription className="text-[#02B3AA]/90">
                      <strong>Ainda não chegamos aí!</strong> Deixe seus dados e te avisamos quando a Willix chegar na sua região.
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="border-[#02B3AA]/50 text-[#02B3AA] hover:bg-[#02B3AA]/10">
                          Quero ser notificado
                        </Button>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}