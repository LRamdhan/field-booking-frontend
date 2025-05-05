import { Button } from "antd"
import { FcGoogle } from "react-icons/fc"
import { css } from "@emotion/react"
import { BACKEND_API } from "../../config/env"

const GoogleAuthButton = () => {
  return (
    <Button size="large" href={BACKEND_API + '/users/login/google'} icon={<FcGoogle />} css={css`width: 100%;`}>Google</Button> 
  )
}

export default GoogleAuthButton