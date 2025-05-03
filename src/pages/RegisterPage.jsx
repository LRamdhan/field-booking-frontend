import { css } from "@emotion/react"
import RegisterCard from "../components/molecules/RegisterCard";

const registerPageStyle = css`
  width: 100%;
  padding: 50px 12px; 
  @media(min-height: 870px) {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 30px 12px;
  }
`

const RegisterPage = () => {
  return (
    <main css={registerPageStyle}>
      <div css={css`width: 100%; height: max-content;`}>
        <RegisterCard />
      </div>
    </main>
  )
}

export default RegisterPage