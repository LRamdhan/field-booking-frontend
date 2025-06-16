import { Input, Typography, Space } from 'antd';
const { Text } = Typography;
import { css } from "@emotion/react"

const FieldEmail = ({value, setValue}) => {
  const email = value()
  const setEmail = setValue()

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  return (<Space direction="vertical" size="small" css={css`* {font-size: 15px;} width: 100%;`}>
    <Text css={css`color: var(--text-color);`}>Email</Text>
    <Input size="large" type="email" placeholder="Masukan email" value={email} onChange={handleChange} />
  </Space>)
}

export default FieldEmail