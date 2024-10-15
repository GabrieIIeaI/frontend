/**
 * Função que gera um array baseado na quantidade passada
 * @param size Tamanho do array que será gerado
 * @returns Um array com os números como valores
 */
export const generateArray = (size: number): number[] => 
    Array.from({ length: size }, (_, i) => i);

/**
 * Função que transforma valores em dinheiro dependendo do país e moeda
 * @param value Valor que será transformado
 * @param locale País a qual o valor pertence
 * @param currency Tipo de moeda que o valor será convertido
 * @returns Uma string com o formato da moeda
 */
export const formatCurrency = (
    value: number,
    locale: string = 'pt-BR',
    currency: string = 'BRL'
) => 
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value)