import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../../Components/ProductCard/ProductCard'
import { getProducts } from '../../Api/getAll'
import s from './Listagem.module.css'

export const Listagem = () => {

    const [products, setProducts] = useState([])
    const [productsShown, setProductsShown] = useState([])
    const [input, setInput] = useState('')

    function handleInput(target) {
        const value = target.value
        setInput(value)
    }

    async function req() {
        const resp = await getProducts()
        setProducts(resp)
        setProductsShown(resp)
    }

    useEffect(() => {
        console.log('a')
        req()
    }, [])

    return (
        <main className={s.container}>

            <h1>Medicamentos</h1>

            <div className={s.upperSection}>
                <div className={s.searchSection}>
                    <input type='text' placeholder='Pesquisar por nome' value={input} onChange={({ target }) => {
                        handleInput(target)
                        console.log(input)
                    }} />
                    <button onClick={() => {
                        input.length == 0 ? setProductsShown(products) : setProductsShown(products.filter(el => el.name.toLowerCase().includes(input.toLowerCase())))

                    }}>Pesquisar</button>
                </div>
                <Link to='/Cadastro'>Novo Produto</Link>
            </div>

            <div className={s.test}>
                <div className={s.fields}>
                    <p className={s.name}>Nome</p>
                    <p className={s.brand}>Marca</p>
                    <p className={s.quantity}>Quantidade</p>
                    <p className={s.value}>Valor</p>
                    <p className={s.band}>Tarja</p>
                    <p className={s.btn}></p>
                </div>

                <div className={s.gridContainer}>

                    {
                        !!productsShown && productsShown.map((el, i) => {
                            return (<ProductCard key={i} data={el} />)
                        })
                    }
                </div>
            </div>
        </main>
    )
}
