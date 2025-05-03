import { Input, Typography, Space } from 'antd';
const { Text } = Typography;
import { css } from "@emotion/react"

const FieldPassword = () => {
  return (<Space direction="vertical" size="small" css={css`font-size: 15px; width: 100%;`}>
    <Text>Password</Text>
    <Input.Password size="large" placeholder="Masukan password" />
  </Space>)
}

export default FieldPassword