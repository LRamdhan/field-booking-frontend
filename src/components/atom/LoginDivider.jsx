import { Flex, Typography } from "antd";
const { Text } = Typography;
import { css } from "@emotion/react"

const LoginDivider = () => {
  return (
    <Flex justify="center" align="center" gap="middle">
      <div css={css`height: 1px; background-color: grey; flex-grow: 1`}></div>
      <Text>atau lanjutkan dengan</Text>
      <div css={css`height: 1px; background-color: grey; flex-grow: 1`}></div>
    </Flex>
  )
}

export default LoginDivider