import { css } from "@emotion/react"
import RegisterCard from "../components/molecules/RegisterCard";
import { Helmet } from 'react-helmet';

const registerPageStyle = css`
  width: 100%;
  padding: 50px 12px; 
  @media(min-height: 917px) {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 30px 12px;
  }
`

const RegisterPage = () => {
  return (<>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <main css={registerPageStyle}>
      <div css={css`width: 100%; height: max-content;`}>
        <RegisterCard />
      </div>
    </main>
  </>)
}

export default RegisterPage