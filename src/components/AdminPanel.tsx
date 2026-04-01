import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Users, Calendar, MapPin, Phone, Trash2, Eye, EyeOff } from 'lucide-react';
import { exportLeadsToCSV, getGoogleSheetsSetupInstructions, type LeadData } from '../services/leadCapture';

interface AdminPanelProps {
  isVisible: boolean;
  onToggle: () => void;
}

export function AdminPanel({ isVisible, onToggle }: AdminPanelProps) {
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (isVisible) {
      loadLeads();
    }
  }, [isVisible]);

  const loadLeads = () => {
    try {
      const storedLeads = JSON.parse(localStorage.getItem('weclix_leads') || '[]');
      setLeads(storedLeads);
    } catch (error) {
      console.error('Erro ao carregar leads:', error);
      setLeads([]);
    }
  };

  const clearAllLeads = () => {
    if (confirm('Tem certeza que deseja limpar todos os leads? Esta ação não pode ser desfeita.')) {
      localStorage.removeItem('weclix_leads');
      setLeads([]);
    }
  };

  const getTotalByCity = () => {
    const cityCount: { [key: string]: number } = {};
    leads.forEach(lead => {
      cityCount[lead.city] = (cityCount[lead.city] || 0) + 1;
    });
    return cityCount;
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-gray-900 mb-2">Painel Administrativo - Weclix</h2>
              <p className="text-gray-600">Gerencie os leads capturados pela landing page</p>
            </div>
            <Button
              onClick={onToggle}
              variant="ghost"
              className="p-2"
            >
              <EyeOff className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total de Leads</p>
                  <p className="text-2xl text-gray-900">{leads.length}</p>
                </div>
                <Users className="w-8 h-8 text-[#2ba9a0]" />
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Leads Hoje</p>
                  <p className="text-2xl text-gray-900">
                    {leads.filter(lead => 
                      new Date(lead.timestamp.split(' ')[0].split('/').reverse().join('-')).toDateString() === new Date().toDateString()
                    ).length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-[#02B3AA]" />
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cidades Ativas</p>
                  <p className="text-2xl text-gray-900">{Object.keys(getTotalByCity()).length}</p>
                </div>
                <MapPin className="w-8 h-8 text-[#1c1f3c]" />
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              onClick={exportLeadsToCSV}
              className="bg-[#2ba9a0] hover:bg-[#1c1f3c] text-white rounded-[32px]"
              disabled={leads.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar CSV
            </Button>

            <Button
              onClick={() => setShowInstructions(!showInstructions)}
              variant="outline"
              className="rounded-[32px]"
            >
              {showInstructions ? 'Ocultar' : 'Ver'} Configuração Google Sheets
            </Button>

            <Button
              onClick={clearAllLeads}
              variant="destructive"
              className="rounded-[32px]"
              disabled={leads.length === 0}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpar Todos
            </Button>
          </div>

          {/* Google Sheets Instructions */}
          {showInstructions && (
            <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg text-gray-900 mb-3">Configuração do Google Sheets</h3>
              <pre className="text-xs text-gray-700 whitespace-pre-wrap bg-white p-3 rounded border overflow-x-auto">
                {getGoogleSheetsSetupInstructions()}
              </pre>
            </Card>
          )}

          {/* Leads by City */}
          <Card className="p-4 mb-6">
            <h3 className="text-lg text-gray-900 mb-3">Leads por Cidade</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(getTotalByCity()).map(([city, count]) => (
                <Badge key={city} variant="secondary" className="px-3 py-1">
                  {city}: {count}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Leads Table */}
          <Card className="overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg text-gray-900">Todos os Leads</h3>
            </div>
            
            {leads.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Nenhum lead capturado ainda.</p>
                <p className="text-sm">Os leads aparecerão aqui quando os usuários preencherem o formulário.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Nome</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">WhatsApp</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Cidade</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Data/Hora</th>
                      <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Origem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {leads.map((lead, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{lead.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                            {lead.whatsapp}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <Badge variant="outline">{lead.city}</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{lead.timestamp}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{lead.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </Card>
    </div>
  );
}