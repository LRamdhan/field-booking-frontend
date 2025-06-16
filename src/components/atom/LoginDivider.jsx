import { Flex, Typography } from "antd";
const { Text } = Typography;
import { css } from "@emotion/react"

const LoginDivider = () => {
  return (
    <Flex justify="center" align="center" gap="middle" css={css`* {color: var(--secondary-color); font-size: 14px;}`}>
      <div css={css`height: 0.7px; background-color: var(--secondary-color); flex-grow: 1`}></div>
      <Text>atau lanjutkan dengan</Text>
      <div css={css`height: 0.7px; background-color: var(--secondary-color); flex-grow: 1`}></div>
    </Flex>
  )
}

export default LoginDivider