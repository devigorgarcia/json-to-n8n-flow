
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ClientFormData } from '@/types/n8nWebhook';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CompanyDataFormProps {
  form: UseFormReturn<ClientFormData>;
}

const CompanyDataForm: React.FC<CompanyDataFormProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Dados da Empresa</h3>
      
      <FormField
        control={form.control}
        name="nome_cliente"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome do Cliente</FormLabel>
            <FormControl>
              <Input placeholder="Nome do Cliente" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="empresa_nome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome da Empresa</FormLabel>
            <FormControl>
              <Input placeholder="Nome da Empresa" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="empresa_endereco"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Endereço da Empresa</FormLabel>
            <FormControl>
              <Textarea placeholder="Endereço Completo" rows={3} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="empresa_cnpj"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CNPJ</FormLabel>
            <FormControl>
              <Input placeholder="00.000.000/0000-00" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CompanyDataForm;
