import { HeaderlistProps } from "./types"

const HeaderList = ({
    take,
    itemCount,
    onChangeTake,
}: HeaderlistProps) => 
    <div className="flex flex-row justify-between mx-5 my-2">
        <h1 className="text-2xl font-bold text-left">Listagem de produtos</h1>

        <div className="flex flex-row space-x-10 justify-center content-center">
            <div className="flex flex-row space-x-5">
                <p className="text-sm">Quantidade de itens por página: </p>
                <select value={take} onChange={e => onChangeTake(Number(e.target.value))}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={16}>16</option>
                    <option value={30}>30</option>
                </select>
            </div>
            <p className="text-sm"> Total de produtos: {itemCount} </p>
        </div>
    </div>

export default HeaderList