import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../../redux/actions/user'
import {Card, CardContent, LoginAccessInfo, LoginForm} from '../index'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (email === 'user@gmail.com' && password === 'user') {
      dispatch(login(email, password))
    }

    if (email === 'admin@gmail.com' && password === 'admin') {
      dispatch(login(email, password))
    }
    setError(true)
  }

  const handleChange = () => setError(false)

  return (
    <div className='login-wrapper'>
      <LoginAccessInfo/>
      <Card>
        <CardContent>
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            handleSubmit={handleSubmit}
            handleChange={handleChange}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
