import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from './authSlice'

const LoginRequired = () => {
    const access_token = useSelector(selectCurrentToken)
    const location = useLocation()
    
    return (
        access_token
        ? <Outlet/>
        : <Navigate to='/accounts/login' state={{ from: location }} replace />
    )
}
export default LoginRequired