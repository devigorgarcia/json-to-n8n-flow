
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ClientFormData } from '@/types/n8nWebhook';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface RepresentativeDataFormProps {
  form: UseFormReturn<ClientFormData>;
}

const RepresentativeDataForm: React.FC<RepresentativeDataFormProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Dados do Representante</h3>
      
      <FormField
        control={form.control}
        name="representante_nome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Nome Completo" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="representante_estado_civil"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Estado Civil</FormLabel>
            <FormControl>
              <Input placeholder="Estado Civil" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="representante_cpf"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CPF</FormLabel>
            <FormControl>
              <Input placeholder="000.000.000-00" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="representante_endereco"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Endereço</FormLabel>
            <FormControl>
              <Textarea placeholder="Endereço Completo" rows={3} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="representante_telefone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <Input placeholder="(00) 00000-0000" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default RepresentativeDataForm;
