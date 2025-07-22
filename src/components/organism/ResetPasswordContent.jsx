import { Button, Input, Typography, notification } from "antd"
import BasicCard from "./BasicCard"
import { css } from "@emotion/react"
import ResetPasswordComplexity from "../molecules/ResetPasswordComplexity"
import { useState } from "react"
import { MdOutlineError } from "react-icons/md";
import { useLocation } from "react-router-dom"

const ResetPasswordContent = ({ resetPassword, isPending }) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const pointLowercase = (/[a-z]/).test(password)
  const pointUppercase = (/[A-Z]/).test(password)
  const pointNumber = (/\d/).test(password)
  const point8CharacterLength = password.length >= 8
  const pointCorespondConfirmPassword = (password.length === 0 && confirmPassword.length === 0) ? false : (password === confirmPassword)
  const [api, contextHolder] = notification.useNotification();
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);

  const handleResetPassword = () => {
    if(!pointLowercase || !pointUppercase || !pointNumber || !point8CharacterLength || !pointCorespondConfirmPassword) {
      api.error({
        message: 'Kriteria password belum terpenuhi',
        description: 'Pastikan password terdiri dari huruf kecil, huruf besar, angka, dan minimal 8 karakter',
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
      return
    }
    const otp = queryParams.get('otp');
    resetPassword({otp, password})
  }

  return (
    <>
      {contextHolder}
      <BasicCard>
        <Typography.Title css={css`font-size: 28px; color: var(--text-color); font-weight: 500;`}>Buat Password Baru</Typography.Title>
        <Typography.Text css={css`font-size: 15px; color: var(--secondary-color); padding-top: 14px;`}>Masukan password baru anda</Typography.Text>
        <Input.Password value={password} onChange={e => setPassword(e.target.value)} placeholder="Password baru" type="password" css={css`margin-top: 26px; width: 100%; font-size: 15px;`} />
        <Input.Password value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Konfirmasi password" type="password" css={css`margin-top: 20px; width: 100%; font-size: 15px;`} />
        <ResetPasswordComplexity password={password} confirmPassword={confirmPassword} pointLowercase={pointLowercase} pointUppercase={pointUppercase} pointNumber={pointNumber} point8CharacterLength={point8CharacterLength} pointCorespondConfirmPassword={pointCorespondConfirmPassword} />
        <Button type="primary" loading={isPending} onClick={handleResetPassword} css={css`margin-top: 35px; width: 100%; font-size: 15px; font-weight: 500;`}>Ubah Password</Button>
      </BasicCard>
    </>
  )
}

export default ResetPasswordContent