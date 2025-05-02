
import React, { useRef } from 'react';
import { ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { ClientFormData } from '@/types/n8nWebhook';

interface LogoUploaderProps {
  form: UseFormReturn<ClientFormData>;
  logoPreview: string | null;
  setLogoPreview: (preview: string | null) => void;
}

const LogoUploader: React.FC<LogoUploaderProps> = ({ form, logoPreview, setLogoPreview }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      // Convert to Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLogoPreview(base64String);
        form.setValue('logo', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Logo da Empresa</h3>
      
      <FormField
        control={form.control}
        name="logo"
        render={() => (
          <FormItem>
            <FormControl>
              <div 
                className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 bg-gray-50 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {logoPreview ? (
                  <div className="space-y-4 w-full flex flex-col items-center">
                    <img 
                      src={logoPreview} 
                      alt="Logo Preview" 
                      className="max-h-32 object-contain"
                    />
                    <p className="text-sm text-blue-600">Clique para alterar a imagem</p>
                  </div>
                ) : (
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="p-3 rounded-full bg-blue-50">
                      <ImageIcon className="h-8 w-8 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium">Clique para fazer upload da logo</p>
                    <p className="text-xs text-muted-foreground">SVG, PNG ou JPG (max. 5MB)</p>
                  </div>
                )}
                <Input
                  ref={fileInputRef}
                  id="logo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoChange}
                />
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default LogoUploader;
