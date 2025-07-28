import { useEffect, useState } from "react"
import useProfileStore from "../../store/profileStore"
import userApi from "../../api/userApi"
import { Select } from "antd"
import { css } from "@emotion/react"

const ProfileSelectDistrict = () => {
  const [districtOptions, setDistrictOptions] = useState([])
  const editCity = useProfileStore(state => state.editCity)
  const setEditDistrict = useProfileStore(state => state.setEditDistrict)
  const setEditSubDistrict = useProfileStore(state => state.setEditSubDistrict)
  const editDistrict = useProfileStore(state => state.editDistrict)

  const handleChange = (value, option) => {
    setEditDistrict({
      code: option.code,
      name: value
    })
    setEditSubDistrict(null)
  };

  useEffect(() => {
    (async () => {
      try {
        if(!editCity) {
          setDistrictOptions([])
          return
        }
        let district = await userApi.getDistrict(editCity?.code)
        district = district.map(item => ({ value: item.name, label: item.name, code: item.code }))
        setDistrictOptions(district)
      } catch(err) {
        console.log(err.message);
        setDistrictOptions([])
      }
    })()
  }, [editCity])

  return (
    <Select
      showSearch
      placeholder="Pilih kecamatan"
      optionFilterProp="label"
      size="large"
      value={editDistrict?.name || null}
      options={districtOptions}
      onChange={handleChange}
      css={css`width: 100%;`}
    />
  )
}

export default ProfileSelectDistrict