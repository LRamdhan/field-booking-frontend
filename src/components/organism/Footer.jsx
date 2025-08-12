import { css } from "@emotion/react"
import LogoImg from "/img/logo.svg"
import { Link } from "react-router-dom"
import { Flex } from "antd";
import { FaRegCopyright } from "react-icons/fa6";
import FooterAnimation from "../animation/FooterAnimation";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

const contentStyle = css`
  margin-top: 40px;

  @media(min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content;
    grid-auto-rows: max-content;
    gap: 30px;
  }

  @media(min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(min-width: 1000px) {
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(4, max-content);
    gap: 80px;
  }
`

const Footer = () => {
  return (
    <footer css={css`padding: 0 12px;`}>
      <FooterAnimation>
        <hr css={css`border: none; border-top: 1px solid #E5E5E5; margin: 0 auto; max-width: 960px;`} />
        <div css={contentStyle}>
          <div css={css`width: 190px;`}>
            <img src={LogoImg} alt="LapangKu" css={css`width: 140px;`} />
            <p css={css`font-size: 14px; color: var(--text-color); margin-top: 13px;`}>Main Tanpa Ribet, Booking Sekejap!</p>
          </div>
          <div css={css`margin-top: 30px; @media(min-width: 500px) {margin-top: 0;}`}>
            <h4 css={css`font-size: 14px; color: var(--text-color); font-weight: bold;`}>Company</h4>
            <Link to="#" css={css`margin-top: 16px; display: block; font-size: 14px; color: var(--text-color)`}>Tentang Kami</Link>
            <Link to="#" css={css`margin-top: 11px; display: block; font-size: 14px; color: var(--text-color)`}>Kontak</Link>
            <Link to="#" css={css`margin-top: 11px; display: block; font-size: 14px; color: var(--text-color)`}>Karier</Link>
            <Link to="#" css={css`margin-top: 11px; display: block; font-size: 14px; color: var(--text-color)`}>Blog</Link>
          </div>
          <div css={css`margin-top: 30px; @media(min-width: 500px) {margin-top: 0;}`}>
            <h4 css={css`font-size: 14px; color: var(--text-color); font-weight: bold;`}>Ketentuan dan Pengaturan</h4>
            <Link to="#" css={css`margin-top: 16px; display: block; font-size: 14px; color: var(--text-color)`}>Syarat & Ketentuan</Link>
            <Link to="#" css={css`margin-top: 11px; display: block; font-size: 14px; color: var(--text-color)`}>Kebijakan Privasi</Link>
            <Link to="#" css={css`margin-top: 11px; display: block; font-size: 14px; color: var(--text-color)`}>Kebijakan Pembatalan</Link>
          </div>
          <div css={css`margin-top: 30px; @media(min-width: 500px) {margin-top: 0;}`}>
            <h4 css={css`font-size: 14px; color: var(--text-color); font-weight: bold;`}>Kontak</h4>
            <Link to="mailto:admin@lapangku.com" css={css`margin-top: 16px; display: block; font-size: 14px; color: var(--text-color) width: max-content;`}>
              <Flex gap={10} align="center">
                <IoMdMail css={css`font-size: 20px; color: var(--text-color);`} /> 
                <span css={css`font-size: 14px; color: var(--text-color);`}>admin@lapangku.com</span>
              </Flex>
            </Link>
            <Link to="https://wa.me/6283283728192" css={css`margin-top: 11px; display: block; font-size: 14px; color: var(--text-color) width: max-content;`}>
              <Flex gap={10} align="center">
                <FaWhatsapp css={css`font-size: 20px; color: var(--text-color);`} /> 
                <span css={css`font-size: 14px; color: var(--text-color);`}>083283728192</span>
              </Flex>
            </Link>
          </div>
        </div>
        <hr css={css`border: none; border-top: 1px solid #E5E5E5; margin: 40px auto 0 auto; max-width: 960px;`} />
        <div>
          <Flex align="center" justify="center" gap={5} css={css`height: 70px; font-size: 14px; color: var(--text-color);`}>
            Copyright <FaRegCopyright css={css`font-size: 13px; color: var(--text-color);`} /> 2025 LapangKu
          </Flex>
        </div>
      </FooterAnimation>
    </footer>
  )
}

export default Footer