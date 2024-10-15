import { CommonPaginationProps } from "@/common/types"

export interface PaginationProps extends Omit<CommonPaginationProps, 'itemCount' | 'take'> {
    onChangePage: (value: number) => void
    onChangeToPreviusPage: () => void
    onChangeToNextPage: () => void
}