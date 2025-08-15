import Cookies from 'js-cookie';
import NavbarSigned from './NavbarSigned';
import NavbarUnsigned from './NavbarUnsigned';

const NavBar = () => {
  const refreshToken = Cookies.get('refresh_token')

  return (
    <>
      {refreshToken ? (
        <NavbarSigned />
      ) : (
        <NavbarUnsigned />
      )}
    </>
  )
}

export default NavBar