'use client'

import { useProducts } from "@/hooks/useProducts"
import { formatCurrency } from "@/utils"
import { HeaderList, TableList, Pagination } from "../../components"

const HomePage = () => {
    const {
        response,
        error,
        isLoading,
        isValidating,
        take,
        onChangeToNextPage,
        onChangeToPreviusPage,
        onChangePage,
        onChangeTake
    } = useProducts()

    return (
        <div className="flex-1 content-center justify-center">

            <HeaderList
                take={take}
                onChangeTake={onChangeTake}
                itemCount={response.meta.itemCount}
            />

            {((isLoading || isValidating) && !error) && <p>Loading...</p>}

            {(!isLoading && !error && !isValidating) &&
                <TableList
                    data={response.data}
                    columns={['Nº', 'Nome', 'Preço']}
                    renderItem={item => (
                        <>
                            <td key={item.id}> {item.id} </td>
                            <td key={item.id}> {item.name} </td>
                            <td key={item.id}> {formatCurrency(item.price)} </td>
                        </>
                    )}
                />
            }

            <Pagination
                {...response.meta}
                onChangePage={onChangePage}
                onChangeToNextPage={onChangeToNextPage}
                onChangeToPreviusPage={onChangeToPreviusPage}
            />
        </div>
    )
}

export default HomePage