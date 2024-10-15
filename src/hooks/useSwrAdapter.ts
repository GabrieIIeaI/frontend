import { asyncPromiseApi } from '@/common'
import { AxiosResponse } from 'axios'
import useSWR from 'swr'

export const useSwrAdapter = <TData, TFilters>(key: string, fetcher: (filters?: TFilters) => Promise<AxiosResponse<TData>>, filters?: TFilters) => {
    const { 
        data, 
        ...hookAdapter 
    } = useSWR(
        [key, filters], 
        () => asyncPromiseApi(fetcher, filters),
    )

    const defaultData: TData = {
        data: [],
        meta: {
            hasNextPage: false,
            hasPreviusPage: false,
            itemCount: 0,
            page: 0,
            pageCount: 0,
            take: 0
        }
    } as TData

    return {
        ...hookAdapter,
        response: data ?? defaultData,
    }
}