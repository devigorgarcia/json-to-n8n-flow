
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
          <p className="mt-2 text-lg text-gray-500">
            Gerencie as configurações da sua aplicação
          </p>
        </div>
        
        <Tabs defaultValue="geral" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="integracao">Integrações</TabsTrigger>
            <TabsTrigger value="conta">Conta</TabsTrigger>
          </TabsList>
          
          <TabsContent value="geral">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
                <CardDescription>
                  Defina as configurações básicas da aplicação
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="app-name">Nome da Aplicação</Label>
                  <Input id="app-name" defaultValue="SaaS Hub" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <select 
                    id="timezone" 
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="America/Sao_Paulo"
                  >
                    <option value="America/Sao_Paulo">America/Sao_Paulo (GMT-3)</option>
                    <option value="America/New_York">America/New_York (GMT-4)</option>
                    <option value="Europe/London">Europe/London (GMT+1)</option>
                  </select>
                </div>
                
                <Button className="w-full">Salvar Configurações</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integracao">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Integrações</CardTitle>
                <CardDescription>
                  Configure as integrações com outras plataformas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="n8n-url">URL do N8N</Label>
                  <Input id="n8n-url" placeholder="https://n8n.exemplo.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <Input id="api-key" type="password" placeholder="••••••••••••••••" />
                </div>
                
                <Button className="w-full">Salvar Configurações</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="conta">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Conta</CardTitle>
                <CardDescription>
                  Gerencie as configurações da sua conta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" defaultValue="usuario@exemplo.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" defaultValue="Usuário Exemplo" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Nova Senha</Label>
                  <Input id="password" type="password" />
                </div>
                
                <Button className="w-full">Atualizar Conta</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
