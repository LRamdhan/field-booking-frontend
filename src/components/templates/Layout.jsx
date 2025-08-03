import { Outlet } from "react-router-dom"
import NavBar from "../organism/NavBar"
import Footer from "../organism/Footer"
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (<>
    <NavBar />
    <Outlet />
    {/* <Footer /> */}
  </>)
}

export default Layout