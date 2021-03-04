import React from 'react'
import {Alert, AlertTitle} from '../index'

export const Notification = ({type, text}) => {
  return (
    <Alert severity={type}>
      <AlertTitle>{text}</AlertTitle>
    </Alert>
  )
}

