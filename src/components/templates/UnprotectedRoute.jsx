import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

const UnprotectedRoute = ({children}) => {
  const refreshToken = Cookies.get('refresh_token')

  return (
    <>
      {refreshToken ? (
        <Navigate to="/" />
      ) : (
        children
      )}
    </>
  )
}

export default UnprotectedRoute