import React from 'react'
import imgLogin from '../../img/user.png'
import S from './FormLogin.module.css'

const FormLogin = () => {
  return (
    <div className={S.contPag}>
      <div className={S.contBase}>
        <img src={imgLogin} alt="Login" />
        <form className={S.contForm}>
          <article>
            <p className={S.titulo}>Olá!</p>
            <p className={S.titulo}>Seja bem vindo de volta.</p>
            <small>faça o seu login agora</small>
          </article>
          <label for="inputUser">Usuário</label>
          <input className={S.inputs} id='inputUser'type="text" />
          <label htmlFor="inputPassword">Senha</label>
          <input className={S.inputs} id='inputPassword' type="text" />
          <input className={S.botao} type="button" value='Login' />
        </form>
      </div>
    </div>
  )
}

export default FormLogin