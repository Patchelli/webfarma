import axios from 'axios';

const api = axios.create({
    baseURL: "https://farmaapi2.herokuapp.com",
})

export const getProducts = async () => {
    const resp = await api.get('/product')
    return resp.data;
}

export const putProduct = async (id, body) => {
    const resp = await inst.put(`/product/${id}`, body)
    console.log(resp)
    return resp.data.msg
}