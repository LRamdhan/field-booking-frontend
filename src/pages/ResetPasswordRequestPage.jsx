import { Helmet } from "react-helmet"
import ResetPasswordRequestContent from "../components/organism/ResetPasswordRequestContent";
import ResetPasswordRequestSuccess from "../components/organism/ResetPasswordRequestSuccess";
import { useCancelBooking } from "../hook/user.hooks";
import { useState } from "react";
import { notification } from "antd";
import { useEffect } from "react";
import { MdOutlineError } from "react-icons/md";

const ResetPasswordRequestPage = () => {
  const [email, setEmail] = useState('')
  const {mutate: requestResetPassword, isPending, error, isSuccess} = useCancelBooking(email)
  const [api, contextHolder] = notification.useNotification();

  const handleRequestResetPassword = () => {
    requestResetPassword(email)
  }

  useEffect(() => {
    if(error) {
      let message
      switch(error.status) {
        case 404 :
          message = 'Email tidak terdaftar'
          break
        case 409 :
          let time_remaining = error.response.data.data.remaining_time_in_seconds
          if(time_remaining < 60) {
            time_remaining = time_remaining + ' detik'
          } else {
            const minutes = Math.floor(time_remaining / 60);
            const remainingSeconds = time_remaining % 60;
            time_remaining = `${minutes} menit ${remainingSeconds} detik`;
          }
          message = 'Request sudah dilakukan sebelumnya, tunggu ' + time_remaining + ' lagi'
          break
        case 400 :
          message = 'Email tidak valid'
          break
        default :
          message = 'Terjadi error, silahkan coba beberapa saat lagi'
      }
      api.error({
        message: 'Request Gagal',
        description: message,
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
    }

    if(isSuccess && !error) {
      setEmail('')
    }
  }, [error, isSuccess])

  return (
    <>
      {contextHolder}
      <Helmet>
        <title>Request Reset Password</title>
      </Helmet>
      {isSuccess ? 
        <ResetPasswordRequestSuccess /> 
      :
        <ResetPasswordRequestContent email={email} setEmail={setEmail} handleRequestResetPassword={handleRequestResetPassword} isPending={isPending}/>
      }
    </>
  )
}

export default ResetPasswordRequestPage