import { css } from '@emotion/react';
import { Modal, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import BookingFooter from '../components/molecules/BookingFooter';
import BookingBody from '../components/organism/BookingBody';

const BookingTitle = () => <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Booking Lapang Z</Typography.Title>

const BookingPage = () => {
  const navigate = useNavigate()
  const {id: fieldId} = useParams()

  const handleCancel = () => {
    navigate('/lapang/' + fieldId)
  }

  return (
    <Modal
      open={true}
      title={<BookingTitle />}
      centered={true}
      footer={<BookingFooter />}
      width={566}
      destroyOnHidden={true}
      onCancel={handleCancel}
    >
      <BookingBody />
    </Modal>
  )
}

export default BookingPage