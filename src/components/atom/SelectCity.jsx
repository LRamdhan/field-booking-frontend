import { Select, Typography, Space } from 'antd';
import { css } from "@emotion/react"
const { Text } = Typography;

const SelectCity = () => {
  const options = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ]

  return (
    <Space direction="vertical" size="small" css={css`font-size: 15px; width: 100%;`}>
      <Text>Kota</Text>
      <Select
        showSearch
        placeholder="Pilih kota"
        optionFilterProp="label"
        size="large"
        options={options}
        css={css`width: 100%;`}
      />
    </Space>
  )
}

export default SelectCity