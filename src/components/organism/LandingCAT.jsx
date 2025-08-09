import { css } from "@emotion/react"
import { Button, Flex } from "antd"
import CATImg from '/img/cat-img.png'
import LandingCATAnimation from "../animation/LandingCATAnimation"
import { Link } from "react-router-dom"

const LandingCAT = () => {
  return (
    <section css={css`margin: 0 12px;`}>
      <LandingCATAnimation marginView={250}>
        <div css={css`background-color: var(--primary-color); border-radius: 7px; padding: 40px 30px; margin: 0 auto; max-width: 960px; display: flex; @media(min-width: 500px) {justify-content: center;} @media(min-width: 768px) {justify-content: flex-start; position: relative; overflow: hidden;}`}>
          <div css={css`width: 455px; display: flex; flex-direction: column; @media(min-width: 500px) {align-items: center;} @media(min-width: 768px) {align-items: flex-start;}`}>
            <h3 css={css`font-size: 24px; font-weight: bold; color: var(--background-color);`}>Mulai Booking Sekarang</h3>
            <p css={css`font-size: 15px; color: var(--background-color); margin-top: 17px; @media(min-width: 500px) {text-align: center;} @media(min-width: 768px) {text-align: left;}`}>Pesan lapangan futsal favorit Anda hanya dalam beberapa klik dan nikmati permainan tanpa ribet!</p>
            <Flex gap={21} css={css`margin-top: 30px; width: max-content;`}>
              <Link to="/register">
                <Button type="primary" css={css`background-color: var(--text-color); color: var(--background-color); font-size: 15px; font-weight: 500;`}>Daftar</Button>
              </Link>
              <Link to="/lapang">
                <Button type="primary" css={css`background-color: var(--text-color); color: var(--background-color); font-size: 15px; font-weight: 500;`}>Cari Lapang</Button>
              </Link>
            </Flex>
          </div>
          <img src={CATImg} alt="lapang" css={css`display: none; position: absolute; height: 100%; right: 0; top: 0; @media(min-width: 768px) {display: block; transform: translateX(35%);} @media(min-width: 900px) {transform: translateX(15%);} @media(min-width: 1000px) {transform: translateX(0);}`} />
        </div>
      </LandingCATAnimation>
    </section>
  )
}

export default LandingCAT