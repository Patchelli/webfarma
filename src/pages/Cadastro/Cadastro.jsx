import React from 'react'
import s from './Cadastro.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Fieldset } from '../../Components/Fieldset/Fieldset'
import { deleteProduct, getProductById, putProduct } from '../../Api/getAll'

export const Cadastro = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        name: '',
        brand: '',
        quantity: 0,
        value: 0,
        blackBand: 0,
        redBand: 0,
        yellowBand: 0
    })

    const [initialBand, setInitialBand] = useState('')

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

    async function req() {
        const resp = await getProductById(params.id);
        setInfo(resp);
    }

    useEffect(() => {
        req()
    }, [])

    const HandleDelete = (id) => {
        deleteProduct(id)
        navigate('/Listagem')
    }

    const HandleUpdate = (id, info) => {
        putProduct(id, info)
        navigate('/Listagem')
    }

    return (
        <main className={s.container}>

            <form className={s.form}>
                <h1>Edit Product: {info.name}</h1>

                <Fieldset name='name' label='Nome' type='text' value={info.name} keyState='name' func={HandleInput} />
                <Fieldset name='brand' label='Marca' type='text' value={info.brand} keyState='brand' func={HandleInput} />
                <Fieldset name='quantity' label='Quantidade' type='number' value={info.quantity} keyState='quantity' func={HandleInput} />
                <Fieldset name='value' label='Valor' type='number' value={info.value} keyState='value' func={HandleInput} />

                <div className={s.lowerSection}>
                    <div className={s.select}>
                        <p>Tarja:</p>

                        <select name="bands" id="bands" onChange={({ target }) => HandleRadio(target)}
                            defaultValue={initialBand}>

                            <option value="blackBand">Preta</option>
                            <option value="redBand">Vermelha</option>
                            <option value="yellowBand">Amarela</option>
                        </select>


                    </div>
                    <div className={s.btnContainer}>
                        <button onClick={(event) => {
                            event.preventDefault()
                            HandleUpdate(params.id, info)
                        }}>Atualizar</button>

                        <button onClick={(event) => {
                            event.preventDefault()
                            HandleDelete(params.id)
                        }}>Deletar</button>



                    </div>
                </div>
            </form>

        </main>
    )
}
