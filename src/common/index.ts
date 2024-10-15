import { AxiosResponse } from "axios"

/**
 * Função que é responsável por receber uma chamada API e retornar o dada
 * - Ajuda a não repassar dados que não precisam ser usados no front
 * @param promiseApi Função que realiza a chamada API
 * @param filters Filtros para a chamada caso existam
 * @returns Retorna os dados da chamada API contendo apenas o data
 */
export const asyncPromiseApi = async <TData, TFilters>(
    promiseApi: (filters?: TFilters) => Promise<AxiosResponse<TData>>,
    filters?: TFilters
) => {
    try {
        const { data } = await promiseApi(filters)
        
        return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(error: any) {
        throw new Error(error.message)
    }
}