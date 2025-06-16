import { Input, Typography, Space } from 'antd';
const { Text } = Typography;
import { css } from "@emotion/react"

const FieldPassword = ({value, setValue}) => {
  const password = value()
  const setPassword = setValue()

  const handleChange = (e) => {
    setPassword(e.target.value);
  }

  return (<Space direction="vertical" size="small" css={css`* {font-size: 15px;} width: 100%;`}>
    <Text css={css`color: var(--text-color);`}>Password</Text>
    <Input.Password size="large" placeholder="Masukan password" value={password} onChange={handleChange} />
  </Space>)
}

export default FieldPassword