import { css } from "@emotion/react"
import { Button, Flex } from "antd"
import notFoundImg from '/img/not-found.svg'
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main css={css`padding: 30px 12px; height: calc(100vh - 58px);`}>
      <Flex vertical align="center" justify="center" css={css`height: 100%; width: 100%;`}>
        <img src={notFoundImg} alt="Not Found" css={css`width: 350px;`} />
        <p css={css`font-size: 18px; color: var(--text-color); margin-top: 50px;`}>Halaman yang anda cari tidak ditemukan</p>
        <Link to="/">
          <Button type="primary" icon={<IoArrowBackOutline css={css`font-size: 15px; color: var(--background-color);`} />} css={css`margin-top: 25px; font-weight: bold; font-size: 15px;`}>Kembali</Button>
        </Link>
      </Flex>
    </main>
  )
}

export default NotFoundPage