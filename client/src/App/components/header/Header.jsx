import React from 'react'
import {AppBar, Toolbar, Button, IconButton} from '../index'

const Header = ({isAuth, onLogOut}) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'>Chart app</IconButton>

        {isAuth && <Button
          color='inherit'
          onClick={onLogOut}>logout</Button>}
      </Toolbar>
    </AppBar>
  )
}

export default Header