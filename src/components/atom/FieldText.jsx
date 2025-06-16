import { Input, Typography, Space } from 'antd';
const { Text } = Typography;
import { css } from "@emotion/react"
import useRegisterStore from '../../store/registerStore';

const FieldText = () => {
  const name = useRegisterStore(state => state.name)
  const setName = useRegisterStore(state => state.setName)

  return (<Space direction="vertical" size="small" css={css`width: 100%;`}>
    <Text css={css`font-size: 15px; color: var(--text-color);`}>Nama</Text>
    <Input size="large" placeholder="Masukan nama" value={name} onChange={e => setName(e.target.value)} css={css`font-size: 15px;`} />
  </Space>)
}

export default FieldText