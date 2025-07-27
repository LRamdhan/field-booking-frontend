import { css } from "@emotion/react"
import { Avatar, Flex, Input, Skeleton, Typography } from "antd"
import UploadImg from "./UploadImg"
import useProfileStore from "../../store/profileStore"

const ProfileGeneral = () => {
  const editMode = useProfileStore(state => state.editMode)
  const name = useProfileStore(state => state.name)
  const email = useProfileStore(state => state.email)
  const imgUrl = useProfileStore(state => state.imgUrl)
  const editName = useProfileStore(state => state.editName)
  const setEditName = useProfileStore(state => state.setEditName)
  const isPending = useProfileStore(state => state.isPending)

  return (
    <Flex align="center" gap={20} css={css`margin-top: 30px; padding: 25px 16px; border: .5px solid var(--blur-color); border-radius: 7px;`}>
      {isPending && 
        <>
          <Skeleton.Avatar active style={{ width: 70, height: 70 }} />
          <Skeleton active paragraph={{ rows: 1 }} />
        </>
      }
      {!isPending && (
        <>
          {editMode ? (
            <UploadImg />
          ) : (
            <>
              {imgUrl ? (
                <Avatar size={73} src={imgUrl} />
              ) : (
                <Avatar size={73}>
                  <span css={css`font-size: 25px;`}>{name.split("")[0]}</span>
                </Avatar>
              )}
            </>
          )}
          <div>
            {editMode ?
              <Input placeholder="Username" value={editName} onChange={e => setEditName(e.target.value)} css={css`width: 250px; display: block;`} />
            :
              <Typography.Title level={2} css={css`font-size: 16px; color: var(--text-color); margin: 0; font-weight: 500;`}>{name}</Typography.Title>
            }
            <Typography.Text level={3} css={css`font-size: 14px; color: var(--secondary-color); margin: 0; padding-top: 5px;`}>{email}</Typography.Text>
          </div>
        </>
      )}
    </Flex>
  )
}

export default ProfileGeneral