import { Helmet } from "react-helmet"
import { Typography } from "antd"
import { css } from "@emotion/react"
import ChangePasswordStart from "../components/organism/ChangePasswordStart"
import ChangePasswordProcess from "../components/organism/ChangePasswordProcess"
import ProfileLayout from "../components/layout/ProfileLayout"
import useChangePasswordStore from "../store/changePasswordStore"

const ChangePasswordPage = () => {
  const isStarted = useChangePasswordStore(state => state.isStarted)

  return (
    <>
      <Helmet>
        <title>Kata Sandi</title>
      </Helmet>
      <ProfileLayout>
        <Typography.Title level={1} css={css`font-size: 24px; color: var(--text-color); font-weight: 500; margin: 0;`}>Kata Sandi</Typography.Title>
        <div css={css`height: 34px;`}></div>
        {isStarted ? (
          <ChangePasswordProcess />
        ) : (
          <ChangePasswordStart />
        )}
      </ProfileLayout>
    </>
  )
}

export default ChangePasswordPage