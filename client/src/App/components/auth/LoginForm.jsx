import React from 'react'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import {Button, Notification} from '../index'

const LoginForm = ({handleSubmit, email, password, setEmail, setPassword, error, handleChange}) => {
  return (
    <React.Fragment>
      <ValidatorForm
        onChange={handleChange}
        onSubmit={handleSubmit}>
        <div className='login-box'>
          <TextValidator
            onInput={(event) => setEmail(event.target.value)}
            value={email}
            id='outlined-email-input'
            label='Email'
            type='text'
            variant='outlined'
            name='email'
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}/>
        </div>
        <div className='login-box'>
          <TextValidator
            onInput={(event) => setPassword(event.target.value)}
            value={password}
            id='outlined-password-input'
            label='Password'
            type='password'
            variant='outlined'
            name='password'
            validators={['required']}
            errorMessages={['this field is required']}/>
        </div>
        <Button type='submit' variant='contained' color='primary'>Login</Button>
      </ValidatorForm>
      {error && <Notification
        type='error'
        text='User not found!'
      />}
    </React.Fragment>
  )
}

export default LoginForm
