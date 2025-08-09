import { css } from "@emotion/react"
import { Link, useNavigate } from "react-router-dom"
import { Avatar, Button, ConfigProvider, Drawer, Flex, Skeleton, Space, notification } from "antd";
import userApi from "../../api/userApi";
import { MdOutlineError } from "react-icons/md";
import Logo from "../atom/Logo";
import Hamberger from "../atom/Hamberger";
import { useState } from "react";
import { IoMdHome, IoMdNotifications } from "react-icons/io";
import { TbSoccerField } from "react-icons/tb";
import { IoBookmarks } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import NavbarSignedLinkDropdown from "../molecules/NavbarSignedLinkDropdown";
import { useProfile } from "../../hook/user.hooks";
import useProfileStore from "../../store/profileStore";
import CloseButton from "../atom/CloseButton";

const drawerStyles = {
  header: {
    padding: '0'
  },
};

const NavbarSigned = () => {
  const navigate = useNavigate()
  const [api, contextHolder] = notification.useNotification();
  const [open, setOpen] = useState(false);
  const username = useProfileStore(state => state.name)
  const userImgUrl = useProfileStore(state => state.imgUrl)
  const userIsPending = useProfileStore(state => state.isPending)
  const userError = useProfileStore(state => state.error)
  const linkCenter = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Lapang",
      path: "/lapang",
    },
    {
      name: "Booking",
      path: "/booking",
    },
  ]
  const linkList = [
    {
      name: "Dashboard",
      path: "/",
      icon: IoMdHome
    },
    {
      name: "Lapang",
      path: "/lapang",
      icon: TbSoccerField
    },
    {
      name: "Booking",
      path: "/booking",
      icon: IoBookmarks
    },
    {
      name: "Profile",
      path: "/profile",
      icon: IoPersonSharp
    },
    {
      name: "Kata Sandi",
      path: "/kata-sandi",
      icon: RiLockPasswordFill
    },
    {
      name: "Perangkat",
      path: "/perangkat",
      icon: MdDevices
    },
  ]

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await userApi.logout()
      onClose()
      navigate('/login')
    } catch(err) {
      if(err.response?.status === 401) {
        onClose()
        navigate('/login')
      }
      api.error({
        message: 'Logout Gagal',
        description: "Terjadi error, silahkan coba lagi nanti",
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
    }
  }

  useProfile()

  return (
    <>
      {contextHolder}
      <div css={css`height: 58px; width: 100%;`}></div>
      <nav css={css`border-bottom: .5px solid var(--blur-color); position: fixed; top: 0; left: 0; right: 0; z-index: 999; background-color: var(--background-color); @media(min-width: 768px) { display: flex; justify-content: center; }`}>
        <Flex align="center" justify="space-between" css={css`height: 58px; margin: 0 12px; @media(min-width: 768px) {justify-content: flex-start; width: 961px; }`}>
          <div css={css`padding: 13px 0;`}>
            <Logo />
          </div>
          <Space size={48} css={css`display: none; margin-left: 65px; @media(min-width: 768px) {display: flex; }`}>
            {
              linkCenter.map((item, index) => (
                <Link key={index} to={item.path} css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>
                  {item.name}
                </Link>
              ))
            }
          </Space>
          <Flex gap={24} align="center" justify="flex-end" css={css`@media(min-width: 768px) {flex-grow: 1; }`}>
            <Button icon={<IoMdNotifications css={css`font-size: 24px;`} />} css={css`border: none; outline: none; background-color: transparent; box-shadow: none;`} />
            <Hamberger onClick={showDrawer} css={css`@media(min-width: 768px) {display: none; }`} />
            <NavbarSignedLinkDropdown handleLogout={handleLogout} />
          </Flex>
        </Flex>
      </nav>
      <ConfigProvider
        drawer={{
          styles: drawerStyles,
        }}
      >
        <Drawer
          title={
            <div css={css`position: relative; padding: 25px 24px; background-color: var(--primary-color);`}>
              <div css={css`position: absolute; top: 15px; right: 15px;`}>
                <CloseButton onClick={onClose} color={'var(--background-color)'} />
              </div>
              { userIsPending && (<>
                <Skeleton.Avatar active style={{ width: 65, height: 65 }} />
                <Skeleton active paragraph={{ rows: 0 }} css={css`margin-top: 15px;`} />
              </>) }
              { userError && (<>
                <div css={css`width: 50px; height: 50px; background-color: var(--blur-color); border-radius: 50%;`}></div>
                <h4 css={css`font-size: 17px; font-weight: 500; color: var(--background-color); margin-top: 13px;`}>...</h4>
              </>) }
              { username && (<>
                {userImgUrl ? (
                  <Avatar size={65} src={userImgUrl} />
                ) : (
                  <Avatar size={65}>
                    <span css={css`font-size: 25px;`}>{username.split("")[0]}</span>
                  </Avatar>
                )}
                <h4 css={css`font-size: 17px; font-weight: 500; color: var(--background-color); margin-top: 13px;`}>{username}</h4>
              </>) }
            </div>
          }
          width={320}
          closable={false}
          onClose={onClose}
          open={open}
        >
          {
            linkList.map((item, index) => (
              <Link key={index} to={item.path} onClick={onClose} css={css`width: 100%; padding: 15px 0; display: flex; align-items: center; gap: 10px;`}>
                <item.icon css={css`font-size: 25px; color: var(--text-color);`} />
                <span css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>{item.name}</span>
              </Link>
            ))
          }
          <div onClick={handleLogout} css={css`width: 100%; padding: 15px 0; display: flex; align-items: center; gap: 10px; cursor: pointer;`}>
            <RiLogoutBoxRLine css={css`font-size: 25px; color: var(--text-color);`} />
            <span css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>Logout</span>
          </div>
        </Drawer>
      </ConfigProvider>
    </>
  )
}

export default NavbarSigned