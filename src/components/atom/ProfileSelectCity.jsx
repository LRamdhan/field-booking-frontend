import { useEffect, useState } from "react"
import useProfileStore from "../../store/profileStore"
import userApi from "../../api/userApi"
import { Select } from "antd"
import { css } from "@emotion/react"

const ProfileSelectCity = () => {
  const [cityOptions, setCityOptions] = useState([])
  const setEditCity = useProfileStore(state => state.setEditCity)
  const editCity = useProfileStore(state => state.editCity)
  const setEditDistrict = useProfileStore(state => state.setEditDistrict)
  const setEditSubDistrict = useProfileStore(state => state.setEditSubDistrict)

  const handleChange = (value, option) => {
    setEditCity({
      code: option.code,
      name: value
    })
    setEditDistrict(null)
    setEditSubDistrict(null)
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
    <Select
      showSearch
      placeholder="Pilih kota"
      optionFilterProp="label"
      size="large"
      value={editCity?.name || null}
      options={cityOptions}
      onChange={handleChange}
      css={css`width: 100%; * {font-size: 15px;}`}
    />
  )
}

export default ProfileSelectCity