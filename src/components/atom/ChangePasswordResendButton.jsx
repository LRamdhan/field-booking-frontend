import { css } from "@emotion/react"
import { Button, notification } from "antd"
import { useResendChangePasswordOtp } from "../../hook/user.hooks"
import { useEffect } from "react"
import { MdOutlineError } from "react-icons/md"
import userApi from "../../api/userApi"
import ChangePasswordInterval from "./ChangePasswordInterval"
import { useState } from "react"

const ChangePasswordResendButton = () => {
  const {mutate: resendOtp, isPending, error, isSuccess} = useResendChangePasswordOtp()
  const [api, contextHolder] = notification.useNotification();
  const [timeout, setTimeout] = useState(0)

  const handleResend = () => {
    resendOtp()
  }

  useEffect(() => {
    (async () => {
      if(error) {
        if(error.response.status === 404) { // when previously created otp is expire
          try {
            await userApi.requestChangePassword()
            api.success({
              message: 'OTP baru berhasil dikirim ke email anda',
              placement: 'top',
            })
            setTimeout(60)
          } catch(err) {
            console.log(err.message);
            api.error({
              message: 'Terjadi Error',
              description: 'Silahkan coba lagi nanti',
              placement: 'top',
              icon: <MdOutlineError color="#E5342F" size={24} />
            })
          }
        } else if(error.response.status === 409) { // when otp is already created and sent
          const timeout = error.response.data.data.timeout
          api.warning({
            message: 'OTP baru saja dikirim',
            description: 'Tunggu beberapa saat sebelum mengirim ulang kode',
            placement: 'top',
          })
          setTimeout(timeout)
        } else { // other error happend
          api.error({
            message: 'Terjadi Error',
            description: 'Silahkan coba lagi nanti',
            placement: 'top',
            icon: <MdOutlineError color="#E5342F" size={24} />
          })
        }
        return
      }
      if(isSuccess) { // when successfully resend otp
        api.success({
          message: 'OTP baru berhasil dikirim ke email anda',
          placement: 'top',
        })
        setTimeout(60)
      }
    })()
  }, [error, isSuccess])

  return (
    <>
      {contextHolder}
      <Button type="text" loading={isPending} onClick={handleResend} css={css`text-decoration: underline;`} disabled={timeout}>
        Kirim Ulang OTP
        {timeout > 0 && <ChangePasswordInterval timeleft={timeout} setTimeleft={setTimeout} />}
      </Button>
    </>
  )
}

export default ChangePasswordResendButton