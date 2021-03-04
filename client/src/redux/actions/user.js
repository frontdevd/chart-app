import {setUser} from '../reducers/userReducer'

export const login = username => {
  return async dispatch => {
    try {
      const token = JSON.stringify({username})
      localStorage.setItem('token', token)
      dispatch(setUser({username}))
    } catch (e) {
      localStorage.removeItem('token')
      console.log('login error', e)
    }
  }
}

export const auth = () => {
  return async dispatch => {
    try {
      const getToken = localStorage.getItem('token')
      dispatch(setUser(JSON.parse(getToken)))
    } catch (e) {
      localStorage.removeItem('token')
      console.log('auth error', e)
    }
  }
}

