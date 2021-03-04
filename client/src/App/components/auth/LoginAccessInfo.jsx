import React from 'react'
import {List, Notification, Typography} from '../index'

const LoginAccessInfo = () => {
  return (
    <List component='div'>
      <Typography variant='h4'>Please try with this access to see demo version:</Typography>
      <Notification type='info' text='Email: admin@gmail.com, Password: admin'/>
      <Notification type='info' text='Email: user@gmail.com, Password: user'/>
    </List>
  )
}

export default LoginAccessInfo
