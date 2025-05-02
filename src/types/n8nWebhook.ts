
// Interface for the client form data
export interface ClientFormData {
  nome_cliente: string;
  empresa_nome: string;
  empresa_endereco: string;
  empresa_cnpj: string;
  representante_nome: string;
  representante_estado_civil: string;
  representante_cpf: string;
  representante_endereco: string;
  representante_telefone: string;
  entrada_prazo: string;
  desenvolvimento_prazo: string;
  revisao_prazo: string;
  pagamento_valor: string;
  pagamento_texto: string;
  qtde_parcelamento: string;
  quantidade_parcelamento_texto: string;
  valor_parcela: string;
  valor_parcela_texto: string;
  contrato_dia: string;
  contrato_mes: string;
  qtde_parcelamento_texto: string;
  logo: string | null;
}

// Default values for the form
export const defaultValues: ClientFormData = {
  nome_cliente: "Empresa ABC Ltda",
  empresa_nome: "Empresa ABC Ltda",
  empresa_endereco: "Av. Paulista, 1000, Bela Vista, São Paulo - SP, CEP: 01310-100",
  empresa_cnpj: "82732340000171",
  representante_nome: "João da Silva",
  representante_estado_civil: "casado",
  representante_cpf: "71469789078",
  representante_endereco: "Rua das Flores, 123, Jardim Europa, São Paulo - SP, CEP: 01456-000",
  representante_telefone: "(11) 98765-4321",
  entrada_prazo: "5",
  desenvolvimento_prazo: "20",
  revisao_prazo: "5",
  pagamento_valor: "6.000,00",
  pagamento_texto: "seis mil reais",
  qtde_parcelamento: "6",
  quantidade_parcelamento_texto: "seis",
  valor_parcela: "1.000,00",
  valor_parcela_texto: "mil reais",
  contrato_dia: "29",
  contrato_mes: "abril",
  qtde_parcelamento_texto: "seis",
  logo: null
};
