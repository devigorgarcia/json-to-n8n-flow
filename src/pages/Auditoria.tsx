
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { FormField, FormItem, FormLabel, FormControl, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import TagInput from '@/components/auditoria/TagInput';
import { useAuditoria } from '@/hooks/useAuditoria';

const Auditoria: React.FC = () => {
  const {
    form,
    loading,
    handleSubmit,
    handleAddItem,
    handleRemoveItem
  } = useAuditoria();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Auditoria Gratuita</h1>
          <p className="mt-2 text-lg text-gray-500">
            Preencha o formulário abaixo para receber uma análise detalhada do seu site ou negócio
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Formulário de Auditoria</CardTitle>
            <CardDescription>
              Preencha as informações sobre seu site para receber uma análise personalizada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nome_site"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do Site</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Meu Site" {...field} required />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dominio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Domínio</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: meusite.com.br" {...field} required />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pais"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>País</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Brasil" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="idioma"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Idioma</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: pt" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="nicho_atuacao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nicho de Atuação</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: E-commerce de Moda" {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="servico_produto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serviço ou Produto Principal</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva brevemente seu serviço ou produto principal" 
                          {...field} 
                          required
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <div className="space-y-4">
                  <TagInput 
                    label="Serviços ou Produtos"
                    value={form.watch('lista_servicos')}
                    placeholder="Digite um serviço ou produto e pressione Enter"
                    onAdd={(value) => handleAddItem('lista_servicos', value)}
                    onRemove={(value) => handleRemoveItem('lista_servicos', value)}
                  />
                </div>
                
                <div className="space-y-4">
                  <TagInput 
                    label="Concorrentes (opcional)"
                    value={form.watch('lista_concorrentes')}
                    placeholder="Digite o nome ou site de um concorrente"
                    onAdd={(value) => handleAddItem('lista_concorrentes', value)}
                    onRemove={(value) => handleRemoveItem('lista_concorrentes', value)}
                  />
                </div>
                
                <div className="space-y-4">
                  <TagInput 
                    label="Palavras-chave Estratégicas (opcional)"
                    value={form.watch('lista_palavras_estrategicas')}
                    placeholder="Digite uma palavra-chave importante"
                    onAdd={(value) => handleAddItem('lista_palavras_estrategicas', value)}
                    onRemove={(value) => handleRemoveItem('lista_palavras_estrategicas', value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full mt-6" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : "Solicitar Auditoria Gratuita"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auditoria;
