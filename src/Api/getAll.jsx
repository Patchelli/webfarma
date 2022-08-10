import axios from 'axios';

const api = axios.create({
    baseURL: "https://farmaapi2.herokuapp.com",
})

export const getProducts = async () => {
    const resp = await api.get('/product')
    return resp.data;
}

export const putProduct = async (id, body) => {
    await api.put(`/product/${id}`, body)

}

export const postNewProduct = async (body) => {
    await api.post(`/product`, body)
}

export const deleteProduct = async (id) => {
    await api.delete(`/product/${id}`)
} 