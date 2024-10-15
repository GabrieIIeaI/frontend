import axios from "axios";

/**
 * Função responsável por definir a baseURL para todas as requisições via API
 */
const httpBase = axios.create({
    baseURL: 'http://localhost:3001/',
})

export default httpBase