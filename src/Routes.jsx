import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<App />} />
        <Route exact path='/login' component={<Login />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes