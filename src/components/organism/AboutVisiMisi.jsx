import { css } from "@emotion/react"
import about1Img from '/img/about-1.jpg'
import about2Img from '/img/about-2.jpg'
import AboutVisiMisiAnimation from "../animation/AboutVisiMisiAnimation"

const AboutVisiMisi = () => {

  return (
    <section css={css`margin: 120px 12px 0 12px;`}>
      <AboutVisiMisiAnimation>
        <div css={css`max-width: 960px; margin: 0 auto; @media(min-width: 768px) {display: flex; gap: 15px; align-items: center; justify-content: space-between;}`}>
          <div css={css`@media(min-width: 768px) {max-width: 429px;}`}>
            <h2 css={css`font-size: 24px; font-weight: bold; color: var(--text-color);`}>Visi & Misi</h2>
            <p css={css`font-size: 15px; color: var(--text-color); line-height: 25px; margin-top: 24px;`}>Visi kami adalah menjadi pilihan utama bagi para pecinta futsal dengan menghadirkan pengalaman bermain yang seru dan tanpa hambatan. Untuk mewujudkan visi tersebut, kami berkomitmen memberikan pelayanan booking yang praktis dan transparan, menjaga kualitas fasilitas lapangan melalui perawatan rutin, serta memanfaatkan teknologi modern agar proses pemesanan lebih efisien dan nyaman bagi semua pengguna.</p>
          </div>
          <div css={css`max-width: 426px; margin: 110px auto 0 auto; display: flex; gap: 27px; justify-content: center; align-items: center; position: relative; @media(min-width: 768px){margin: 0;}`}>
            <div css={css`width: 200px; aspect-ratio: 200/267; border-radius: 7px; transform: translateY(-30px); background-image: url(${about1Img}); background-size: cover; position: relative; z-index: 5;`}></div>
            <div css={css`width: 200px; aspect-ratio: 200/267; border-radius: 7px; transform: translateY(30px); background-image: url(${about2Img}); background-size: cover; position: relative; z-index: 5;`}></div>
            <div css={css`width: 150px; aspect-ratio: 1/1; background-color: var(--primary-color); border-radius: 50%; position: absolute; bottom: -45px;`}></div>
          </div>
        </div>
      </AboutVisiMisiAnimation>
    </section>
  )
}

export default AboutVisiMisi