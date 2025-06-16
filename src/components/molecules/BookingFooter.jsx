import { css } from "@emotion/react"
import { Button, Typography, Flex, notification } from "antd"
import useFieldDetailStore from "../../store/fieldDetailStore"
import { convertCost } from "../../utils/cost.utils"
import useBookingStore from "../../store/bookingStore"
import dayjs from "dayjs"
import { formatHourRangeFull } from "../../utils/field.utils"
import { useCreateBooking } from "../../hook/booking.hooks"
import { MdOutlineError } from "react-icons/md";
import UnauthorizeError from "../../exception/UnauthorizeError"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const BookingFooter = () => {
  const cost = useFieldDetailStore(state => state.cost)
  const fieldId = useFieldDetailStore(state => state.id)
  const fieldName = useFieldDetailStore(state => state.name)
  const selectedDate = useBookingStore(state => state.selectedDate)
  const selectedHour = useBookingStore(state => state.selectedHour)
  const setSelectedHour = useBookingStore(state => state.setSelectedHour)
  const selectedPaymentType = useBookingStore(state => state.selectedPaymentType)
  const setPoaSuccess = useBookingStore(state => state.setPoaSuccess)
  const setBookingId = useBookingStore(state => state.setBookingId)
  const [api, contextHolder] = notification.useNotification();
  const location = useLocation();
  const navigate = useNavigate()
  const { mutate: createBooking, isPending, error: bookingError, isSuccess, data } = useCreateBooking(fieldId)

  const handleBooking = async () => {
    // if data isn't complete -> show alert
    if(!selectedDate || !selectedHour || !selectedPaymentType) {
      api.error({
        message: 'Lengkapi semua opsi pilihan',
        description: 'Pastikan anda telah memilih tanggal, jam, dan metode pembayaran',
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
      return
    }

    // run create booking
    const selectedSchedule = (dayjs(selectedDate).hour(Number(selectedHour))).valueOf()
    createBooking({
      field_id: fieldId,
      schedule: selectedSchedule,
      payment_type: selectedPaymentType
    })
  }

  useEffect(() => {
    if(isSuccess && data?.data?.data) {
      const response = data.data.data
      if(!response.payment_token) { // if success with POA -> show popup success with option to see detail or continue browsing
        setPoaSuccess(true)
        setBookingId(response.booking_id)
      } else { // if success with ONLINE -> redirect to user booking page and show midtrans popup
        navigate('/booking/' + response.booking_id + '/bayar', {state: { payment_token: response.payment_token, fieldId: fieldId, fieldName: fieldName}}) // here
      }
    }
  }, [isSuccess, data])

  useEffect(() => {
    if(bookingError) {
      // if(error instanceof refreshtokenerror) -> redirect to login and forward callback url
      if(bookingError instanceof UnauthorizeError && bookingError.code === 401) {
        navigate('/login', { state: { from: location.pathname + location.search } })
      } else if(bookingError.status === 409) { // else if(error.status === 409) -> show alert & revalidate hour option
        // show alert
        api.error({
          message: 'Jam tidak tersedia',
          description: 'Orang lain sudah terlebih dahulu memesan jam ini',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
        // set selected hour to null
        setSelectedHour(null)
      } else { // else if(error === other) -> show alert
        api.error({
          message: 'Terjadi kesalahan',
          description: 'Silahkan coba lagi nanti',
          placement: 'top',
          icon: <MdOutlineError color="#E5342F" size={24} />
        })
      }
    }
  }, [bookingError])

  return (<>
    {contextHolder}
    <Flex justify="space-between" align="center" css={css`border-top: 1px solid var(--blur-color); padding-top: 20px;`}>
      <div align="start">
        <Typography.Title css={css`font-size: 15px; color: var(--text-color); font-weight: 500; margin: 0;`}>Rp{cost && convertCost(cost)}</Typography.Title>
        <Typography.Text css={css`font-size: 14px; color: var(--text-color);`}>{selectedDate ? dayjs(selectedDate).format('dddd DD MMM') : '-'} | {selectedHour ? formatHourRangeFull(selectedHour) : '-' }</Typography.Text>
      </div>
      <Button type="primary" size="large" onClick={handleBooking} loading={isPending} css={css`font-size: 15px; font-weight: 500; color: var(--background-color);`}>Booking</Button>
    </Flex>
  </>)
}

export default BookingFooter 