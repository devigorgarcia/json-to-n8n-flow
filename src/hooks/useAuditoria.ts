
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { AuditoriaFormData, defaultValues } from '@/types/auditoriaTypes';

export const useAuditoria = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const WEBHOOK_URL = 'https://n8n-hooks.studioartemis.co/webhook-test/f368ba4e-5bad-4a56-83c3-459cf572fbbd';
  
  const form = useForm<AuditoriaFormData>({
    defaultValues
  });

  const handleAddItem = (fieldName: keyof AuditoriaFormData, value: string) => {
    if (!value.trim()) return;
    
    const currentValues = form.getValues(fieldName) as string[];
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

  const handleSubmit = async (data: AuditoriaFormData) => {
    setLoading(true);
    
    try {
      console.log("Enviando dados para:", WEBHOOK_URL);
      console.log("Dados sendo enviados:", data);
      
      const response = await fetch(WEBHOOK_URL, {
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

      // Reset form
      form.reset(defaultValues);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar dados",
        description: "Não foi possível enviar os dados para auditoria. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    handleSubmit: form.handleSubmit(handleSubmit),
    handleAddItem,
    handleRemoveItem
  };
};
