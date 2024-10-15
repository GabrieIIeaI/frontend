import { generateArray } from "@/utils"
import { PaginationProps } from "./types"

const Pagination = ({
    hasNextPage,
    hasPreviousPage,
    page,
    pageCount,
    onChangeToNextPage,
    onChangeToPreviusPage,
    onChangePage,
}: PaginationProps) =>
    <div className="flex flex-row space-x-10 justify-center my-10 bg-black-200">
        <button onClick={onChangeToPreviusPage} disabled={!hasPreviousPage}> 
            {'<='} 
        </button>

        <div className="flex flex-row space-x-2">
            {generateArray(pageCount)
                .map(i => 
                    <button 
                        key={i}
                        className={`${page === (i + 1) ? 'font-bold text-orange-500' : 'font-normal'}`} 
                        onClick={() => onChangePage(i + 1)}
                    >
                        {i + 1}
                    </button>
                )
            }
        </div>

        <button onClick={onChangeToNextPage} disabled={!hasNextPage}> 
            {'=>'}
        </button>
    </div>

export default Pagination