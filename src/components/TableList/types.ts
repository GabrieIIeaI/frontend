import React from "react"

export interface TableListProps<TData> {
    columns: string[]
    data: TData[]
    renderItem: (data: TData) => React.ReactElement | React.ReactElement[]
}