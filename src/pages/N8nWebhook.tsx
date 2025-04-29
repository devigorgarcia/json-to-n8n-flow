
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

// JSON de exemplo/padrão
const defaultJson = {
  "nome_cliente": "Empresa ABC Ltda",
  "empresa_nome": "Empresa ABC Ltda",
  "empresa_endereco": "Av. Paulista, 1000, Bela Vista, São Paulo - SP, CEP: 01310-100",
  "empresa_cnpj": "82732340000171",
  "representante_nome": "João da Silva",
  "representante_estado_civil": "casado",
  "representante_cpf": "71469789078",
  "representante_endereco": "Rua das Flores, 123, Jardim Europa, São Paulo - SP, CEP: 01456-000",
  "representante_telefone": "(11) 98765-4321",
  "entrada_prazo": "5",
  "desenvolvimento_prazo": "20",
  "revisao_prazo": "5",
  "pagamento_valor": "6.000,00",
  "pagamento_texto": "seis mil reais",
  "qtde_parcelamento": "6",
  "quantidade_parcelamento_texto": "seis",
  "valor_parcela": "1.000,00",
  "valor_parcela_texto": "mil reais",
  "contrato_dia": "29",
  "contrato_mes": "abril",
  "qtde_parcelamento_texto": "seis"
};

const N8nWebhook: React.FC = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState<string>('');
  const [jsonData, setJsonData] = useState<string>(JSON.stringify(defaultJson, null, 2));
  const [loading, setLoading] = useState<boolean>(false);

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonData(e.target.value);
  };

  const handleSendToN8n = async () => {
    if (!webhookUrl) {
      toast({
        variant: "destructive",
        title: "URL do webhook não fornecida",
        description: "Por favor, insira a URL do webhook do n8n"
      });
      return;
    }

    try {
      // Validar o JSON
      const parsedJson = JSON.parse(jsonData);
      setLoading(true);

      // Enviar para o webhook
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors', // Usar no-cors para evitar problemas de CORS
          body: jsonData
        });

        toast({
          title: "Solicitação enviada",
          description: "Os dados foram enviados para processamento no n8n"
        });

        console.log("Dados enviados para o n8n:", parsedJson);
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
        toast({
          variant: "destructive",
          title: "Erro ao enviar dados",
          description: "Não foi possível enviar os dados para o n8n. Verifique o console para mais detalhes."
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "JSON inválido",
        description: "O JSON fornecido não é válido. Por favor, verifique o formato."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">N8N Webhook</h1>
          <p className="mt-2 text-lg text-gray-500">
            Envie dados JSON para processamento via webhook do n8n
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Processador de JSON para N8N</CardTitle>
            <CardDescription>
              Insira o JSON com os dados do cliente e o webhook do n8n para processar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL do Webhook N8N</Label>
              <Input
                id="webhook-url"
                placeholder="https://n8n.exemplo.com/webhook/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Insira a URL do webhook fornecida pela sua instância do n8n
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="json-data">Dados do Cliente (JSON)</Label>
              <Textarea
                id="json-data"
                value={jsonData}
                onChange={handleJsonChange}
                className="font-mono h-96"
              />
              <p className="text-sm text-muted-foreground">
                Modifique os dados conforme necessário ou use o exemplo padrão
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleSendToN8n} 
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : "Enviar para o n8n"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default N8nWebhook;
