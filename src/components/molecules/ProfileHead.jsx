import { css } from "@emotion/react"
import { Button, Flex, Typography  } from "antd"
import { LuPencil } from "react-icons/lu";
import useProfileStore from "../../store/profileStore";

const ProfileHead = () => {
  const editMode = useProfileStore(state => state.editMode)
  const setEditMode = useProfileStore(state => state.setEditMode)

  const handleSwitchMode = () => setEditMode(true)

  return (
    <Flex align="center" justify="space-between">
      <Typography.Title level={1} css={css`font-size: 24px; color: var(--text-color); font-weight: 500; margin: 0;`}>Profile</Typography.Title>
      {!editMode && <Button onClick={handleSwitchMode} type="text" icon={<LuPencil css={css`color: var(--text-color);`} />} css={css`font-weight: 500; text-transform: capitalize; font-size: 15px;`}>Edit</Button>}
    </Flex>
  )
}

export default ProfileHead