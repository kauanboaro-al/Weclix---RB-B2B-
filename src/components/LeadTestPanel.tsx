import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { AlertTriangle, CheckCircle, Loader2, TestTube } from 'lucide-react';
import { captureLeadToSheets, type LeadData } from '../services/leadCapture';

interface LeadTestPanelProps {
  isVisible: boolean;
  onToggle: () => void;
}

export function LeadTestPanel({ isVisible, onToggle }: LeadTestPanelProps) {
  const [testData, setTestData] = useState({
    name: 'João Silva (TESTE)',
    whatsapp: '(11) 99999-9999',
    city: 'Mogi Guaçu'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastResult, setLastResult] = useState<'success' | 'error' | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 9)]);
  };

  const testGoogleSheets = async () => {
    setIsLoading(true);
    setLastResult(null);
    addLog('🧪 Iniciando teste do Google Sheets...');

    const leadData: LeadData = {
      name: testData.name,
      whatsapp: testData.whatsapp,
      city: testData.city,
      timestamp: new Date().toLocaleString('pt-BR'),
      source: 'TESTE - Painel de Teste'
    };

    try {
      addLog('📤 Enviando dados de teste...');
      const success = await captureLeadToSheets(leadData);
      
      if (success) {
        setLastResult('success');
        addLog('✅ Teste realizado com sucesso!');
        addLog('📋 Verifique sua planilha Google Sheets');
      } else {
        setLastResult('error');
        addLog('❌ Falha no teste');
      }
    } catch (error) {
      setLastResult('error');
      addLog(`❌ Erro durante o teste: ${error}`);
    }

    setIsLoading(false);
  };

  const testUrl = async () => {
    setIsLoading(true);
    addLog('🌐 Testando conectividade com o Google Apps Script...');

    try {
      // Teste 1: GET simples
      addLog('📤 Teste 1: GET simples...');
      const response1 = await fetch('https://script.google.com/a/macros/bystartup.com.br/s/AKfycbw3nataN6QLZvHxBJiyv4zsbUlHMw6wLLwRoniAx5IAy7YDCyf2OC3-T-ycMaJ2iH2txQ/exec', {
        method: 'GET',
        mode: 'no-cors'
      });
      addLog('✅ GET simples concluído');

      // Teste 2: GET com parâmetros
      addLog('📤 Teste 2: GET com parâmetros...');
      const testUrl = 'https://script.google.com/a/macros/bystartup.com.br/s/AKfycbw3nataN6QLZvHxBJiyv4zsbUlHMw6wLLwRoniAx5IAy7YDCyf2OC3-T-ycMaJ2iH2txQ/exec?name=TesteConectividade&whatsapp=11999999999&city=TesteCidade&timestamp=' + new Date().toLocaleString('pt-BR') + '&source=Teste de Conectividade';
      
      const response2 = await fetch(testUrl, {
        method: 'GET',
        mode: 'no-cors'
      });
      addLog('✅ GET com parâmetros concluído');

      // Teste 3: Pixel tracking
      addLog('📤 Teste 3: Pixel tracking...');
      const img = new Image();
      img.onload = () => addLog('✅ Pixel tracking: sucesso');
      img.onerror = () => addLog('⚠️ Pixel tracking: erro (normal com no-cors)');
      img.src = testUrl + '&method=pixel&_=' + Date.now();

      addLog('✅ Todos os testes de conectividade concluídos');
      addLog('📋 Verifique sua planilha para ver se "TesteConectividade" foi adicionado');
      
    } catch (error) {
      addLog(`❌ Erro nos testes de conectividade: ${error}`);
    }

    setIsLoading(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl text-gray-900 mb-2">🧪 Painel de Teste - Google Sheets</h2>
              <p className="text-gray-600">Teste a integração com o Google Apps Script</p>
            </div>
            <Button onClick={onToggle} variant="ghost" className="p-2">✕</Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Status */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Status da última tentativa:</span>
            {lastResult === 'success' && (
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Sucesso
              </Badge>
            )}
            {lastResult === 'error' && (
              <Badge className="bg-red-100 text-red-800">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Erro
              </Badge>
            )}
            {lastResult === null && (
              <Badge variant="secondary">Aguardando teste</Badge>
            )}
          </div>

          {/* Test Data */}
          <div className="space-y-4">
            <h3 className="text-lg text-gray-900">Dados de Teste</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label>Nome</Label>
                <Input
                  value={testData.name}
                  onChange={(e) => setTestData(prev => ({ ...prev, name: e.target.value }))}
                  className="rounded-[32px]"
                />
              </div>
              <div>
                <Label>WhatsApp</Label>
                <Input
                  value={testData.whatsapp}
                  onChange={(e) => setTestData(prev => ({ ...prev, whatsapp: e.target.value }))}
                  className="rounded-[32px]"
                />
              </div>
              <div>
                <Label>Cidade</Label>
                <Input
                  value={testData.city}
                  onChange={(e) => setTestData(prev => ({ ...prev, city: e.target.value }))}
                  className="rounded-[32px]"
                />
              </div>
            </div>
          </div>

          {/* Test Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={testUrl}
              disabled={isLoading}
              variant="outline"
              className="rounded-[32px]"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : '🌐'}
              Testar URL
            </Button>
            
            <Button
              onClick={testGoogleSheets}
              disabled={isLoading}
              className="bg-[#2ba9a0] hover:bg-[#1c1f3c] text-white rounded-[32px]"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : '🧪'}
              Testar Captura
            </Button>
          </div>

          {/* Logs */}
          <div className="space-y-2">
            <h3 className="text-lg text-gray-900">Logs de Debug</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono max-h-60 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-500">Nenhum log ainda...</div>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log}
                  </div>
                ))
              )}
            </div>
            {logs.length > 0 && (
              <Button
                onClick={() => setLogs([])}
                variant="ghost"
                className="text-sm"
              >
                Limpar Logs
              </Button>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm text-blue-900 mb-2">💡 Como usar:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• <strong>Testar URL:</strong> Verifica se o Google Apps Script está acessível</li>
              <li>• <strong>Testar Captura:</strong> Envia um lead de teste para sua planilha</li>  
              <li>• Verifique os logs de debug abaixo para mais detalhes</li>
              <li>• Após o teste, verifique sua planilha Google Sheets</li>
            </ul>
          </div>

          {/* URL Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="text-sm text-green-900 mb-2">🔗 URL Configurada:</h4>
            <div className="text-xs text-green-800 font-mono break-all bg-green-100 p-2 rounded">
              https://script.google.com/a/macros/bystartup.com.br/s/AKfycbw3nataN6QLZvHxBJiyv4zsbUlHMw6wLLwRoniAx5IAy7YDCyf2OC3-T-ycMaJ2iH2txQ/exec
            </div>
            <p className="text-xs text-green-700 mt-2">✅ URL atualizada com domínio corporativo!</p>
          </div>
        </div>
      </Card>
    </div>
  );
}