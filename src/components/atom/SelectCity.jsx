import { Select, Typography, Space } from 'antd';
import { css } from "@emotion/react"
import { useEffect, useState } from 'react';
import userApi from '../../api/userApi';
import useRegisterStore from '../../store/registerStore';
const { Text } = Typography;

const SelectCity = () => {
  const [cityOptions, setCityOptions] = useState([])
  const setCity = useRegisterStore(state => state.setCity)
  const city = useRegisterStore(state => state.city)
  const setDistrict = useRegisterStore(state => state.setDistrict)
  const setSubDistrict = useRegisterStore(state => state.setSubDistrict)

  const handleChange = (value, option) => {
    setCity({
      code: option.code,
      name: value
    })
    setDistrict(null)
    setSubDistrict(null)
  };

  useEffect(() => {
    (async () => {
      try {
        let city = await userApi.getCity()
        city = city.map(item => {
          let str = item.name
          str = str.split(" ")
          str = str.map(item => {
            item = item.toLowerCase()
            item = item.split("")
            item[0] = item[0].toUpperCase()
            item = item.join("")
            return item
          })
          str = str.join(" ")
          return ({ value: str, label: str, code: item.code })
        })
        setCityOptions(city)
      } catch(err) {
        setCityOptions([])
        console.log(err.message);
      }
    })()
  }, [])

  return (
    <Space direction="vertical" size="small" css={css`font-size: 15px; width: 100%;`}>
      <Text>Kota</Text>
      <Select
        showSearch
        placeholder="Pilih kota"
        optionFilterProp="label"
        size="large"
        value={city?.name || null}
        options={cityOptions}
        onChange={handleChange}
        css={css`width: 100%;`}
      />
    </Space>
  )
}

export default SelectCity