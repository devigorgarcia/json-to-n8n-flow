
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">Página não encontrada</p>
        <p className="text-gray-500 mt-2 mb-8">A página que você está procurando não existe ou foi movida.</p>
        <Button 
          onClick={() => navigate('/')}
          size="lg"
        >
          Voltar para a página inicial
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
