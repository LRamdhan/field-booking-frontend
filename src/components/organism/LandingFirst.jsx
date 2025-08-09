import { css } from "@emotion/react"
import fieldImg from '/img/field.jpg'
import kickImg from '/img/kick.svg'
import { Button, Flex } from "antd"
import LandingFirstAnimation from "../animation/LandingFirstAnimation"
import { useRef } from "react"
import { Link } from "react-router-dom"

const LandingFirst = () => {
  const titleElement = useRef()
  const descriptionElement = useRef()
  const buttonElement = useRef()
  const imgElement = useRef()
  const flagElement = useRef()

  return (
    <section style={{backgroundImage: `url(${fieldImg})`, backgroundSize: 'cover', backgroundPosition: 'bottom center'}} css={css`height: calc(100vh - 58px); background-color: var(--primary-color);`}>
      <LandingFirstAnimation title={titleElement} description={descriptionElement} button={buttonElement} img={imgElement} flag={flagElement} css={css`height: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden;`}>
        <Flex align="center" justify="center" css={css`margin: 0 12px; height: 100%; position: relative; @media(min-width: 768px) { width: 961px; justify-content: space-between; }`}>
          <Flex align="center" justify="center" vertical css={css`padding: 0 12px; position: relative; z-index: 1; @media(min-width: 768px) {width: 432px; align-items: flex-start; padding: 0;} @media(min-width: 920px) {width: 500px;}`}>
            <h1 ref={titleElement} align="center" css={css`color: var(--background-color); font-weight: bold; font-size: 33px; @media(min-width: 768px) {text-align: left;}`}>Temukan Lapang Dengan Kualitas Terbaik</h1>
            <h3 ref={descriptionElement} align="center" css={css`font-size: 18px; color: var(--background-color); font-weight: 500; margin-top: 15px; @media(min-width: 768px) {text-align: left; width: 432px;}`}>Pilih lapang dan jadwal dan langsung booking di mana saja!</h3>
            <Link to="/lapang">
              <Button ref={buttonElement} type="primary" size="large" css={css`font-size: 15px; font-weight: 500; margin-top: 26px; transition: none;`}>Pilih Lapang</Button>
            </Link>
          </Flex>
          <div css={css`display: none; width: 550px; position: absolute; bottom: 0; top: 0; right: 0; align-items: center; justify-content: flex-end; @media(min-width: 768px) {display: flex;} `}>
            <img ref={imgElement} src={kickImg} alt="kick" css={css`width: 100%;`} />
          </div>
          <div ref={flagElement} css={css`position: absolute; top: 0; left: 0; display: none; width: 90px; height: 150px; background-image: linear-gradient(180deg,rgba(255, 111, 0, 1) -10%, rgba(255, 111, 0, 0) 100%); @media(min-width: 768px) {display: block;}`}></div>
        </Flex>
      </LandingFirstAnimation>
    </section>
  )
}

export default LandingFirst