
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Form } from '@/components/ui/form';

// Custom components
import WebhookConfig from '@/components/n8n/WebhookConfig';
import LogoUploader from '@/components/n8n/LogoUploader';
import CompanyDataForm from '@/components/n8n/CompanyDataForm';
import RepresentativeDataForm from '@/components/n8n/RepresentativeDataForm';
import DeadlinesForm from '@/components/n8n/DeadlinesForm';
import PaymentsForm from '@/components/n8n/PaymentsForm';
import ContractDateForm from '@/components/n8n/ContractDateForm';

// Custom hook
import { useN8nWebhook } from '@/hooks/useN8nWebhook';

const N8nWebhook: React.FC = () => {
  const {
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
  } = useN8nWebhook();

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
              <WebhookConfig 
                webhookUrl={webhookUrl}
                setWebhookUrl={setWebhookUrl}
                webhookPath={webhookPath}
                setWebhookPath={setWebhookPath}
                showWebhookHelp={showWebhookHelp}
                setShowWebhookHelp={setShowWebhookHelp}
                getFullWebhookUrl={getFullWebhookUrl}
              />
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSendToN8n)} className="space-y-6">
                  <LogoUploader 
                    form={form} 
                    logoPreview={logoPreview} 
                    setLogoPreview={setLogoPreview} 
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Company & Representative Data */}
                    <CompanyDataForm form={form} />
                    <RepresentativeDataForm form={form} />
                  </div>
                  
                  {/* Deadlines & Payments */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <DeadlinesForm form={form} />
                    <PaymentsForm form={form} />
                  </div>
                  
                  {/* Contract Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ContractDateForm form={form} />
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
