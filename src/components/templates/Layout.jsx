import { Outlet } from "react-router-dom"
import NavBar from "../organism/NavBar"
import Footer from "../organism/Footer"
import { useLocation } from 'react-router-dom';
import { css } from "@emotion/react";

const Layout = () => {
  const location = useLocation();

  return (<>
    <NavBar />
    <main css={css`min-height: calc(100vh - 58px); padding-bottom: 65px;`}>
      <Outlet />
    </main>
    <Footer />
  </>)
}

export default Layout