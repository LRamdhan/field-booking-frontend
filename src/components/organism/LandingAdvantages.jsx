import { css } from "@emotion/react"
import { Ri24HoursFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import LandingAdvantagesAnimation from "../animation/LandingAdvantagesAnimation";

const Advantage = ({ icon, title, descrition }) => {
  return (
    <div>
      <div css={css`padding: 15px; background-color: #F0C7A6; border-radius: 100px; width: max-content;`}>
        {<icon.value css={css`font-size: 32px; color: var(--text-color);`} />}
      </div>
      <h2 css={css`font-size: 18px; font-weight: bold; color: var(--text-color); margin-top: 20px;`}>{title}</h2>
      <p css={css`font-size: 15px; color: var(--text-color); margin-top: 10px;`}>{descrition}</p>
    </div>
  )
}

const pointStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  row-gap: 50px;
  column-gap: 30px;

  @media(min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    width: 960px;
  }
`

const LandingAdvantages = () => {
  const advantagesContent = [
    {
      icon: {value: Ri24HoursFill},
      title: 'Booking Online 24/7',
      descrition: 'Pesan lapangan kapan saja tanpa batas waktu, langsung dari website, tanpa perlu datang atau telepon.'
    },
    {
      icon: {value: IoMdEye},
      title: 'Lihat Ketersediaan Real-time',
      descrition: 'Cek jadwal lapangan yang masih kosong secara langsung sehingga tidak terjadi bentrok pemesanan.'
    },
    {
      icon: {value: MdPayment},
      title: 'Sistem Pembayaran Mudah',
      descrition: 'Bayar booking dengan berbagai metode praktis seperti transfer bank, e-wallet, atau langsung di lokasi.'
    },
  ]

  return (
    <section css={css`margin: 75px 12px 0 12px; @media(min-width: 768px) {display: flex; justify-content: center; align-items: center;}`}>
      <LandingAdvantagesAnimation marginView={250} css={pointStyle}>
        {
          advantagesContent.map((item, index) => (
            <Advantage key={index} icon={item.icon} title={item.title} descrition={item.descrition} />
          ))
        }
      </LandingAdvantagesAnimation>
    </section>
  )
}

export default LandingAdvantages