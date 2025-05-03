import { css } from "@emotion/react"
import { Flex } from "antd";
import LoginCard from "../components/molecules/LoginCard";

const loginPageStyle = css`
  width: 100vw;
  height: 100vh;
  padding: 12px;
  @media(max-height: 500px) {
    justify-content: flex-start;
    padding: 30px 12px;
  }
`

const LoginPage = () => {
  return (
    <Flex vertical justify="center" component="main" css={loginPageStyle}>
      <div css={css`width: 100%; height: max-content;`}>
        <LoginCard />
      </div>
    </Flex>
  )
}

export default LoginPage