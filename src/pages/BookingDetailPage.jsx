import { css } from "@emotion/react"
import { Modal, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import BookingDetailContent from "../components/organism/BookingDetailContent"
import useUserDetailBookingStore from "../store/userDetailBookingStore"
import BookingCreateReview from "../components/organism/BookingCreateReview"
import BookingCancelModal from "../components/organism/BookingCancelModal"

const BookingTitle = () => {
  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Booking</Typography.Title>
}

const BookingDetailPage = () => {
  const navigate = useNavigate()
  const reviewBookingId = useUserDetailBookingStore(state => state.reviewBookingId)
  const reviewFieldId = useUserDetailBookingStore(state => state.reviewFieldId)
  const setReviewBookingId = useUserDetailBookingStore(state => state.setReviewBookingId)
  const setReviewFieldId = useUserDetailBookingStore(state => state.setReviewFieldId)
  const showCancelModal = useUserDetailBookingStore(state => state.showCancelModal)

  const handleCancel = () => {
    navigate('/booking')
  }

  return (<>
    {showCancelModal ? <BookingCancelModal /> : reviewFieldId ? (
      <BookingCreateReview fieldId={reviewFieldId} setFieldId={setReviewFieldId} bookingId={reviewBookingId} setBookingId={setReviewBookingId} />
    ) : (
      <Modal
        open={true}
        centered={true}
        title={<BookingTitle />}
        footer={null}
        width={600}
        destroyOnHidden={true}
        onCancel={handleCancel}
      >
        <BookingDetailContent />
      </Modal>
    )}
  </>)
}

export default BookingDetailPage