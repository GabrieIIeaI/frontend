import { TableListProps } from "./types"

const TableList = <TData extends unknown>({
    columns,
    data,
    renderItem
}: TableListProps<TData>) => 
        <div className="flex h-full min-h-550 px-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((item, idx) => (
                            <th key={idx} scope="col" className="px-2 py-2">{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className="text-left text-gray-500 tracking-wider">
                    {
                        data.map((item, idx) =>
                            <tr key={`${idx}`} className="bg-white h-10 border-b dark:bg-gray-100 dark:border-gray-900">
                                {renderItem(item)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

export default TableList