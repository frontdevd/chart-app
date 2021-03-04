const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'

const initializeState = {
  username: '',
  isAuth: false,
}

export default function userReducer(state = initializeState, {type, payload}) {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        username: payload.username,
        isAuth: true,
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        username: '',
        isAuth: false
      }
    default:
      return state
  }
}


export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
