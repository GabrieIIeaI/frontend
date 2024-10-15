export interface CommonResponsePaginationApiProps <TData> {
    data: TData[]
    meta: CommonPaginationProps
}

export interface CommonPaginationProps {
    hasNextPage: boolean
    hasPreviousPage: boolean
    itemCount: number
    page: number
    pageCount: number
    take: number
}

export type CommonPaginationFilterProps = Partial<Pick<CommonPaginationProps, 'page' | 'take'>>