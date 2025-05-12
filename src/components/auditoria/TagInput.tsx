
import React, { useState, KeyboardEvent } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TagInputProps {
  label: string;
  value: string[];
  placeholder: string;
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
  isRequired?: boolean;
  statusIndicator?: 'success' | 'warning' | 'error';
}

const TagInput: React.FC<TagInputProps> = ({ 
  label, 
  value, 
  placeholder, 
  onAdd, 
  onRemove,
  isRequired = false,
  statusIndicator
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim()) {
        onAdd(inputValue);
        setInputValue('');
      }
    }
  };

  const handleAddClick = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  const getStatusColor = () => {
    if (!statusIndicator) return '';
    
    switch (statusIndicator) {
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-amber-600';
      case 'error':
        return 'text-red-600';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <span>{label}</span>
        {isRequired && <span className="text-red-500">*</span>}
        {statusIndicator && (
          <span className={`text-xs ml-1 ${getStatusColor()}`}>
            {statusIndicator === 'success' ? '(Completo)' : '(Incompleto)'}
          </span>
        )}
      </label>
      
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-sm"
          >
            <span>{item}</span>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-5 w-5 p-0 hover:bg-destructive/20" 
              onClick={() => onRemove(item)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={isRequired ? "border-amber-300 focus:border-amber-500" : ""}
        />
        <Button 
          type="button" 
          onClick={handleAddClick}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default TagInput;
