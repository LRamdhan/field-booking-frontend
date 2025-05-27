import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import userApi from '../api/userApi';

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate()
  const accessToken = Cookies.get('access_token')

  if(!accessToken) {
    (async () => {
      try {
        const token = await userApi.getNewToken()
        Cookies.set('access_token', token, { expires: 1 / 96 })    
      } catch(err) {
        console.log(err.message);
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')  
        navigate('/login')
      }
    })()
  }

  return (<>
    {children}
  </>)
}

export default ProtectedRoute