import { css } from "@emotion/react"
import { Link } from "react-router-dom"
import Logo from "../atom/Logo"
import { Flex, Drawer, Button, Space } from "antd"
import Hamberger from "../atom/Hamberger"
import { useState } from "react"
import CloseButton from "../atom/CloseButton"
import { IoMdHome } from "react-icons/io";
import { TbSoccerField } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import SwipeDown from "../animation/SwipeDown"

const NavbarUnsigned = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const link = [
    {
      name: "Home",
      path: "/",
      icon: IoMdHome
    },
    {
      name: "Lapang",
      path: "/lapang",
      icon: TbSoccerField
    },
    {
      name: "Tentang Kita",
      path: "/tentang-kita",
      icon: IoBusiness
    },
  ]

  return (
    <div>
      <div css={css`height: 58px; width: 100%;`}></div>
      <nav css={css`border-bottom: .5px solid var(--blur-color); position: fixed; top: 0; left: 0; right: 0; z-index: 999; background-color: var(--background-color);`}>
        <SwipeDown css={css` @media(min-width: 768px) { display: flex; justify-content: center; }`}>
          <Flex align="center" justify="space-between" css={css`height: 58px; margin: 0 12px; @media(min-width: 768px) { justify-content: flex-start; width: 961px; }`}>
            <div css={css`padding: 13px 0;`}>
              <Logo />
            </div>
            <Hamberger onClick={showDrawer} css={css`@media(min-width: 768px) {display: none; }`} />
            <Space size={48} css={css`display: none; margin-left: 65px; @media(min-width: 768px) {display: flex; }`}>
              {
                link.map((item, index) => (
                  <Link key={index} to={item.path} css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>
                    {item.name}
                  </Link>
                ))
              }
            </Space>
            <div css={css`display: none; gap: 15px; flex-grow: 1; justify-content: flex-end; @media(min-width: 768px) {display: flex; }`}>
              <Link to="/login" onClick={onClose} css={css`width: 100px; display: inline-block;`}>
                <Button color="primary" variant="outlined" css={css`width: 100%; font-weight: 500; font-size: 15px;`}>Login</Button>
              </Link>
              <Link to="/register" onClick={onClose} css={css`width: 100px; display: inline-block;`}>
                <Button type="primary" css={css`width: 100%; font-weight: 500; font-size: 15px;`}>Register</Button>
              </Link>
            </div>




          </Flex>
        </SwipeDown>
      </nav>
      <Drawer
        title={
          <Flex justify="space-between" align="center">
            <Logo />
            <CloseButton onClick={onClose} />
          </Flex>
        }
        width={320}
        closable={false}
        onClose={onClose}
        open={open}
      >
        {
          link.map((item, index) => (
            <Link key={index} to={item.path} onClick={onClose} css={css`width: 100%; padding: 15px 0; display: flex; align-items: center; gap: 10px;`}>
              <item.icon css={css`font-size: 25px; color: var(--text-color);`} />
              <span css={css`font-size: 15px; color: var(--text-color); font-weight: 500;`}>{item.name}</span>
            </Link>
          ))
        }
        <Link to="/register" onClick={onClose} css={css`width: 100%; display: block; margin-top: 30px;`}>
          <Button type="primary" size="large" css={css`width: 100%; font-weight: 500; font-size: 15px;`}>Register</Button>
        </Link>
        <Link to="/login" onClick={onClose} css={css`width: 100%; display: block; margin-top: 20px;`}>
          <Button color="primary" variant="outlined"size="large" css={css`width: 100%;font-weight: 500; font-size: 15px;`}>Login</Button>
        </Link>
      </Drawer>
    </div>
  )
}

export default NavbarUnsigned