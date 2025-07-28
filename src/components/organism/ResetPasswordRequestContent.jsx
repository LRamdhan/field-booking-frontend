import { Button, Input, Typography } from "antd";
import { css } from "@emotion/react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import BasicCard from "./BasicCard";

const ResetPasswordRequestContent = ({email, setEmail, handleRequestResetPassword, isPending}) => {
  return (
    <BasicCard>
      <Typography.Title css={css`font-size: 28px; color: var(--text-color); font-weight: 500;`}>Reset Password</Typography.Title>
      <Typography.Text css={css`font-size: 15px; color: var(--secondary-color); padding-top: 14px;`}>Masukan email yang digunakan saat register</Typography.Text>
      <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} css={css`margin-top: 26px; width: 100%; font-size: 15px;`} />
      <Button onClick={handleRequestResetPassword} loading={isPending} type="primary" css={css`margin-top: 26px; width: 100%; font-size: 15px; font-weight: 500;`}>Reset</Button>
      <Link to="/login">
        <Button type="text" icon={<IoMdArrowBack />} css={css`margin-top: 26px; width: 100%; font-size: 15px; font-weight: 500; color: var(--text-color);`}>Kembali ke Login</Button>
      </Link>
    </BasicCard>
  )
}

export default ResetPasswordRequestContent