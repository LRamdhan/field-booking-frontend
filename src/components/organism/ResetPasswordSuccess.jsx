import { css } from "@emotion/react"
import { Flex, Image, Button, Typography } from "antd"
import CheckImg from "/img/check.svg"
import { Link } from "react-router-dom"

const pageStyle = css`
  width: 100%;
  height: 100vh;
  padding: 12px;
  @media(max-height: 500px) {
    display: block;
    height: max-content;
    padding: 50px 12px;
  }
`

const cardStyle = css`
  max-width: 400px;
  height: max-content;
  margin: 0 auto;
  padding: 25px 0;
  @media(min-width: 768px) {
    padding: 25px 16px
  }
`

const ResetPasswordSuccess = () => {
  return (
    <Flex vertical justify="center" component="main" css={pageStyle}>
      <div css={css`width: 100%; height: max-content;`}>
        <Flex justify="center" align="center" vertical css={cardStyle}>
          <Image
            width={100}
            src={CheckImg}
            preview={false}
          />
          <Typography.Title css={css`font-size: 28px; color: var(--text-color); font-weight: 500; margin-top: 15px; margin-bottom: 0;`}>Reset Password Berhasil</Typography.Title>
          <Typography.Text align="center" css={css`font-size: 15px; color: var(--secondary-color); padding-top: 14px;`}>Password anda berhasil direset</Typography.Text>
          <Link to="/login" css={css`margin-top: 26px;`}>
            <Button type="primary" css={css`width: 100%; font-size: 15px; font-weight: 500;`}>Login</Button>
          </Link>
        </Flex>
      </div>
    </Flex>
  )
}

export default ResetPasswordSuccess