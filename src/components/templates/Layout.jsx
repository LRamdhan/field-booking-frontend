import { Outlet } from "react-router-dom"
import NavBar from "../organism/NavBar"
import Footer from "../organism/Footer"

const Layout = () => {

  return (<>
    <NavBar />
    <Outlet />
    {/* <Footer /> */}
  </>)
}

export default Layout