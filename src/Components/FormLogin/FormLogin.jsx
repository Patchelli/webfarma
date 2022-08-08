import React, { useState } from 'react';
import imgLogin from '../../img/login.svg'
import S from './FormLogin.css'


const FormLogin = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function validarDados(){
    if(userName.toLowerCase() === 'admin' && password.toLowerCase() === 'admin'){
      return console.log('Redirecionando');
    } else {
      console.log('Usuário ou senha inválida');
    }
  }

  return (
      <div className={S.contBase}>
        <img src={imgLogin} alt="Login" />
        <form className={S.contForm}>
          <article>
            <p className={S.titulo}>Olá!</p>
            <p className={S.titulo}>Seja bem vindo de volta.</p>
            <small>Faça o seu login agora</small>
          </article>
          <label htmlFor="inputUser">Usuário</label>
          <input className={S.inputs} id='inputUser' type="text" value={userName} onChange={(event => setUserName(event.target.value))}/>
          <label htmlFor="inputPassword">Senha</label>
          <input className={S.inputs} id='inputPassword' type="password" value={password} onChange={(event => setPassword(event.target.value))} />
          <input className={S.botao} type="button" value='Login' onClick={(event)=>{
          event.preventDefault()
          validarDados()
        }}/>
        </form>
      </div>
  )
}

export default FormLogin