import { css } from "@emotion/react"
import { Card } from 'antd';
import { Typography, Button, Space } from 'antd';
import FieldEmail from "../atom/FieldEmail";
import LoginDivider from "../atom/LoginDivider";
const { Title } = Typography;
import { FcGoogle } from "react-icons/fc";
import FieldPassword from "../atom/FieldPassword";
import { Link } from "react-router-dom";

const cardStyle = css`
  max-width: 373px;
  height: max-content;
  margin: 0 auto;
  border: 1px solid grey;
  padding: 25px 0;
  @media(min-width: 768px) {
    padding: 25px 16px
  }
`
const LoginCard = () => {
  return (
    <Card css={cardStyle}>
      <Title level={2} css={css`text-align: center; font-size: 28px; margin-bottom: 40px;`}>Login</Title>
      <Space direction="vertical" css={css`width: 100%;`} size={24}>
        <FieldEmail />
        <FieldPassword />
        <Button size="large" type="primary" css={css`width: 100%;`}>Login</Button>
        <LoginDivider />
        <Button size="large" icon={<FcGoogle />} css={css`width: 100%;`}>Google</Button>
        <p css={css`text-align: center; width: 100%; font-size: 14px;`}>Belum punya akun? <Link to="/register">Register</Link></p>
      </Space>
    </Card>
  )
}

export default LoginCard