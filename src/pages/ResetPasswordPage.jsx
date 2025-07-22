import { Helmet } from "react-helmet"
import ResetPasswordContent from "../components/organism/ResetPasswordContent"
import ResetPasswordSuccess from "../components/organism/ResetPasswordSuccess"
import ResetPasswordFail from "../components/organism/ResetPasswordFail"
import { useResetPassword } from "../hook/user.hooks"

const ResetPasswordPage = () => {
  const { mutate: resetPassword, isPending, error, isSuccess} = useResetPassword()

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      {error && <ResetPasswordFail /> }
      {isSuccess && <ResetPasswordSuccess /> }
      {(!isSuccess && !error) && <ResetPasswordContent resetPassword={resetPassword} isPending={isPending} />}
    </>
  )
}

export default ResetPasswordPage