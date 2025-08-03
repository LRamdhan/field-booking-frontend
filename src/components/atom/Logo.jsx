import { css } from '@emotion/react'
import logoImg from '/img/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImg} alt="LapangKu" css={css`width: 140px;`} />
    </Link>
  )
}

export default Logo