
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ClientFormData } from '@/types/n8nWebhook';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface ContractDateFormProps {
  form: UseFormReturn<ClientFormData>;
}

const ContractDateForm: React.FC<ContractDateFormProps> = ({ form }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="contrato_dia"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dia do Contrato</FormLabel>
            <FormControl>
              <Input placeholder="DD" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="contrato_mes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mês do Contrato</FormLabel>
            <FormControl>
              <Input placeholder="mês por extenso" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default ContractDateForm;
