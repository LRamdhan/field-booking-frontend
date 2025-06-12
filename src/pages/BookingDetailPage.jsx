import { css } from "@emotion/react"
import { Modal, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import BookingDetailContent from "../components/organism/BookingDetailContent"

const BookingTitle = () => {
  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Booking</Typography.Title>
}

const BookingDetailPage = () => {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/booking')
  }

  return (<>
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
  </>)
}

export default BookingDetailPage