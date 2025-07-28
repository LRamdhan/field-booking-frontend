import { css } from "@emotion/react"
import { Input, Typography } from "antd"
import ResetPasswordComplexity from "./ResetPasswordComplexity"
import useChangePasswordStore from "../../store/changePasswordStore"

const ChangePasswordInput = () => {
  const newPassword = useChangePasswordStore(state => state.newPassword)
  const setNewPassword = useChangePasswordStore(state => state.setNewPassword)
  const confirmPassword = useChangePasswordStore(state => state.confirmPassword)
  const setConfirmPassword = useChangePasswordStore(state => state.setConfirmPassword)
  const setIsComplexityValid = useChangePasswordStore(state => state.setIsComplexityValid)

  const pointLowercase = (/[a-z]/).test(newPassword)
  const pointUppercase = (/[A-Z]/).test(newPassword)
  const pointNumber = (/\d/).test(newPassword)
  const point8CharacterLength = newPassword.length >= 8
  const pointCorespondConfirmPassword = (newPassword.length === 0 && confirmPassword.length === 0) ? false : (newPassword === confirmPassword)
  
  const handleNewPasswordInput = e => {
    const typedNewPassword = e.target.value
    const pointLowercase = (/[a-z]/).test(typedNewPassword)
    const pointUppercase = (/[A-Z]/).test(typedNewPassword)
    const pointNumber = (/\d/).test(typedNewPassword)
    const point8CharacterLength = typedNewPassword.length >= 8
    const pointCorespondConfirmPassword = (typedNewPassword.length === 0 && confirmPassword.length === 0) ? false : (typedNewPassword === confirmPassword)
    setNewPassword(e.target.value)
    setIsComplexityValid((pointLowercase && pointUppercase && pointNumber && point8CharacterLength && pointCorespondConfirmPassword))
  }

  const handleConfirmPasswordInput = e => {
    const typedConfirmPassword = e.target.value
    const pointCorespondConfirmPassword = (newPassword.length === 0 && typedConfirmPassword.length === 0) ? false : (newPassword === typedConfirmPassword)
    setConfirmPassword(typedConfirmPassword)
    setIsComplexityValid((pointLowercase && pointUppercase && pointNumber && point8CharacterLength && pointCorespondConfirmPassword))
  }

  return (
    <>
      <div>
        <Typography.Text css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>Kata Sandi Baru</Typography.Text>
        <Input.Password value={newPassword} onInput={handleNewPasswordInput} placeholder="Password baru" type="password" css={css`margin-top: 10px; width: 100%; font-size: 15px;`} />
      </div>
      <div css={css`margin-top: 20px;`}>
        <Typography.Text css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>Konfirmasi Sandi</Typography.Text>
        <Input.Password value={confirmPassword} onInput={handleConfirmPasswordInput} placeholder="Konfirmasi password" type="password" css={css`margin-top: 20px; width: 100%; font-size: 15px;`} />
      </div>
      <ResetPasswordComplexity password={newPassword} confirmPassword={confirmPassword} pointLowercase={pointLowercase} pointUppercase={pointUppercase} pointNumber={pointNumber} point8CharacterLength={point8CharacterLength} pointCorespondConfirmPassword={pointCorespondConfirmPassword} align={"start"} />
    </>
  )
}

export default ChangePasswordInput