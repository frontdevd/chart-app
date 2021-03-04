import {useEffect, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {DashboardLayout, Header, LoginLayout} from './components'
import {auth} from '../redux/actions/user'
import {logout} from '../redux/reducers/userReducer'
import '../assets/app.scss'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const logoutHandler = () => dispatch(logout())

  useEffect(() => {
    dispatch(auth())
  }, [isAuth, dispatch])

  return (
    <Fragment>
      <Header onLogOut={logoutHandler} isAuth={isAuth}/>
      {isAuth ? <DashboardLayout/> : <LoginLayout/>}
    </Fragment>
  )
}

export default App
