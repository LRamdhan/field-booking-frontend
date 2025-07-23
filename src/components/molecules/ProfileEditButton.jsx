import { css } from "@emotion/react"
import { Button, Flex, notification } from "antd"
import useProfileStore from "../../store/profileStore"
import { useUpdateProfile } from "../../hook/user.hooks"
import { useEffect } from "react"
import { MdOutlineError } from "react-icons/md";

const ProfileEditButton = () => {
  const setEditMode = useProfileStore(state => state.setEditMode)
  const editMode = useProfileStore(state => state.editMode)
  const resetEdit = useProfileStore(state => state.resetEdit)
  const {mutate: updateProfile, isPending, error, isSuccess} = useUpdateProfile()
  const [api, contextHolder] = notification.useNotification();

  const editName = useProfileStore(state => state.editName)
  const editImg = useProfileStore(state => state.editImg)
  const editCity = useProfileStore(state => state.editCity)
  const editDistrict = useProfileStore(state => state.editDistrict)
  const editSubDistrict = useProfileStore(state => state.editSubDistrict)

  const handleSwitchMode = () => {
    setEditMode(false)
    resetEdit()
  }

  const handleUpdate = () => {
    if(editName.trim().length === 0) {
      api.error({
        message: 'Nama tidak boleh kosong',
        description: 'Silahkan isi nama terlebih dahulu',
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
      return
    }
    const payload = {
      name: editName,
    }
    if(editCity.trim()) {
      payload.city = editCity
    }
    if(editDistrict.trim()) {
      payload.district = editDistrict
    }
    if(editSubDistrict.trim()) {
      payload.sub_district = editSubDistrict
    }
    if(editImg) {
      payload.img = editImg
    }
    updateProfile(payload)
  }

  useEffect(() => {
    if(error) {
      api.error({
        message: 'Terjadi Error',
        description: 'Silahkan coba lagi nanti',
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
      console.log(error.message);
    }
    if(isSuccess) {
      api.success({
        message: 'Profile berhasil diperbarui',
        description: '',
        placement: 'top',
      })
      setEditMode(false)
    }
  }, [error, isSuccess])

  return (<>
    {contextHolder}
    {editMode && (
      <Flex justify="end" gap={20} css={css`margin-top: 20px;`}>
        <Button variant="outlined" onClick={handleSwitchMode}>Batal</Button>
        <Button onClick={handleUpdate} type="primary" loading={isPending}>Simpan</Button>
      </Flex>
    )}
  </>)
}

export default ProfileEditButton