export const generateArray = (size: number): number[] => 
    Array.from({ length: size }, (_, i) => i);

export const formatCurrency = (
    value: number,
    locale: string = 'pt-BR',
    currency: string = 'BRL'
) => 
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value)