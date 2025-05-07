
export interface AuditoriaFormData {
  // Entradas principais
  nome_site: string;
  pais: string;
  idioma: string;
  dominio: string;
  nicho_atuacao: string;
  servico_produto: string;
  lista_servicos: string[];
  
  // Entradas opcionais
  lista_concorrentes: string[];
  lista_palavras_estrategicas: string[];
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
