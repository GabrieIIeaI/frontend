import { CommonPaginationFilterProps, CommonResponsePaginationApiProps } from "@/common/types"
import httpBase from "../https"
import { ProductsResponseApiProps } from "./types"

export const getAllProductsApi = async (filters?: CommonPaginationFilterProps) => 
    await httpBase.get<CommonResponsePaginationApiProps<ProductsResponseApiProps>>('Produtos', { params: filters })
