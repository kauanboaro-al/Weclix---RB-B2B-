// Lead capture service using Google Sheets API
export interface LeadData {
  name: string;
  whatsapp: string;
  city: string;
  documentType?: string;
  timestamp: string;
  source: string;
}

// Google Sheets configuration
const GOOGLE_SHEETS_URL = 'https://script.google.com/a/macros/bystartup.com.br/s/AKfycbw3nataN6QLZvHxBJiyv4zsbUlHMw6wLLwRoniAx5IAy7YDCyf2OC3-T-ycMaJ2iH2txQ/exec';

export const captureLeadToSheets = async (leadData: LeadData): Promise<boolean> => {
  try {
    console.log('📊 Tentando capturar lead:', leadData);
    
    // Estratégia 1: Usando mode: 'no-cors' com FormData
    console.log('📤 Tentativa 1: FormData com no-cors...');
    
    const formData = new FormData();
    formData.append('name', leadData.name);
    formData.append('whatsapp', leadData.whatsapp);
    formData.append('city', leadData.city);
    if (leadData.documentType) {
      formData.append('documentType', leadData.documentType);
    }
    formData.append('timestamp', leadData.timestamp);
    formData.append('source', leadData.source);

    const response1 = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    console.log('✅ Tentativa 1 concluída (no-cors não retorna status)');

    // Estratégia 2: Usando URL parameters (GET request que vira POST internamente)
    console.log('📤 Tentativa 2: URL parameters...');
    
    const params = new URLSearchParams({
      name: leadData.name,
      whatsapp: leadData.whatsapp,
      city: leadData.city,
      timestamp: leadData.timestamp,
      source: leadData.source
    });

    if (leadData.documentType) {
      params.append('documentType', leadData.documentType);
    }

    const urlWithParams = `${GOOGLE_SHEETS_URL}?${params.toString()}`;
    
    await fetch(urlWithParams, {
      method: 'GET',
      mode: 'no-cors'
    });

    console.log('✅ Tentativa 2 concluída');

    // Estratégia 3: Usando imagem como fallback (pixel tracking)
    console.log('📤 Tentativa 3: Pixel tracking...');
    
    let pixelUrl = `${GOOGLE_SHEETS_URL}?method=pixel&name=${encodeURIComponent(leadData.name)}&whatsapp=${encodeURIComponent(leadData.whatsapp)}&city=${encodeURIComponent(leadData.city)}&timestamp=${encodeURIComponent(leadData.timestamp)}&source=${encodeURIComponent(leadData.source)}`;
    
    if (leadData.documentType) {
      pixelUrl += `&documentType=${encodeURIComponent(leadData.documentType)}`;
    }
    
    pixelUrl += `&_=${Date.now()}`;
    
    const img = new Image();
    img.src = pixelUrl;
    
    console.log('✅ Todas as tentativas de envio concluídas');
    console.log('📋 Verifique sua planilha Google Sheets em alguns segundos');

    return true;
  } catch (error) {
    console.error('❌ Erro ao capturar lead:', error);
    
    // Fallback final: tentar pixel tracking mesmo com erro
    try {
      console.log('🔄 Tentativa final: Pixel tracking de emergência...');
      const img = new Image();
      img.src = `${GOOGLE_SHEETS_URL}?emergency=true&name=${encodeURIComponent(leadData.name)}&whatsapp=${encodeURIComponent(leadData.whatsapp)}&city=${encodeURIComponent(leadData.city)}&timestamp=${encodeURIComponent(leadData.timestamp)}&source=${encodeURIComponent(leadData.source)}&_=${Date.now()}`;
      console.log('✅ Pixel tracking de emergência enviado');
    } catch (finalError) {
      console.error('❌ Falha total:', finalError);
    }
    
    return false;
  }
};

// Alternativa: Captura local com opção de exportar
export const captureLeadLocally = (leadData: LeadData): void => {
  try {
    const existingLeads = JSON.parse(localStorage.getItem('weclix_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('weclix_leads', JSON.stringify(existingLeads));
  } catch (error) {
    console.error('Erro ao salvar lead localmente:', error);
  }
};

export const exportLeadsToCSV = (): void => {
  try {
    const leads = JSON.parse(localStorage.getItem('weclix_leads') || '[]');
    if (leads.length === 0) {
      alert('Nenhum lead encontrado para exportar.');
      return;
    }

    const csvHeader = 'Nome,WhatsApp,Cidade,Data/Hora,Origem\n';
    const csvContent = leads.map((lead: LeadData) => 
      `"${lead.name}","${lead.whatsapp}","${lead.city}","${lead.timestamp}","${lead.source}"`
    ).join('\n');

    const csvData = csvHeader + csvContent;
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `weclix_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Erro ao exportar leads:', error);
  }
};

// Função para configurar o Google Apps Script (instruções para o usuário)
export const getGoogleSheetsSetupInstructions = (): string => {
  return `
INSTRUÇÕES PARA CONFIGURAR O GOOGLE SHEETS - VERSÃO CORRIGIDA:

1. Abra o Google Sheets e crie uma nova planilha
2. Nomeie as colunas na primeira linha: Nome | WhatsApp | Cidade | Data/Hora | Origem

3. Vá para Extensions > Apps Script

4. SUBSTITUA TODO O CÓDIGO por este script CORRIGIDO:

function doPost(e) {
  return processLead(e);
}

function doGet(e) {
  return processLead(e);
}

function processLead(e) {
  try {
    console.log('Recebendo dados:', e);
    
    const sheet = SpreadsheetApp.getActiveSheet();
    let data = {};
    
    // Método 1: Parâmetros da URL (GET)
    if (e.parameter && e.parameter.name) {
      data = {
        name: e.parameter.name,
        whatsapp: e.parameter.whatsapp,
        city: e.parameter.city,
        timestamp: e.parameter.timestamp,
        source: e.parameter.source
      };
      console.log('Dados via URL parameters:', data);
    }
    // Método 2: FormData (POST)
    else if (e.parameter) {
      data = {
        name: e.parameter.name,
        whatsapp: e.parameter.whatsapp,
        city: e.parameter.city,
        timestamp: e.parameter.timestamp,
        source: e.parameter.source
      };
      console.log('Dados via FormData:', data);
    }
    // Método 3: JSON (POST)
    else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
      console.log('Dados via JSON:', data);
    }
    
    // Salva os dados se tiver pelo menos o nome
    if (data.name && data.name.trim() !== '') {
      // Adiciona os dados na planilha
      sheet.appendRow([
        data.name || 'N/A',
        data.whatsapp || 'N/A',
        data.city || 'N/A',
        data.timestamp || new Date().toLocaleString('pt-BR'),
        data.source || 'N/A'
      ]);
      
      console.log('Lead salvo com sucesso:', data);
      return ContentService.createTextOutput('SUCCESS').setMimeType(ContentService.MimeType.TEXT);
    } else {
      console.log('Dados inválidos recebidos:', data);
      return ContentService.createTextOutput('ERROR: Nome obrigatório').setMimeType(ContentService.MimeType.TEXT);
    }
    
  } catch (error) {
    console.error('Erro no script:', error);
    return ContentService.createTextOutput('ERROR: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

5. Salve o projeto com um nome (ex: "Weclix Lead Capture - Corrigido")

6. Clique em "Deploy" > "New Deployment"

7. Configure:
   - Type: Web app
   - Execute as: Me (seu email)
   - Who has access: Anyone
   - IMPORTANTE: Marque "Anyone, even anonymous" se disponível

8. Clique em "Deploy" e autorize TODAS as permissões solicitadas

9. Copie a URL gerada (deve terminar com /exec)

10. TESTE o script acessando a URL no navegador - deve mostrar "ERROR: Nome obrigatório"

11. Teste com parâmetros: Cole sua URL + "?name=Teste&whatsapp=11999999999&city=TesteCidade"

DICAS IMPORTANTES:
- Se ainda não funcionar, verifique as permissões do Google Apps Script
- Certifique-se de que a planilha está aberta quando deploy o script
- Verifique os logs em "Executions" no Apps Script para debug
- O script agora aceita múltiplos métodos de envio para máxima compatibilidade
  `;
};