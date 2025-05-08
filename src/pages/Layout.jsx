import { Outlet } from "react-router-dom"
import NavBar from "../components/organism/NavBar"
import Footer from "../components/organism/Footer"

const Layout = () => {

  return (<>
    <NavBar />
    <Outlet />
    {/* <Footer /> */}
  </>)
}

export default Layout