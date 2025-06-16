import { css } from "@emotion/react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link, useSearchParams } from "react-router-dom"

const TemporaryNavbar = () => {
  return (
    <nav css={css`background-color: var(--blur-color); padding: 15px 0; height: max-content; text-align: center;`}>
      <Link to="/lapang">Lapang</Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Link to="/login">Login</Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Link to="/register">Register</Link>
    </nav>
  )
}

const LandingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(encodeURI('http://localhost:3000/lapang'));


  // useEffect(() => {
  //   setSearchParams({ callbackUrl: encodeURI('http://localhost:3000/lapang') });
  // }, [])
  
  // console.log(searchParams.get('callbackUrl'));


  return (<>
    <Helmet>
      <title>FieldBooking</title>
    </Helmet>
    <TemporaryNavbar />
    <h1>Landing Page</h1>
  </>)
}

export default LandingPage