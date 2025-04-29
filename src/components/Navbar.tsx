
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LucideLayoutDashboard, LucideSettings, LucideGitPullRequest } from "lucide-react";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">SaaS Hub</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="flex items-center" 
              onClick={() => navigate('/')}
            >
              <LucideLayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            
            <Button 
              variant="ghost" 
              className="flex items-center" 
              onClick={() => navigate('/settings')}
            >
              <LucideSettings className="mr-2 h-4 w-4" />
              Configurações
            </Button>
            
            <Button 
              variant="ghost" 
              className="flex items-center" 
              onClick={() => navigate('/n8n-webhook')}
            >
              <LucideGitPullRequest className="mr-2 h-4 w-4" />
              N8N Webhook
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
