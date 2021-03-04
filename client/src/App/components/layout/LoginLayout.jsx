import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from '../auth/Login'

const LoginLayout = () => {
  return (
    <Switch>
      <Route path='/login' component={Login}/>
      <Redirect to='/login'/>
    </Switch>
  )
}

export default LoginLayout
