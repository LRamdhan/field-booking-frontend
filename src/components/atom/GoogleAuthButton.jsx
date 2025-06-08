import { Button } from "antd"
import { FcGoogle } from "react-icons/fc"
import { css } from "@emotion/react"
import { BACKEND_API } from "../../config/env"
import { useLocation } from "react-router-dom"

const GoogleAuthButton = () => {
  const location = useLocation();

  return (
    <Button size="large" href={BACKEND_API + `/users/login/google${location.state?.from ? `?from=${encodeURIComponent(location.state.from)}` : ''}`} icon={<FcGoogle />} css={css`width: 100%; font-size: 15px; color: var(--text-color);`}>Google</Button> 
  )
}

export default GoogleAuthButton