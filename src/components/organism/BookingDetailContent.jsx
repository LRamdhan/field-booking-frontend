import { css } from "@emotion/react"
import BookingDetailRow from "../molecules/BookingDetailRow"
import FieldPreview from "../molecules/FieldPreview"
import BookingDetailAction from "../molecules/BookingDetailAction"
import { MdOutlinePayment } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { IoQrCode } from "react-icons/io5";
import BookingDetailCreateReview from "../molecules/BookingDetailCreateReview";
import { useGetDetailUserBooking } from "../../hook/booking.hooks";
import { useNavigate, useParams } from "react-router-dom";
import useUserDetailBookingStore from "../../store/userDetailBookingStore";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import FetchError from "../molecules/FetchError";
import PAYMENT_TYPE from "../../constant/paymentType";
import BOOKING_STATUS from "../../constant/bookingStatus";
import dayjs from "dayjs";
import { formatHourRangeFull } from "../../utils/field.utils";
import { convertCost } from "../../utils/cost.utils";

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
  const { id: bookingId } = useParams()
  const isPending = useUserDetailBookingStore(state => state.isPending)
  const error = useUserDetailBookingStore(state => state.error)
  const refetch = useUserDetailBookingStore(state => state.refetch)
  const status = useUserDetailBookingStore(state => state.status)
  const payment_type = useUserDetailBookingStore(state => state.payment_type)
  const payment_token = useUserDetailBookingStore(state => state.payment_token)
  const created_date = useUserDetailBookingStore(state => state.created_date)
  const schedule = useUserDetailBookingStore(state => state.schedule)
  const isReviewed = useUserDetailBookingStore(state => state.isReviewed)
  const total = useUserDetailBookingStore(state => state.total)
  const field = useUserDetailBookingStore(state => state.field)
  const navigate = useNavigate()
  const parsedCreatedDate = dayjs(created_date).format('DD MMMM YYYY')
  const parsedSchedule = dayjs(schedule)
  const setShowCancelModal = useUserDetailBookingStore(state => state.setShowCancelModal)

  const handlePay = () => {
    navigate(`/booking/${bookingId}/bayar`, {state: {payment_token, fieldId: field?.id, fieldName: field?.name}})
  }

  const handleCancelBooking = () => {
    setShowCancelModal(true)
  }

  const handleQrCode = () => {
    navigate(`/booking/${bookingId}/qr-code`)
  }

  useGetDetailUserBooking(bookingId)

  return (
    <div css={BookingDetailContentStyle}>
      {isPending && (
        <Flex justify="center" align="center" css={css`width: 100%; height: 300px;`}>
          <Spin size="large" indicator={<LoadingOutlined spin />} />
        </Flex>
      )}
      {error && <FetchError refetch={() => refetch()} />}
      {((status === BOOKING_STATUS.PENDING) && (payment_type !== PAYMENT_TYPE.POA)) && (
        <>
          <BookingDetailAction loading={false} title="Pembayaran" descrption="Silahkan lakukan pembayaran sebelum 17 November 2024" buttonTitle="Bayar" onClick={() => handlePay()} icon={<MdOutlinePayment css={css`font-size: 17px;`} />} />
          <Divider />
        </>
      )}
      {status && (
        <>
          <BookingDetailRow title="Booking" field1="Status" value1={status} field2="Tanggal Booking" value2={parsedCreatedDate} />
          <Divider />
          <BookingDetailRow title="Jadwal" field1="Tanggal" value1={parsedSchedule.format('DD MMMM YYYY')} field2="Jam" value2={formatHourRangeFull(parsedSchedule.hour()) + ' WIB'} />
          <Divider />
          <FieldPreview />
          <Divider />
          <BookingDetailRow title="Pembayaran" field1="Metode Pembayaran" value1={payment_type === PAYMENT_TYPE.POA ? 'Bayar Di Tempat' : payment_type} field2="Total" value2={'Rp'+ convertCost(total)} />
        </>
      )}
      {status === BOOKING_STATUS.AKTIF && (
        <>
          <Divider />
          <BookingDetailAction loading={false} title="QR Code" descrption="Silahkan lakukan pembayaran sebelum 17 November 2024" buttonTitle="QR Code" onClick={handleQrCode} icon={<IoQrCode css={css`font-size: 15px;`} />} />
        </>
      )}
      {status === BOOKING_STATUS.PENDING && (
        <>
          <Divider />
          <BookingDetailAction title="Batalkan Booking" descrption="Silahkan lakukan pembayaran sebelum 17 November 2024" buttonTitle="Batalkan" onClick={handleCancelBooking} icon={<ImCross css={css`font-size: 12px;`} />} />
        </>
      )}
      {(status === BOOKING_STATUS.SELESAI && !isReviewed) && (
        <>
          <Divider />
          <BookingDetailCreateReview />
        </>
      )}  
    </div>
  )
}

export default BookingDetailContent