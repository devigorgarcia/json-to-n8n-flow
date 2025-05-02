
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ClientFormData } from '@/types/n8nWebhook';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface PaymentsFormProps {
  form: UseFormReturn<ClientFormData>;
}

const PaymentsForm: React.FC<PaymentsFormProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Pagamentos</h3>
      
      <FormField
        control={form.control}
        name="pagamento_valor"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valor Total</FormLabel>
            <FormControl>
              <Input placeholder="0.000,00" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="pagamento_texto"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valor por Extenso</FormLabel>
            <FormControl>
              <Input placeholder="valor por extenso" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="qtde_parcelamento"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantidade de Parcelas</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="quantidade_parcelamento_texto"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qtde. de Parcelas por Extenso</FormLabel>
            <FormControl>
              <Input placeholder="quantidade por extenso" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="valor_parcela"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valor da Parcela</FormLabel>
            <FormControl>
              <Input placeholder="0.000,00" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="valor_parcela_texto"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valor da Parcela por Extenso</FormLabel>
            <FormControl>
              <Input placeholder="valor por extenso" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PaymentsForm;
