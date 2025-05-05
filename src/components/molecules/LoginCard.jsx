import { css } from "@emotion/react"
import { Card } from 'antd';
import { Typography, Button, Space, notification } from 'antd';
import FieldEmail from "../atom/FieldEmail";
import LoginDivider from "../atom/LoginDivider";
const { Title } = Typography;
import FieldPassword from "../atom/FieldPassword";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuthButton from "../atom/GoogleAuthButton";
import useLoginStore from "../../store/loginStore";
import { useState } from "react";
import { MdOutlineError } from "react-icons/md";

const emailDec = () => useLoginStore(state => state.email)
const setEmailDec = () => useLoginStore(state => state.setEmail)
const passwordDec = () => useLoginStore(state => state.password)
const setPasswordDec = () => useLoginStore(state => state.setPassword)

const cardStyle = css`
  max-width: 400px;
  height: max-content;
  margin: 0 auto;
  border: 1px solid grey;
  padding: 25px 0;
  @media(min-width: 768px) {
    padding: 25px 16px
  }
`
const LoginCard = () => {
  const login = useLoginStore(state => state.login)
  const [isLoading, setIsLoading] = useState(false)
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true)
    try {
      await login()
      navigate('/')
      setIsLoading(false)
    } catch(err) {
      let message
      switch(err.status) {
        case 404 : 
          message = "Email tidak ditemukan"
          break
        case 400 : 
          message = "Email atau password salah"
          break
        default :
          message = "Terjadi error, silahkan coba beberapa saat lagi"
      }
      api.error({
        message: 'Login Gagal',
        description: message,
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
      setIsLoading(false)
    }
  }

  return (<>
    {contextHolder}
    <Card css={cardStyle}>
      <form action="" onSubmit={handleSubmit}>
        <Title level={2} css={css`text-align: center; font-size: 28px; margin-bottom: 40px;`}>Login</Title>
        <Space direction="vertical" css={css`width: 100%;`} size={24}>
          <FieldEmail value={emailDec} setValue={setEmailDec} />
          <FieldPassword value={passwordDec} setValue={setPasswordDec} />
          <Button size="large" type="primary" htmlType="submit" loading={isLoading} css={css`width: 100%;`}>Login</Button>
          <LoginDivider />
          <GoogleAuthButton />
          <p css={css`text-align: center; width: 100%; font-size: 14px;`}>Belum punya akun? <Link to="/register">Register</Link></p>
        </Space>
      </form>
    </Card>
  </>)
}

export default LoginCard