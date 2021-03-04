import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Main from '../main/Main'

const DashboardLayout = () => {
  return (
    <div className='main-container'>
      <div className='content'>
        <Switch>
          <Route path='/dashboard' exact component={Main}/>
          <Redirect from='/' to='/dashboard'/>
        </Switch>
      </div>
    </div>
  )
}

export default DashboardLayout
