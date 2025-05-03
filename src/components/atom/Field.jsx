import { Input, Typography, Space } from 'antd';
const { Text } = Typography;
import { css } from "@emotion/react"

const Field = () => {
  return (<Space direction="vertical" size="small" css={css`font-size: 15px; width: 100%;`}>
    <Text>Email</Text>
    <Input size="large" placeholder="Masukan email" />
  </Space>)
}

export default Field