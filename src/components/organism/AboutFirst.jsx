import { css } from "@emotion/react"
import aboutUsImg from "/img/about-us.svg"
import AboutFirstAnimation from "../animation/AboutFirstAnimation"

const AboutFirst = () => {

  return (
    <section css={css`margin-top: 43px;`}>
      <AboutFirstAnimation css={css`display: flex; justify-content: center; align-items: center; flex-direction: column;`}>
        <h1 css={css`font-size: 32px; font-weight: bold; color: var(--text-color); padding: 0 12px;`}>Tentang Kami</h1>
        <p css={css`max-width: 482px; font-size: 18px; font-weight: 500; color: var(--text-color); text-align: center; margin-top: 20px; padding: 0 12px;`}>Kami menyediakan lapangan futsal dan layanan booking secara online dengan proses cepat, mudah, dan transparan.</p>
        <div css={css`margin-top: 43px; position: relative; width: 100%; display: flex; justify-content: center; align-items: center;`}>
          <img src={aboutUsImg} alt="Tentang Kami" css={css`max-width: 100%; position: relative; z-index: 5; padding: 0 12px;`} />
          <div css={css`width: 100%; background-color: #FFE5D0; height: 80px; position: absolute; top: 77%;`}></div>
        </div>
      </AboutFirstAnimation>
    </section>
  )
}

export default AboutFirst