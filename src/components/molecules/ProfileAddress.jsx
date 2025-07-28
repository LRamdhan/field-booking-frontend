import { css } from "@emotion/react"
import { Flex, Typography, Skeleton } from "antd"
import useProfileStore from "../../store/profileStore"
import ProfileSelectCity from "../atom/ProfileSelectCity"
import ProfileSelectDistrict from "../atom/ProfileSelectDistrict"
import ProfileSelectSubDistrict from "../atom/ProfileSelectSubDistrict"

const ProfileAddress = () => {
  const editMode = useProfileStore(state => state.editMode)
  const city = useProfileStore(state => state.city)
  const district = useProfileStore(state => state.district)
  const subDistrict = useProfileStore(state => state.subDistrict)
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
                  <ProfileSelectCity />
                :
                  <Typography.Title level={3} css={css`font-size: 15px; color: var(--text-color); margin: 0; font-weight: 500;`}>{city.name ? city.name : "-"}</Typography.Title>
                }
              </div>
            </div>
            <div css={css`width: 230px;`}>
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); margin: 0;`}>Kecamatan</Typography.Text>
              <div css={css`margin-top: 9px;`}>
                {editMode ?
                  <ProfileSelectDistrict />
                :
                  <Typography.Title level={3} css={css`font-size: 15px; color: var(--text-color); margin: 0; font-weight: 500;`}>{district.name ? district.name : "-"}</Typography.Title>
                }
              </div>
            </div>
            <div css={css`width: 250px;`}>
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); margin: 0;`}>Desa</Typography.Text>
              <div css={css`margin-top: 9px;`}>
                {editMode ?
                  <ProfileSelectSubDistrict />
                :
                  <Typography.Title level={3} css={css`font-size: 15px; color: var(--text-color); margin: 0; font-weight: 500;`}>{subDistrict.name ? subDistrict.name : "-"}</Typography.Title>
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