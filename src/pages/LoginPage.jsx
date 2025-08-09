import { css } from "@emotion/react"
import { Flex } from "antd";
import LoginCard from "../components/molecules/LoginCard";
import { Helmet } from 'react-helmet';

const loginPageStyle = css`
  width: 100%;
  height: calc(100vh - 58px);
  padding: 12px;

  @media(max-height: 670px) {
    display: block;
    height: max-content;
    padding: 50px 12px;
  }
`

const LoginPage = () => {
  return (<>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <Flex vertical justify="center" component="main" css={loginPageStyle}>
      <div css={css`width: 100%; height: max-content;`}>
        <LoginCard />
      </div>
    </Flex>
  </>)
}

export default LoginPage