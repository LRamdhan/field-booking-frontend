import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie"

const OauthPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get('access_token')
  const refreshToken = queryParams.get('refresh_token')
  const redirectUrl = queryParams.get('redirect')

  // if token exists
  if(accessToken && refreshToken) {
    Cookies.set('access_token', accessToken, { expires: 1 / 96 })
    Cookies.set('refresh_token', refreshToken, { expires: 30 })
  }

  return (
    <>
      {
        redirectUrl ? (
          <Navigate to={redirectUrl} replace={true} />
          ) : (
          <Navigate to={'/'} replace={true} />
        )
      }
    </>
  )
}

export default OauthPage