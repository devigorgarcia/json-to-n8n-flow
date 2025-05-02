
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface WebhookConfigProps {
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
  webhookPath: string;
  setWebhookPath: (path: string) => void;
  showWebhookHelp: boolean;
  setShowWebhookHelp: (show: boolean) => void;
  getFullWebhookUrl: () => string;
}

const WebhookConfig: React.FC<WebhookConfigProps> = ({
  webhookUrl,
  setWebhookUrl,
  webhookPath,
  setWebhookPath,
  showWebhookHelp,
  setShowWebhookHelp,
  getFullWebhookUrl
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="webhook-url">URL Base do Webhook N8N</Label>
        <Input
          id="webhook-url"
          placeholder="https://n8n.exemplo.com/"
          value={webhookUrl}
          onChange={(e) => setWebhookUrl(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          Insira a URL base do ngrok (ex: https://bb10-179-83-205-111.ngrok-free.app)
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="webhook-path">Caminho do Endpoint de Webhook</Label>
        <Input
          id="webhook-path"
          placeholder="/webhook-test/111e73c7-b589-4521-a77a-00e06b0e56cb"
          value={webhookPath}
          onChange={(e) => setWebhookPath(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          Insira o caminho do webhook (ex: /webhook-test/111e73c7-b589-4521-a77a-00e06b0e56cb)
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
            <AlertTitle>Dicas para configuração do webhook</AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-2">
                URL completa que será usada: <code>{getFullWebhookUrl()}</code>
              </p>
              <p>
                Certifique-se de que o caminho do webhook está configurado corretamente no n8n.
              </p>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default WebhookConfig;
