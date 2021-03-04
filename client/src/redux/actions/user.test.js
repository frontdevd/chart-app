import {logout, setUser} from '../reducers/userReducer'

describe('User actions test', () => {
  test('SET_USER action', () => {
    const username = 'admin@gmail.com'
    const payload = {username}
    const action = setUser(payload)
    expect(action).toEqual({
      type: 'SET_USER',
      payload: {
        username
      }
    })
  })
  test('LOGOUT action', () => {
    const action = logout()
    localStorage.removeItem('token')
    expect(action).toEqual({
      type: 'LOGOUT'
    })
  })
})