import Cookies from 'js-cookie';

const Root = ({LandingPage, Dashboard}) => {
  const refreshToken = Cookies.get('refresh_token')

  return (
    <>
      {refreshToken ? (
        <Dashboard />
      ) : (
        <LandingPage />
      )}
    </>
  )
}

export default Root