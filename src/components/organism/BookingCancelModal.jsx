import { css } from "@emotion/react"
import { Button, Col, Flex, Modal, Row, Typography, notification } from "antd"
import useUserDetailBookingStore from "../../store/userDetailBookingStore"
import FieldPreview from "../molecules/FieldPreview"
import { formatHourRangeFull } from "../../utils/field.utils"
import dayjs from "dayjs"
import { useCancelBooking } from "../../hook/booking.hooks"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { MdOutlineError } from "react-icons/md";

const BookingTitle = () => {
  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Batalkan Booking</Typography.Title>
}

const ColHead = ({children}) => {
  return (
    <Typography.Title css={css`font-size: 14px; color: var(--secondary-color); text-transform: capitalize; margin: 0;`}>{children}</Typography.Title>
  )
}

const ColBody = ({children}) => {
  return (
    <Typography.Title css={css`font-size: 15px; color: var(--text-color); text-transform: capitalize; margin: 0;`}>{children}</Typography.Title>
  )
}


const BookingCancelModal = () => {
  const [api, contextHolder] = notification.useNotification();
  const setShowCancelModal = useUserDetailBookingStore(state => state.setShowCancelModal)
  const schedule = useUserDetailBookingStore(state => state.schedule)
  const parsedSchedule = dayjs(schedule)
  const { id: bookingId } = useParams()
  const field = useUserDetailBookingStore(state => state.field)
  const {mutate: cancelBooking, isPending: cancelBookingPending, error: cancelBookingError, isSuccess: cancelBookingSuccess} = useCancelBooking(bookingId, field?.id)
  const navigate = useNavigate()

  const handleCancel = () => {
    setShowCancelModal(false)
  }

  const handleCancelBooking = () => {
    cancelBooking()
  }

  useEffect(() => {
    if(cancelBookingError) {
      api.error({
        message: 'Terjadi Error',
        description: 'Silahkan coba lagi nanti',
        placement: 'top',
        icon: <MdOutlineError color="#E5342F" size={24} />
      })
    }
  }, [cancelBookingPending, cancelBookingError])

  useEffect(() => {
    if(cancelBookingSuccess) {
      setShowCancelModal(false)
      navigate('/booking')
    }
  }, [cancelBookingSuccess])

  return (
    <>
      {contextHolder}
      <Modal
        open={true}
        centered={true}
        title={<BookingTitle />}
        footer={null}
        width={600}
        destroyOnHidden={true}
        onCancel={handleCancel}
      >
        <div css={css`width: 100%; height: 15px;`}></div>
        <Typography.Text css={css`font-size: 15px; color: var(--text-color);`}>Apakah kamu yakin ingin membatalkan booking ini?</Typography.Text>
        <div css={css`width: 100%; border: 1px solid var(--blur-color); border-radius: 5px; padding: 20px 25px; margin-top: 20px;`}>
          <div css={css`padding: 0 16px;`}>
            <Typography.Title css={css`font-size: 15px; color: var(--text-color); font-weight: 500; text-transform: capitalize; margin: 0;`}>Jadwal</Typography.Title>
            <Row css={css`margin: 12px 0 0 0;`}>
              <Col span={12}><ColHead>Tanggal</ColHead></Col>
              <Col span={12}><ColBody>{parsedSchedule.format('DD MMMM YYYY')}</ColBody></Col>
            </Row>
            <Row css={css`margin: 12px 0 0 0;`}>
              <Col span={12}><ColHead>Jam</ColHead></Col>
              <Col span={12}><ColBody>{formatHourRangeFull(parsedSchedule.hour()) + ' WIB'}</ColBody></Col>
            </Row>
          </div>
          <div css={css`margin-top: 18px;`}>
            <FieldPreview />
          </div>
        </div>
        <Flex gap={18} justify="flex-end" css={css`margin-top: 20px;`}>
          <Button type="primary" loading={cancelBookingPending} onClick={handleCancelBooking} css={css`width: 96px;`}>Ya</Button>
          <Button css={css`width: 96px;`} onClick={handleCancel}>Tidak</Button>
        </Flex>
      </Modal>
    </>
  )
}

export default BookingCancelModal