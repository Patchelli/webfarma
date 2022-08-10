import React, { useState } from 'react';
import imgLogin from '../../img/login.png';
import './FormLogin.css';
import { Link as Links, useNavigate } from 'react-router-dom';


const FormLogin = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function validarDados() {
    if (userName.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
      navigate('/Cadastro')
    } else {
      console.log('Usuário ou senha inválida');
    }
  }

  return (
    <div className='contBase'>
      <img src={imgLogin} alt="Login" />
      <form className='contForm'>
        <article>
          <p className='titulo'>Olá!</p>
          <p className='titulo'>Seja bem vindo de volta.</p>
        </article>
        <label htmlFor="inputUser">Usuário</label>
        <input className='inputs' id='inputUser' type="text" value={userName} onChange={(event => setUserName(event.target.value))} />
        <label htmlFor="inputPassword">Senha</label>
        <input className='inputs' id='inputPassword' type="password" value={password} onChange={(event => setPassword(event.target.value))} />

        <input className='button' type="button" value='Login' onClick={(event) => {
          event.preventDefault()
          validarDados()
        }} />
        x
      </form>
    </div>
  )
}

export default FormLogin