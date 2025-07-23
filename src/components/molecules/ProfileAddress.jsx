import { css } from "@emotion/react"
import { Flex, Input, Typography, Skeleton } from "antd"
import useProfileStore from "../../store/profileStore"

const ProfileAddress = () => {
  const editMode = useProfileStore(state => state.editMode)
  const city = useProfileStore(state => state.city)
  const district = useProfileStore(state => state.district)
  const subDistrict = useProfileStore(state => state.subDistrict)
  const editCity = useProfileStore(state => state.editCity)
  const setEditCity = useProfileStore(state => state.setEditCity)
  const editDistrict = useProfileStore(state => state.editDistrict)
  const setEditDistrict = useProfileStore(state => state.setEditDistrict)
  const editSubDistrict = useProfileStore(state => state.editSubDistrict)
  const setEditSubDistrict = useProfileStore(state => state.setEditSubDistrict)
  const isPending = useProfileStore(state => state.isPending)

  return (
    <div css={css`margin-top: 30px; padding: 25px 16px; border: .5px solid var(--blur-color); border-radius: 7px;`}>
      {isPending ?
        <Skeleton active paragraph={{ rows: 3 }} />
      :
        <>
          <Typography.Title css={css`font-size: 15px; color: var(--text-color); margin: 0; font-weight: 500;`}>Alamat</Typography.Title>
          <Flex wrap gap={35} css={css`margin-top: 25px;`}>
            <div css={css`width: 250px;`}>
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); margin: 0;`}>Kabupaten</Typography.Text>
              <div css={css`margin-top: 9px;`}>
                {editMode ?
                  <Input placeholder="Kabupaten" value={editCity} onChange={e => setEditCity(e.target.value)} css={css`width: 100%; font-size: 15px; display: block;`} />
                :
                  <Typography.Title level={3} css={css`font-size: 15px; color: var(--text-color); margin: 0; font-weight: 500;`}>{city ? city : "-"}</Typography.Title>
                }
              </div>
            </div>
            <div css={css`width: 230px;`}>
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); margin: 0;`}>Kecamatan</Typography.Text>
              <div css={css`margin-top: 9px;`}>
                {editMode ?
                  <Input placeholder="Kecamatan" value={editDistrict} onChange={e => setEditDistrict(e.target.value)} css={css`width: 100%; font-size: 15px; display: block;`} />
                :
                  <Typography.Title level={3} css={css`font-size: 15px; color: var(--text-color); margin: 0; font-weight: 500;`}>{district ? district : "-"}</Typography.Title>
                }
              </div>
            </div>
            <div css={css`width: 250px;`}>
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); margin: 0;`}>Desa</Typography.Text>
              <div css={css`margin-top: 9px;`}>
                {editMode ?
                  <Input placeholder="Desa" value={editSubDistrict} onChange={e => setEditSubDistrict(e.target.value)} css={css`width: 100%; font-size: 15px; display: block;`} />
                :
                  <Typography.Title level={3} css={css`font-size: 15px; color: var(--text-color); margin: 0; font-weight: 500;`}>{subDistrict ? subDistrict : "-"}</Typography.Title>
                }
              </div>
            </div>
          </Flex>
        </>
      }
    </div>
  )
}

export default ProfileAddress