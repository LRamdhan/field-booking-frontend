import { css } from "@emotion/react"
import about3Img from '/img/about-3.jpg'
import about4Img from '/img/about-4.jpg'
import AboutWhyChooseUsAnimation from "../animation/AboutWhyChooseUsAnimation"

const AboutWhyChooseUs = () => {

  return (
    <section css={css`margin: 130px 12px 0 12px;`}>
      <AboutWhyChooseUsAnimation>
        <div css={css`max-width: 960px; margin: 0 auto; @media(min-width: 768px) {display: flex; align-items: center; gap: 15px; justify-content: space-between;}`}>
          <div css={css`@media(min-width: 768px) {max-width: 429px; order: 2;}`}>
            <h2 css={css`font-size: 24px; font-weight: bold; color: var(--text-color);`}>Kenapa Memilih Kami?</h2>
            <p css={css`font-size: 15px; color: var(--text-color); line-height: 25px; margin-top: 24px;`}>Kami menawarkan kemudahan booking lapangan futsal kapan saja melalui sistem online 24/7, sehingga Anda tidak perlu repot datang langsung untuk memesan. Jadwal ketersediaan lapangan dapat dilihat secara real-time, meminimalkan risiko bentrok jadwal. Proses pembayaran juga fleksibel dengan berbagai metode, mulai dari e-wallet hingga pembayaran di lokasi. Selain itu, lapangan kami selalu terawat dan siap digunakan, memberikan kenyamanan dan pengalaman bermain terbaik untuk Anda dan tim.</p>
          </div>
          <div css={css`max-width: 426px; margin: 110px auto 0 auto; display: flex; gap: 27px; justify-content: center; align-items: center; position: relative; @media(min-width: 768px){margin: 0; order: 1;}`}>
            <div css={css`width: 299px; aspect-ratio: 299/280; border-radius: 7px; transform: translateY(-30px); background-image: url(${about3Img}); background-size: cover; position: relative; z-index: 5;`}></div>
            <div css={css`width: 153px; aspect-ratio: 153/231; border-radius: 7px; transform: translateY(30px); background-image: url(${about4Img}); background-size: cover; position: relative; z-index: 5;`}></div>
            <div css={css`width: 150px; aspect-ratio: 1/1; background-color: var(--primary-color); border-radius: 50%; position: absolute; bottom: 0 top: 0; transform: scale(1.5);`}></div>
          </div>
        </div>
      </AboutWhyChooseUsAnimation>
    </section>
  ) 
}

export default AboutWhyChooseUs