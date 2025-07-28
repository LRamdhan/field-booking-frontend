import { css } from "@emotion/react"
import { Divider } from "antd"
import ChangePasswordOTP from "../molecules/ChangePasswordOTP";
import ChangePasswordInput from "../molecules/ChangePasswordInput";
import ChangePasswordButton from "../molecules/ChangePasswordButton";

const ChangePasswordProcess = () => {
  return (
    <div css={css`width: 100%; border: 1px solid var(--blur-color); border-radius: 10px; padding: 30px 12px; @media(min-width: 768px) {padding: 44px 60px;}`}>
      <ChangePasswordOTP />
      <Divider css={css`background-color: var(--blur-color); margin: 30px 0;`} />
      <ChangePasswordInput />
      <ChangePasswordButton />
    </div>
  )
}

export default ChangePasswordProcess