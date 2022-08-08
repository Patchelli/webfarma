import React from 'react'
import FormLogin from '../../Components/FormLogin/FormLogin'
import S from './Login.module.css'

const PageLogin = () => {
  return (
    <div className={S.container}>
        <FormLogin />
    </div>
  )
}

export default PageLogin