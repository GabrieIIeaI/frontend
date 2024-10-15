import { CommonPaginationFilterProps } from "@/common/types"
import { useSwrAdapter } from "./useSwrAdapter"
import { getAllProductsApi } from "@/services/products"
import { useState } from "react"

export const KEY = '/Products'
export const useProducts = () => {
    const [filters, setFilter] = useState<CommonPaginationFilterProps>({
        page: 1,
        take: 16
    })
    
    const hookAdapter = useSwrAdapter(
        KEY,
        getAllProductsApi,
        filters,
    )
    
    const onChangeFilterByProps = <TData extends CommonPaginationFilterProps, TKey extends keyof TData>(key: TKey) =>
        (value: TData[TKey]) =>
            setFilter(curr => ({
                ...curr,
                [key]: value
            }))
    
    const onChangeTake = onChangeFilterByProps('take')

    const onChangeToNextPage = 
        () => hookAdapter.response.meta.hasNextPage && onChangeFilterByProps('page')(hookAdapter.response.meta.page + 1)

    const onChangeToPreviusPage = 
        () => hookAdapter.response.meta.hasPreviousPage && onChangeFilterByProps('page')(hookAdapter.response.meta.page - 1)

    const onChangePage = onChangeFilterByProps('page')
    
    return {
        ...hookAdapter,
        ...filters,
        onChangeToNextPage,
        onChangeToPreviusPage,
        onChangePage,
        onChangeTake
    }
}