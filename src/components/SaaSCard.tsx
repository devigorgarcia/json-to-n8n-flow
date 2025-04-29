
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SaaSCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
}

const SaaSCard: React.FC<SaaSCardProps> = ({ id, title, description, icon, route }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant="outline" 
          onClick={() => navigate(route)}
        >
          Acessar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SaaSCard;
