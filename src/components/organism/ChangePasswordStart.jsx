import { css } from "@emotion/react"
import { Button, Flex, Typography, notification } from "antd"
import { useRequestChangePassword } from "../../hook/user.hooks"
import { useEffect } from "react"
import userApi from "../../api/userApi"
import { MdOutlineError } from "react-icons/md"
import useChangePasswordStore from "../../store/changePasswordStore"

const ChangePasswordStart = () => {
  const {mutate: requestChangePassword, isPending, error, isSuccess} = useRequestChangePassword()
  const [api, contextHolder] = notification.useNotification();
  const setIsStarted = useChangePasswordStore(state => state.setIsStarted)
  const openSuccessNotif = useChangePasswordStore(state => state.openSuccessNotif)
  const setOpenSuccessNotif = useChangePasswordStore(state => state.setOpenSuccessNotif)

  const handleClick = () => {
    requestChangePassword()
  }

  useEffect(() => {
    (async () => {
      if(error) {
        if(error.response.status === 409) { // if there is a request change password already
          try {
            await userApi.cancelChangeRequest()
            requestChangePassword()
          } catch(error) { // if cancle existing request change password failed
            console.log(error.message);
            api.error({
              message: 'Terjadi Error',
              description: 'Silahkan coba lagi nanti',
              placement: 'top',
              icon: <MdOutlineError color="#E5342F" size={24} />
            })
          }
          return
        } else { // if there is an error with request change password
          console.log(error.message);
          api.error({
            message: 'Terjadi Error',
            description: 'Silahkan coba lagi nanti',
            placement: 'top',
            icon: <MdOutlineError color="#E5342F" size={24} />
          })
        }
        return
      }
      if(isSuccess) { // success request change password
        setIsStarted(true)
        return
      }
      if(openSuccessNotif) {
        api.success({
          message: 'Password berhasil diubah',
          placement: 'top',
          onClose: () => setOpenSuccessNotif(false)
        })
      }
    })()
  }, [error, isSuccess])

  return (
    <>
      {contextHolder}
      <Flex justify="center" css={css`width: 100%; border: 1px solid var(--blur-color); border-radius: 10px; padding: 58px 0;`}>
        <Flex vertical align="center">
          <Typography.Title css={css`font-size: 20px; color: var(--text-color); font-weight: 500; margin-bottom: 0;`}>Ubah Kata Sandi</Typography.Title>
          <Typography.Text css={css`font-size: 15px; color: var(--text-color); margin-bottom: 0; margin-top: 18px;`}>Lupa kata sandi? atau hanya ingin merubahnya?</Typography.Text>
          <Button type="primary" loading={isPending} onClick={handleClick} css={css`margin-top: 24px; font-size: 15px; font-weight: 500;`}>Ubah Sandi</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default ChangePasswordStart