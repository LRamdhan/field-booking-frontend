import { css } from "@emotion/react"
import BookingDetailRow from "../molecules/BookingDetailRow"
import FieldPreview from "../molecules/FieldPreview"
import BookingDetailAction from "../molecules/BookingDetailAction"
import { MdOutlinePayment } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { IoQrCode } from "react-icons/io5";
import BookingDetailCreateReview from "../molecules/BookingDetailCreateReview";


const BookingDetailContentStyle = css`
  height: 550px;
  overflow-y: scroll;
  padding-right: 10px;
  ::-webkit-scrollbar {
    width: 5px; /* Width of vertical scrollbar */
    height: 5px; /* Height of horizontal scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 111, 0, .1); /* Track background */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 111, 0, .3); /* Scrollbar handle */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 111, 0, .3); /* Handle on hover */
  }
`

const Divider = () => {
  return (
    <div css={css`width: 100%; height: .5px; background-color: var(--blur-color);`}></div>
  )
}

const BookingDetailContent = () => {
  return (
    <div css={BookingDetailContentStyle}>
      <BookingDetailAction title="Pembayaran" descrption="Silahkan lakukan pembayaran sebelum 17 November 2024" buttonTitle="Bayar" onClick={() => alert('ok')} icon={<MdOutlinePayment css={css`font-size: 17px;`} />} />
      <Divider />
      <BookingDetailRow title="Booking" field1="Status" value1="Pending" field2="Tanggal Booking" value2="17 November 2024" />
      <Divider />
      <BookingDetailRow title="Jadwal" field1="Tanggal" value1="20 November 2024" field2="Jam" value2="09:00 - 10:00 WIB" />
      <Divider />
      <FieldPreview fieldName="Lapang A" location="Indoor" cost={100000} />
      <Divider />
      <BookingDetailRow title="Pembayaran" field1="Metode Pembayaran" value1="Bayar Sekarang" field2="Total" value2="Rp100.000" />
      <Divider />
      <BookingDetailAction title="QR Code" descrption="Silahkan lakukan pembayaran sebelum 17 November 2024" buttonTitle="QR Code" onClick={() => alert('ok')} icon={<IoQrCode css={css`font-size: 15px;`} />} />
      <Divider />
      <BookingDetailAction title="Batalkan Booking" descrption="Silahkan lakukan pembayaran sebelum 17 November 2024" buttonTitle="Batalkan" onClick={() => alert('ok')} icon={<ImCross css={css`font-size: 12px;`} />} />
      <Divider />
      <BookingDetailCreateReview />
    </div>
  )
}

export default BookingDetailContent