
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, AlertTriangle } from 'lucide-react';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";

// Interface para os dados do cliente
interface ClientFormData {
  nome_cliente: string;
  empresa_nome: string;
  empresa_endereco: string;
  empresa_cnpj: string;
  representante_nome: string;
  representante_estado_civil: string;
  representante_cpf: string;
  representante_endereco: string;
  representante_telefone: string;
  entrada_prazo: string;
  desenvolvimento_prazo: string;
  revisao_prazo: string;
  pagamento_valor: string;
  pagamento_texto: string;
  qtde_parcelamento: string;
  quantidade_parcelamento_texto: string;
  valor_parcela: string;
  valor_parcela_texto: string;
  contrato_dia: string;
  contrato_mes: string;
  qtde_parcelamento_texto: string;
}

// Valores iniciais do formulário
const defaultValues: ClientFormData = {
  nome_cliente: "Empresa ABC Ltda",
  empresa_nome: "Empresa ABC Ltda",
  empresa_endereco: "Av. Paulista, 1000, Bela Vista, São Paulo - SP, CEP: 01310-100",
  empresa_cnpj: "82732340000171",
  representante_nome: "João da Silva",
  representante_estado_civil: "casado",
  representante_cpf: "71469789078",
  representante_endereco: "Rua das Flores, 123, Jardim Europa, São Paulo - SP, CEP: 01456-000",
  representante_telefone: "(11) 98765-4321",
  entrada_prazo: "5",
  desenvolvimento_prazo: "20",
  revisao_prazo: "5",
  pagamento_valor: "6.000,00",
  pagamento_texto: "seis mil reais",
  qtde_parcelamento: "6",
  quantidade_parcelamento_texto: "seis",
  valor_parcela: "1.000,00",
  valor_parcela_texto: "mil reais",
  contrato_dia: "29",
  contrato_mes: "abril",
  qtde_parcelamento_texto: "seis"
};

const N8nWebhook: React.FC = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState<string>('https://f7d3-179-83-205-111.ngrok-free.app');
  const [webhookPath, setWebhookPath] = useState<string>('/rest/workflows/CYnjPJv2MF7Xmeou/run');
  const [loading, setLoading] = useState<boolean>(false);
  const [showWebhookHelp, setShowWebhookHelp] = useState<boolean>(false);
  
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
      
      // Enviar para o webhook
      await fetch(fullWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Usar no-cors para evitar problemas de CORS
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">N8N Webhook</h1>
          <p className="mt-2 text-lg text-gray-500">
            Preencha o formulário com os dados do cliente para processamento via webhook do n8n
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Formulário de Dados para N8N</CardTitle>
            <CardDescription>
              Preencha os campos abaixo com os dados do cliente e informe o webhook do n8n para processar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">URL Base do Webhook N8N</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://n8n.exemplo.com/"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Insira a URL base do ngrok (ex: https://f7d3-179-83-205-111.ngrok-free.app)
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="webhook-path">Caminho do Endpoint de Workflow</Label>
                <Input
                  id="webhook-path"
                  placeholder="/rest/workflows/SEU_ID/run"
                  value={webhookPath}
                  onChange={(e) => setWebhookPath(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Insira o caminho do workflow (ex: /rest/workflows/CYnjPJv2MF7Xmeou/run)
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm underline ml-1"
                    onClick={() => setShowWebhookHelp(!showWebhookHelp)}
                  >
                    {showWebhookHelp ? 'Esconder ajuda' : 'Ver ajuda'}
                  </Button>
                </p>
                
                {showWebhookHelp && (
                  <Alert className="mt-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Dicas para resolver o erro 404</AlertTitle>
                    <AlertDescription className="mt-2">
                      <p className="mb-2">
                        Segundo os logs do ngrok, a URL <code>/rest/workflows/CYnjPJv2MF7Xmeou/run</code> está funcionando corretamente (retornando 200 OK).
                        Tente usar esse caminho em vez de enviar para a raiz "/".
                      </p>
                      <p>
                        URL completa que será usada: <code>{getFullWebhookUrl()}</code>
                      </p>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSendToN8n)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Dados da Empresa */}
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
                    
                    {/* Dados do Representante */}
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
                  </div>
                  
                  {/* Prazos e Pagamentos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
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
                  </div>
                  
                  {/* Data do Contrato */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    ) : "Enviar para o n8n"}
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default N8nWebhook;
