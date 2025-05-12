
export interface AuditoriaFormData {
  // Entradas principais
  nome_site: string;
  pais: string;
  idioma: string;
  dominio: string;
  nicho_atuacao: string;
  servico_produto: string;
  lista_servicos: string[];
  
  // Entradas obrigatórias (changed from optional)
  lista_concorrentes: string[];
  lista_palavras_estrategicas: string[];
}

export interface AuditoriaFormSettings {
  webhook_url: string;
}

export const defaultValues: AuditoriaFormData = {
  nome_site: "",
  pais: "Brasil",
  idioma: "pt",
  dominio: "",
  nicho_atuacao: "",
  servico_produto: "",
  lista_servicos: [],
  lista_concorrentes: [],
  lista_palavras_estrategicas: []
};

export const defaultSettings: AuditoriaFormSettings = {
  webhook_url: "https://n8n-hooks.studioartemis.co/webhook-test/f368ba4e-5bad-4a56-83c3-459cf572fbbd"
};
