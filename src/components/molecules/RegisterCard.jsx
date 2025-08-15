import { css } from "@emotion/react"
import { Card } from 'antd';
import { Typography, Button, Space, notification } from 'antd';
import FieldEmail from "../atom/FieldEmail";
import LoginDivider from "../atom/LoginDivider";
const { Title } = Typography;
import FieldPassword from "../atom/FieldPassword";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FieldText from "../atom/FieldText";
import SelectCity from "../atom/SelectCity";
import SelectDistrict from "../atom/SelectDistrict";
import SelectSubDistrict from "../atom/SelectSubDistrict";
import useRegisterStore from "../../store/registerStore";
import { useState } from "react";
import GoogleAuthButton from "../atom/GoogleAuthButton";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdOutlineError } from "react-icons/md";

const emailDec = () => useRegisterStore(state => state.email)
const setEmailDec = () => useRegisterStore(state => state.setEmail)
const passwordDec = () => useRegisterStore(state => state.password)
const setPasswordDec = () => useRegisterStore(state => state.setPassword)

const cardStyle = css`
  max-width: 400px;
  height: max-content;
  margin: 0 auto;
  border: .7px solid var(--blur-color);
  padding: 20px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  @media(min-width: 768px) {
    padding: 0 16px
  }
`
const RegisterCard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const register = useRegisterStore(state => state.register)
  const resetField = useRegisterStore(state => state.resetField)
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      await register(() => {
        navigate(from || '/')
      })
      api.success({
        message: 'Registrasi Berhasil',
        description: "Silahkan konfirmasi akun melalui email, kemudian login",
        placement: 'top',
        icon: <MdOutlineDownloadDone color="#7FDF4B" size={24} />
      })
      resetField()
      setIsLoading(false)
    } catch(err) {
      let message
      switch(err.status) {
        case 400 :
          message = 'Masukan data yang benar, pastikan tidak ada data yang kosong dan password minimal 8 karakter'
          break
        case 409 :
          message = 'Email sudah terdaftar'
          break
        default :
          message = 'Terjadi error, silahkan coba beberapa saat lagi'
      }
      api.error({
        message: 'Registrasi Gagal',
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
        <Title level={2} css={css`text-align: center; font-size: 28px; margin-bottom: 40px; color: var(--text-color);`}>Register</Title>
        <Space direction="vertical" css={css`width: 100%;`} size={24}>
          <Space direction="vertical" css={css`width: 100%;`} size={18}>
            <FieldText />
            <SelectCity />
            <SelectDistrict />
            <SelectSubDistrict />
            <FieldEmail value={emailDec} setValue={setEmailDec} />
            <FieldPassword value={passwordDec} setValue={setPasswordDec} />
          </Space>
          <Button size="large" type="primary" htmlType="submit" loading={isLoading} css={css`width: 100%; color: white; font-weight: 500; font-size: 15px; * { color: var(--background-color); }`}>Register</Button>
          <LoginDivider />
          <GoogleAuthButton />
          <p css={css`text-align: center; width: 100%; font-size: 14px; color: var(--secondary-color);`}>Sudah punya akun? <Link to="/login" state={{from: from && from}} css={css`color: blue; font-size: 14px;`}>Login</Link></p>
        </Space>
      </form>
    </Card>
  </>)
}

export default RegisterCard