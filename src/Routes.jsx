import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Home from './pages/Home'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Headers />
            <Switch>
                <Route to='/' element={<Home />} />
                <Route to='/login' element={<Login />} />
                <Route to='/products' element={<Products />} />
                <Route to='/newProduct' element={<Form />} />
                <Route to='/editProduct/:id' element={<Form />} />
            </Switch>
        </BrowserRouter>
    )
}
