import { css } from "@emotion/react"
import { Collapse } from "antd"
import { GrFormPrevious } from "react-icons/gr";
import LandingFAQAnimation from "../animation/LandingFAQAnimation";

const LandingFAQ = () => {
  const content = [
    {
      title: 'Apakah bisa membatalkan booking?',
      answer: 'Ya, booking dapat dibatalkan selama pembayaran belum dilakukan. Setelah pembayaran terkonfirmasi, pembatalan tidak dapat diproses.'
    },
    {
      title: 'Bagaimana cara pembayarannya?',
      answer: 'Tersedia dua metode pembayaran, yaitu pembayaran online (melalui e-wallet, transfer bank, dan metode digital lainnya) serta pembayaran langsung di lokasi saat datang.'
    },
    {
      title: 'Apakah ada refund?',
      answer: 'Untuk saat ini, kami belum menyediakan layanan refund. Pastikan jadwal yang Anda pilih sudah sesuai sebelum melakukan pembayaran.'
    },
    {
      title: 'Apakah bisa booking lebih dari 1 jam?',
      answer: 'Sistem kami saat ini belum mendukung pemesanan lebih dari 1 jam atau 1 sesi dalam sekali booking. Jika Anda membutuhkan waktu lebih lama, silakan melakukan pemesanan terpisah untuk dua jam atau lebih.'
    },
    {
      title: 'Bagaimana jika hujan?',
      answer: 'Jika terjadi hujan, Anda dapat menghubungi admin untuk melakukan penjadwalan ulang sesuai dengan ketersediaan lapangan.'
    },
  ]

  return (
    <section css={css`margin: 50px 12px 0 12px`}>
      <LandingFAQAnimation marginView={200}>
        <h1 align="center" css={css`font-size: 24px; font-weight: bold; color: var(--text-color);`}>FAQ (Frequently Asked Question)</h1>
        <div css={css`max-width: 615px; margin: 40px auto 0 auto;`}>
          {
            content.map((item, index) => (
              <Collapse
                key={index}
                size="large"
                items={[{ key: '1', label: <h3 css={css`font-size: 15px; font-weight: 500; color: var(--text-color);`}>{item.title}</h3>, children: <p>{item.answer}</p> }]}
                expandIcon={({ isActive }) => <GrFormPrevious css={css`font-size: 24px; color: var(--primary-color); transform: rotate(${isActive ? -90 : 0}deg);`} />}
                expandIconPosition="end"
                css={css`margin-bottom: ${index === content.length - 1 ? 0 : '20px'}; box-shadow: 3px 3px 50px 1px rgba(0, 0, 0, 0.1);`}
              />
            ))
          }
        </div>
      </LandingFAQAnimation>
    </section>
  )
}

export default LandingFAQ