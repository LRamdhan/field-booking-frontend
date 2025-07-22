import { css } from "@emotion/react"
import { Flex, Typography } from "antd"
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Point = ({children, fulfilled}) => {
  return (
    <Flex align="center" gap="middle">
      {fulfilled ? <FaCheck css={css`color: #20AD20; font-size: 15px;`} /> : <RxCross2 css={css`color: #B4B4B4; font-size: 18px;`} />}
      <Typography.Text css={css`font-size: 15px; color: ${fulfilled ? '#20AD20' : '#B4B4B4'};`}>{children}</Typography.Text>
    </Flex>
  )
}

const ResetPasswordComplexity = ({password, confirmPassword, pointLowercase, pointUppercase, pointNumber, point8CharacterLength, pointCorespondConfirmPassword}) => {

  return (
    <Flex vertical={true} css={css`gap: 3px; margin-top: 20px;`}>
      <Point fulfilled={pointLowercase}>Terdiri dari huruf kecil</Point>
      <Point fulfilled={pointUppercase}>Terdiri dari huruf besar</Point>
      <Point fulfilled={pointNumber}>Terdiri dari angka</Point>
      <Point fulfilled={point8CharacterLength}>Minimal 8 karakter</Point>
      <Point fulfilled={pointCorespondConfirmPassword}>Konfirmasi password benar</Point>
    </Flex>
  )
}

export default ResetPasswordComplexity