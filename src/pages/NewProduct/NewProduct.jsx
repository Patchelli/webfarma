import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Fieldset } from '../../Components/Fieldset/Fieldset'
import { postNewProduct } from '../../Api/getAll'
import s from './NewProduct.module.css'
import { useNavigate } from 'react-router-dom'

export const NewProduct = () => {
    const navigate = useNavigate()
    const [band, setBand] = useState()
    const [info, setInfo] = useState({
        name: '',
        brand: '',
        quantity: 0,
        value: 0,
        blackBand: 0,
        redBand: 0,
        yellowBand: 0
    })

    function HandleInput(target, key) {
        const value = target.value;
        setInfo({ ...info, [key]: value });
    }

    function HandleRadio(target) {
        const value = target.value
        switch (value) {
            case 'blackBand':
                setInfo({ ...info, blackBand: 1, redBand: 0, yellowBand: 0 });
                break;
            case 'redBand':
                setInfo({ ...info, blackBand: 0, redBand: 1, yellowBand: 0 });
                break;
            case 'yellowBand':
                setInfo({ ...info, blackBand: 0, redBand: 0, yellowBand: 1 });
                break;
        }
    }

    useEffect(() => {

    }, [])

    return (
        <main className={s.container}>

            <form action="">
                <h1>Product</h1>
                <Fieldset name='name' label='Nome' type='text' value={info.name} keyState='name' func={HandleInput} />
                <Fieldset name='brand' label='Marca' type='text' value={info.brand} keyState='brand' func={HandleInput} />
                <Fieldset name='quantity' label='Quantidade' type='number' value={info.quantity} keyState='quantity' func={HandleInput} />
                <Fieldset name='value' label='Valor' type='number' value={info.value} keyState='value' func={HandleInput} />

                <div className={s.lowerSection}>
                    <div className={s.select}>
                        <p>Tarja:</p>


                        <select name="bands" id="bands" onChange={({ target }) => HandleRadio(target)} required>
                            <option value=''>-</option>
                            <option value="blackBand">Preta</option>
                            <option value="redBand">Vermelha</option>
                            <option value="yellowBand">Amarela</option>
                        </select>

                    </div>

                    <div className={s.btnContainer}>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                if (info.blackBand == 0 && info.redBand == 0 && info.yellowBand == 0) setBand(true)
                                else {
                                    postNewProduct(info)
                                    setBand()
                                    navigate('/Listagem')
                                }
                                console.log(info)
                            }}
                        >Cadastrar</button>

                    </div>
                </div>



                <div>
                    {
                        !!band && <p className={s.errorMsg}>Favor preencher todos os campos</p>
                    }
                </div>
            </form>
        </main>
    )
}
