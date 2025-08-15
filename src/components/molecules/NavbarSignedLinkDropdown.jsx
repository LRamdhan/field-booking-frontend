import { css } from "@emotion/react"
import { Avatar, Dropdown, Skeleton, theme } from "antd";
import { IoPersonSharp } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiLockPasswordFill, RiLogoutBoxRLine } from "react-icons/ri";
import useProfileStore from "../../store/profileStore";

const { useToken } = theme;

const NavbarSignedLinkDropdown = ({handleLogout}) => {
  const { token } = useToken();
  const username = useProfileStore(state => state.name)
  const userImgUrl = useProfileStore(state => state.imgUrl)
  const userIsPending = useProfileStore(state => state.isPending)
  const userError = useProfileStore(state => state.error)
  const items = [
    {
      key: '1',
      label: (
        <Link to={'/profile'} css={css`width: 100%; padding: 5px 0; display: flex; align-items: center; gap: 10px;`}>
          <IoPersonSharp css={css`font-size: 20px; color: var(--text-color);`} />
          <span css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>Profile</span>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={'/kata-sandi'} css={css`width: 100%; padding: 5px 0; display: flex; align-items: center; gap: 10px;`}>
          <RiLockPasswordFill css={css`font-size: 20px; color: var(--text-color);`} />
          <span css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>Kata Sandi</span>
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to={'/perangkat'} css={css`width: 100%; padding: 5px 0; display: flex; align-items: center; gap: 10px;`}>
          <MdDevices css={css`font-size: 20px; color: var(--text-color);`} />
          <span css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>Perangkat</span>
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <div onClick={handleLogout} css={css`width: 100%; padding: 5px 0; display: flex; align-items: center; gap: 10px;`}>
          <RiLogoutBoxRLine css={css`font-size: 20px; color: var(--text-color);`} />
          <span css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>Logout</span>
        </div>
      ),
    },
  ];

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: 'none',
  };

  return (
    <Dropdown
      menu={{ items }}
      popupRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(
            menu,
            { style: menuStyle },
          )}
        </div>
      )}
      placement="bottomRight"
    >
      <div css={css`display: none;  @media(min-width: 768px) {display: block; }`}>
        { userIsPending && (<>
          <Skeleton.Avatar active style={{ width: 40, height: 40 }} />
        </>) }
        { userError && (<>
          <div css={css`width: 40px; height: 40px; background-color: var(--blur-color); border-radius: 50%;`}></div>
        </>) }
        { (username && !userError) && (<>
          {userImgUrl ? (
            <img src={`${userImgUrl}`} alt={'foto profile'} css={css`width: 40px; height: 40px; border-radius: 50%; object-fit: cover; object-position: center;`} />
          ) : (
            <Avatar size={40}>
              <span css={css`font-size: 25px;`}>{username.split("")[0]}</span>
            </Avatar>
          )}
        </>) }
      </div>
    </Dropdown>
  )
}

export default NavbarSignedLinkDropdown