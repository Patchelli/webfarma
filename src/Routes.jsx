import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Products from './pages/Products'

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route path='/' element={<App/>}/>
        <Route path='/produtos/' element={<Products/>}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes