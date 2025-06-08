import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import userApi from '../api/userApi';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate()
  const accessToken = Cookies.get('access_token')
  const [isValid, setIsValid] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if(!accessToken) {
      (async () => {
        try {
          const token = await userApi.getNewToken()
          Cookies.set('access_token', token, { expires: 1 / 96 })  
          setIsValid(true)  
        } catch(err) {
          console.log(err.message);
          Cookies.remove('access_token')
          Cookies.remove('refresh_token')  
          navigate('/login', { state: { from: location } })
        }
      })()
    } else {
      setIsValid(true)
    }
  }, [])

  return (<>
    {isValid ? children : ''}
  </>)
}

export default ProtectedRoute