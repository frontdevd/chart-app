import userReducer from './userReducer'

describe('User Reducer', () => {
  test('Test SET_USER / LOGOUT', () => {
    const initializeState = {
      username: '',
      isAuth: false,
    }
    const action = {
      type: 'SET_CHART_DATA/SET_HISTORY',
      payload: {
        username: 'user@gmail.com',
        isAuth: true
      }
    }
    const newState = userReducer(initializeState, action)
    expect(newState).toEqual({
      username: '',
      isAuth: false,
    })
  })
})