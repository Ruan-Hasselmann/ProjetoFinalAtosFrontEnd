export interface Cliente {
    id?: number
    nome: string
    cpf: string
    rg: string
    cep: string
    logradouro: string
    bairro: string
    localidade: string
    uf: string
    numeroCasa: string
    dataCobranca: string
    total: number
    celular: string
    telefone?: string
    pago?: number
    restante?: number
}