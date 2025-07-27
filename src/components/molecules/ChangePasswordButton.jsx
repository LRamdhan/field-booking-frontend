import { css } from "@emotion/react"
import { Button, Flex, notification } from "antd"
import useChangePasswordStore from "../../store/changePasswordStore"
import { MdOutlineError } from "react-icons/md"
import { useChangePassword } from "../../hook/user.hooks"
import { useEffect } from "react"
import userApi from "../../api/userApi"

const ChangePasswordButton = () => {
  const otp = useChangePasswordStore(state => state.otp)
  const newPassword = useChangePasswordStore(state => state.newPassword)
  const isComplexityValid = useChangePasswordStore(state => state.isComplexityValid)
  const reset = useChangePasswordStore(state => state.reset)
  const setOpenSuccessNotif = useChangePasswordStore(state => state.setOpenSuccessNotif)
  const setIsStarted = useChangePasswordStore(state => state.setIsStarted)
  const [api, contextHolder] = notification.useNotification();
  const {mutate: changePassword, isPending, error, isSuccess} = useChangePassword()

  const handleChange = () => {
    if((otp.length < 6) || !isComplexityValid) {
      api.warning({
        message: 'Data tidak valid',
        description: 'Pastikan OTP dan password terisi dengan benar',
        placement: 'top',
      })
      return
    }
    changePassword({otp, new_password: newPassword})
  }

  const handleCancel = async () => {
    try {
      setIsStarted(false)
      reset()
      await userApi.cancelChangeRequest()
    } catch(err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    if(error) {
      if(error?.response?.status === 404) {
        api.error({
          message: 'OTP Salah',
          description: 'Check email anda atau kirim ulang OTP',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
      } else {
        api.error({
          message: 'Terjadi Error',
          description: 'Silahkan coba lagi nanti',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
      }
      return
    }
    if(isSuccess) {
      setIsStarted(false)
      setOpenSuccessNotif(true)
      reset()
    }
  }, [error, isSuccess])

  return (
    <>
      {contextHolder}
      <Flex gap={18} justify="end" css={css`margin-top: 44px;`}>
        <Button onClick={handleCancel} css={css`border-color: var(--primary-color); color: var(--primary-color); font-weight: 500;`}>Batal</Button>
        <Button type="primary" onClick={handleChange} loading={isPending} css={css`font-weight: 500;`}>Ubah Sandi</Button>
      </Flex>
    </>
  )
}

export default ChangePasswordButton