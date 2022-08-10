import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/PageLogin/Login'
import Cadastro from './pages/Cadastro'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<App />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Cadastro' element={<Cadastro />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes