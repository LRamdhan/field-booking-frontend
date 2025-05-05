import { Select, Typography, Space } from 'antd';
import { css } from "@emotion/react"
import { useEffect, useState } from 'react';
import userApi from '../../api/userApi';
import useRegisterStore from '../../store/registerStore';
const { Text } = Typography;

const SelectSubDistrict = () => {
  const [subDistrictOptions, setSubDistrictOptions] = useState([])
  const district = useRegisterStore(state => state.district)
  const setSubDistrict = useRegisterStore(state => state.setSubDistrict)
  const subDistrict = useRegisterStore(state => state.subDistrict)

  const handleChange = (value, option) => {
    setSubDistrict({
      code: option.code,
      name: value
    })
  };

  useEffect(() => {
    (async () => {
      try {
        if(!district) {
          setSubDistrictOptions([])
          return
        }
        let subDistrict = await userApi.getSubDistrict(district.code)
        subDistrict = subDistrict.map(item => ({ value: item.name, label: item.name, code: item.code }))
        setSubDistrictOptions(subDistrict)
      } catch(err) {
        console.log(err.message);
        setSubDistrictOptions([])
      }
    })()
  }, [district])

  return (
    <Space direction="vertical" size="small" css={css`font-size: 15px; width: 100%;`}>
      <Text>Desa</Text>
      <Select
        showSearch
        placeholder="Pilih desa"
        optionFilterProp="label"
        size="large"
        value={subDistrict?.name || null}
        options={subDistrictOptions}
        onChange={handleChange}
        css={css`width: 100%;`}
      />
    </Space>
  )
}

export default SelectSubDistrict