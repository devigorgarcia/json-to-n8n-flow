
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { AuditoriaFormData, AuditoriaFormSettings, defaultValues, defaultSettings } from '@/types/auditoriaTypes';

export const useAuditoria = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [settings, setSettings] = useState<AuditoriaFormSettings>(defaultSettings);
  
  const form = useForm<AuditoriaFormData>({
    defaultValues
  });

  const handleAddItem = (fieldName: keyof AuditoriaFormData, value: string) => {
    if (!value.trim()) return;
    
    const currentValues = form.getValues(fieldName) as string[];
    
    // For lista_concorrentes, limit to exactly 3 items
    if (fieldName === 'lista_concorrentes' && currentValues.length >= 3) {
      toast({
        variant: "destructive",
        title: "Limite de concorrentes atingido",
        description: "Você só pode adicionar exatamente 3 concorrentes. Remova um para adicionar outro.",
      });
      return;
    }
    
    if (Array.isArray(currentValues) && !currentValues.includes(value)) {
      form.setValue(fieldName, [...currentValues, value]);
    }
  };

  const handleRemoveItem = (fieldName: keyof AuditoriaFormData, itemToRemove: string) => {
    const currentValues = form.getValues(fieldName) as string[];
    if (Array.isArray(currentValues)) {
      form.setValue(
        fieldName,
        currentValues.filter(item => item !== itemToRemove)
      );
    }
  };

  const handleChangeWebhookUrl = (url: string) => {
    setSettings(prev => ({ ...prev, webhook_url: url }));
  };

  const handleSubmit = async (data: AuditoriaFormData) => {
    if (!settings.webhook_url.trim()) {
      toast({
        variant: "destructive",
        title: "URL do webhook é obrigatória",
        description: "Por favor, insira a URL do webhook para enviar os dados.",
      });
      return;
    }
    
    // Validate exactly 3 competitors
    if (data.lista_concorrentes.length !== 3) {
      toast({
        variant: "destructive",
        title: "Número incorreto de concorrentes",
        description: "Por favor, insira exatamente 3 concorrentes para prosseguir.",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      console.log("Enviando dados para:", settings.webhook_url);
      console.log("Dados sendo enviados:", data);
      
      const response = await fetch(settings.webhook_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Use no-cors to avoid CORS issues
        body: JSON.stringify(data)
      });

      toast({
        title: "Solicitação de auditoria enviada",
        description: "Seus dados foram enviados com sucesso. Aguarde nosso retorno.",
      });

      // Reset form only on successful submission
      form.reset(defaultValues);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar dados",
        description: "Não foi possível enviar os dados para auditoria. Por favor, tente novamente mais tarde.",
      });
      // Do not reset the form on error - this keeps user data in the form
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    settings,
    handleSubmit: form.handleSubmit(handleSubmit),
    handleAddItem,
    handleRemoveItem,
    handleChangeWebhookUrl
  };
};
