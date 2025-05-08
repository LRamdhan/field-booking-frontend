import { css } from "@emotion/react"
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <nav css={css`background-color: var(--blur-color); padding: 15px 0; height: max-content; text-align: center;`}>
      <Link to="/lapang">Lapang</Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Link to="/">Dashboard</Link>
    </nav>
  )
}

export default NavBar