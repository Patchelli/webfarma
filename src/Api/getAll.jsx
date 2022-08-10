import axios from 'axios';

const api = axios.create({
    baseURL: "https://farmaapi2.herokuapp.com",
})

export const getProducts = async () => {
    const resp = await api.get('/product')
    return resp.data;
}

export const putProduct = async (id, body) => {
    const resp = await api.put(`/product/${id}`, body)
    console.log(resp)
}

export const postNewProduct = async (body) => {
    const resp = await api.post(`/product`, body)
}

export const deleteProduct = async (id) => {
    const resp = await api.delete(`/product/${id}`)
}