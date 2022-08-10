import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/PageLogin/Login'
import { Cadastro } from './pages/Cadastro/Cadastro'
import { Listagem } from './pages/Cadastro/Listagem'
import { NewProduct } from './pages/NewProduct/NewProduct'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<App />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Cadastro/:id' element={<Cadastro />} />
        <Route exact path='/Cadastro' element={<NewProduct />} />
        <Route exact path='/Listagem' element={<Listagem />} />
        {/* <Route exact path='/Editar/:id' element={< />} /> */}

      </Switch>
    </BrowserRouter>
  )
}

export default Routes