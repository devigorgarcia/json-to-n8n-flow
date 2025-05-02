
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ClientFormData } from '@/types/n8nWebhook';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface DeadlinesFormProps {
  form: UseFormReturn<ClientFormData>;
}

const DeadlinesForm: React.FC<DeadlinesFormProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Prazos</h3>
      
      <FormField
        control={form.control}
        name="entrada_prazo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Prazo de Entrada (dias)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="desenvolvimento_prazo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Prazo de Desenvolvimento (dias)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="revisao_prazo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Prazo de Revisão (dias)</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default DeadlinesForm;
