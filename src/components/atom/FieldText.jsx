import { Input, Typography, Space } from 'antd';
const { Text } = Typography;
import { css } from "@emotion/react"

const FieldText = () => {
  return (<Space direction="vertical" size="small" css={css`font-size: 15px; width: 100%;`}>
    <Text>Nama</Text>
    <Input size="large" type="email" placeholder="Masukan nama" />
  </Space>)
}

export default FieldText