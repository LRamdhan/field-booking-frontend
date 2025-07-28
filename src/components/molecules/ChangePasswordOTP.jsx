import { css } from "@emotion/react"
import { Flex, Input, Typography } from "antd"
import useChangePasswordStore from "../../store/changePasswordStore"
import ChangePasswordResendButton from "../atom/ChangePasswordResendButton"

const ChangePasswordOTP = () => {
  const setOtp = useChangePasswordStore(state => state.setOtp)
  const otp = useChangePasswordStore(state => state.otp)

  const handleInputOtp = val => {
    setOtp(val.join(''));
  }
  
  return (
    <>
      <Typography.Title css={css`font-size: 20px; color: var(--text-color); font-weight: 500; margin-bottom: 0;`}>Ubah Kata Sandi</Typography.Title>
      <Typography.Text css={css`font-size: 15px; color: var(--text-color); display: block; margin-bottom: 0; margin-top: 18px;`}>Masukan Code yang dikirim ke aioeo@gmail.com untuk mengubah kata sandi anda.</Typography.Text>
      <Flex vertical align="center" gap={25} css={css`margin-top: 28px;`}>
        <Input.OTP value={otp} onInput={handleInputOtp} />
        <ChangePasswordResendButton />
      </Flex>
    </>
  )
}

export default ChangePasswordOTP