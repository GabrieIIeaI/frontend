import { AxiosResponse } from "axios"

export const asyncPromiseApi = async <TData, TFilters>(
    promiseApi: (filters?: TFilters) => Promise<AxiosResponse<TData>>,
    filters?: TFilters
) => {
    try {
        const { data } = await promiseApi(filters)
        
        return data
    } catch(error: any) {
        throw new Error(error.message)
    }
}