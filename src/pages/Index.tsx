
import React from 'react';
import Navbar from '@/components/Navbar';
import SaaSCard from '@/components/SaaSCard';
import { saasTools } from '@/data/toolsData';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Ferramentas SaaS
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Explore nossas ferramentas para potencializar seu negócio e automatizar processos
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saasTools.map((tool) => (
            <SaaSCard 
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              route={tool.route}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
