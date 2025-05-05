import { Navigate } from 'react-router';
import Cookies from 'js-cookie';

const ProtectedRoute = ({children}) => {
  const accessToken = Cookies.get('access_token')
  const refreshToken = Cookies.get('refresh_token')

  return (<>
    {(accessToken && refreshToken) ? (
      children
    ) : ( 
      <Navigate to="/login" /> 
    )}
  </>)
}

export default ProtectedRoute