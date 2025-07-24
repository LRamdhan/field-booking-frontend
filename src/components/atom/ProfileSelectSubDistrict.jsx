import { useEffect, useState } from "react"
import userApi from "../../api/userApi"
import useProfileStore from "../../store/profileStore"
import { Select } from "antd"
import { css } from "@emotion/react"

const ProfileSelectSubDistrict = () => {
  const [subDistrictOptions, setSubDistrictOptions] = useState([])
  const editDistrict = useProfileStore(state => state.editDistrict)
  const setEditSubDistrict = useProfileStore(state => state.setEditSubDistrict)
  const editSubDistrict = useProfileStore(state => state.editSubDistrict)

  const handleChange = (value, option) => {
    setEditSubDistrict({
      code: option.code,
      name: value
    })
  };

  useEffect(() => {
    (async () => {
      try {
        if(!editDistrict) {
          setSubDistrictOptions([])
          return
        }
        let subDistrict = await userApi.getSubDistrict(editDistrict?.code)
        subDistrict = subDistrict.map(item => ({ value: item.name, label: item.name, code: item.code }))
        setSubDistrictOptions(subDistrict)
      } catch(err) {
        console.log(err.message);
        setSubDistrictOptions([])
      }
    })()
  }, [editDistrict])

  return (
    <Select
      showSearch
      placeholder="Pilih desa"
      optionFilterProp="label"
      size="large"
      value={editSubDistrict?.name || null}
      options={subDistrictOptions}
      onChange={handleChange}
      css={css`width: 100%;`}
    />
  )
}

export default ProfileSelectSubDistrict