
import React from 'react';
import { 
  LucideWebhook, 
  LucideBarChart, 
  LucideMailOpen, 
  LucideUsers, 
  LucideClipboardList, 
  LucideGitBranch 
} from 'lucide-react';

export interface SaaSToolType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
}

export const saasTools: SaaSToolType[] = [
  {
    id: 'n8n-webhook',
    title: 'N8N Webhook',
    description: 'Processe dados JSON através de um webhook do N8N para automação de fluxos',
    icon: <LucideWebhook size={24} />,
    route: '/n8n-webhook'
  },
  {
    id: 'auditoria',
    title: 'Auditoria Gratuita',
    description: 'Receba uma análise detalhada do seu site ou negócio',
    icon: <LucideBarChart size={24} />,
    route: '/auditoria'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Gerencie campanhas de email e acompanhe métricas de engajamento',
    icon: <LucideMailOpen size={24} />,
    route: '/email-marketing'
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Gerencie seus clientes e oportunidades de negócio',
    icon: <LucideUsers size={24} />,
    route: '/crm'
  },
  {
    id: 'tasks',
    title: 'Gerenciador de Tarefas',
    description: 'Organize fluxos de trabalho e acompanhe o progresso das tarefas',
    icon: <LucideClipboardList size={24} />,
    route: '/tasks'
  },
  {
    id: 'automations',
    title: 'Automações',
    description: 'Automatize processos repetitivos e integre suas ferramentas',
    icon: <LucideGitBranch size={24} />,
    route: '/automations'
  }
];
