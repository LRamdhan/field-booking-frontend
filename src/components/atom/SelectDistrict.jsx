import { Select, Typography, Space } from 'antd';
import { css } from "@emotion/react"
import { useEffect } from 'react';
import userApi from '../../api/userApi';
const { Text } = Typography;
import {useState} from 'react'
import useRegisterStore from '../../store/registerStore';

const SelectDistrict = () => {
  const [districtOptions, setDistrictOptions] = useState([])
  const city = useRegisterStore(state => state.city)
  const setDistrict = useRegisterStore(state => state.setDistrict)
  const setSubDistrict = useRegisterStore(state => state.setSubDistrict)
  const district = useRegisterStore(state => state.district)

  const handleChange = (value, option) => {
    setDistrict({
      code: option.code,
      name: value
    })
    setSubDistrict(null)
  };

  useEffect(() => {
    (async () => {
      try {
        if(!city) {
          setDistrictOptions([])
          return
        }
        let district = await userApi.getDistrict(city.code)
        district = district.map(item => ({ value: item.name, label: item.name, code: item.code }))
        setDistrictOptions(district)
      } catch(err) {
        console.log(err.message);
        setDistrictOptions([])
      }
    })()
  }, [city])

  return (
    <Space direction="vertical" size="small" css={css`* {font-size: 15px;} width: 100%;`}>
      <Text css={css`color: var(--text-color);`}>Kecamatan</Text>
      <Select
        showSearch
        placeholder="Pilih kecamatan"
        optionFilterProp="label"
        size="large"
        value={district?.name || null}
        options={districtOptions}
        onChange={handleChange}
        css={css`width: 100%;`}
      />
    </Space>
  )
}

export default SelectDistrict