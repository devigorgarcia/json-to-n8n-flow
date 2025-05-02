
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { ClientFormData, defaultValues } from '@/types/n8nWebhook';

export const useN8nWebhook = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState<string>('https://bb10-179-83-205-111.ngrok-free.app');
  const [webhookPath, setWebhookPath] = useState<string>('/webhook-test/111e73c7-b589-4521-a77a-00e06b0e56cb');
  const [loading, setLoading] = useState<boolean>(false);
  const [showWebhookHelp, setShowWebhookHelp] = useState<boolean>(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  
  const form = useForm<ClientFormData>({
    defaultValues
  });

  const getFullWebhookUrl = () => {
    // Remove trailing slash from base URL if it exists
    const baseUrl = webhookUrl.endsWith('/') ? webhookUrl.slice(0, -1) : webhookUrl;
    
    // Make sure path starts with a slash
    const path = webhookPath.startsWith('/') ? webhookPath : `/${webhookPath}`;
    
    return `${baseUrl}${path}`;
  };

  const handleSendToN8n = async (data: ClientFormData) => {
    if (!webhookUrl) {
      toast({
        variant: "destructive",
        title: "URL do webhook não fornecida",
        description: "Por favor, insira a URL base do webhook do n8n"
      });
      return;
    }

    setLoading(true);
    
    try {
      const fullWebhookUrl = getFullWebhookUrl();
      console.log("Enviando dados para:", fullWebhookUrl);
      
      // Send to webhook
      await fetch(fullWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Use no-cors to avoid CORS issues
        body: JSON.stringify(data)
      });

      toast({
        title: "Solicitação enviada",
        description: "Os dados foram enviados para processamento no n8n"
      });

      console.log("Dados enviados para o n8n:", data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar dados",
        description: "Não foi possível enviar os dados para o n8n. Verifique o console para mais detalhes."
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    webhookUrl,
    setWebhookUrl,
    webhookPath,
    setWebhookPath,
    loading,
    showWebhookHelp,
    setShowWebhookHelp,
    logoPreview,
    setLogoPreview,
    handleSendToN8n,
    getFullWebhookUrl
  };
};
