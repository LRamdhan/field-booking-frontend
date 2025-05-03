import { css } from "@emotion/react"
import { Card } from 'antd';
import { Typography, Button, Space } from 'antd';
import Field from "../atom/Field";
import LoginDivider from "../atom/LoginDivider";
const { Title } = Typography;
import { FcGoogle } from "react-icons/fc";

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
        <Field />
        <Field />
        <Button size="large" type="primary" css={css`width: 100%;`}>Login</Button>
        <LoginDivider />
        <Button size="large" icon={<FcGoogle />} css={css`width: 100%;`}>Google</Button>
      </Space>
    </Card>
  )
}

export default LoginCard