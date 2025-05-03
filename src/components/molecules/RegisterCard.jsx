import { css } from "@emotion/react"
import { Card } from 'antd';
import { Typography, Button, Space } from 'antd';
import FieldEmail from "../atom/FieldEmail";
import LoginDivider from "../atom/LoginDivider";
const { Title } = Typography;
import { FcGoogle } from "react-icons/fc";
import FieldPassword from "../atom/FieldPassword";
import { Link } from "react-router-dom";
import FieldText from "../atom/FieldText";
import SelectCity from "../atom/SelectCity";
import SelectDistrict from "../atom/SelectDistrict";
import SelectSubDistrict from "../atom/SelectSubDistrict";

const cardStyle = css`
  max-width: 400px;
  height: max-content;
  margin: 0 auto;
  border: 1px solid grey;
  padding: 0 0;
  @media(min-width: 768px) {
    padding: 0 16px
  }
`
const RegisterCard = () => {
  return (
    <Card css={cardStyle}>
      <Title level={2} css={css`text-align: center; font-size: 28px; margin-bottom: 40px;`}>Register</Title>
      <Space direction="vertical" css={css`width: 100%;`} size={24}>
        <Space direction="vertical" css={css`width: 100%;`} size={18}>
          <FieldText />
          <SelectCity />
          <SelectDistrict />
          <SelectSubDistrict />
          <FieldEmail />
          <FieldPassword />
        </Space>
        <Button size="large" type="primary" css={css`width: 100%;`}>Register</Button>
        <LoginDivider />
        <Button size="large" icon={<FcGoogle />} css={css`width: 100%;`}>Google</Button>
        <p css={css`text-align: center; width: 100%; font-size: 14px;`}>Sudah punya akun? <Link to="/login">Login</Link></p>
      </Space>
    </Card>
  )
}

export default RegisterCard