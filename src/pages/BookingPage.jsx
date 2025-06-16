import { css } from '@emotion/react';
import { Modal, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import BookingFooter from '../components/molecules/BookingFooter';
import BookingBody from '../components/organism/BookingBody';
import useFieldDetailStore from '../store/fieldDetailStore';
import { Helmet } from 'react-helmet';
import useBookingStore from '../store/bookingStore';
import BookingSuccessResult from '../components/molecules/BookingSuccessResult';

const BookingTitle = () => {
  const name = useFieldDetailStore(state => state.name)

  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Booking {name}</Typography.Title>
}

const BookingPage = () => {
  const navigate = useNavigate()
  const name = useFieldDetailStore(state => state.name)
  const isPending = useFieldDetailStore(state => state.isPending)
  const error = useFieldDetailStore(state => state.error)
  const poaSuccess = useBookingStore(state => state.poaSuccess)
  const {id: fieldId} = useParams()

  const handleCancelBooking = () => {
    navigate('/lapang/' + fieldId)
  }

  return (<>
    <Helmet>
      {isPending && <title>...</title>}
      {error && <title>Error</title>}
      {name && <title>Booking {name}</title>}
    </Helmet>
      <BookingSuccessResult />
      <Modal
        open={!poaSuccess}
        title={<BookingTitle />}
        centered={true}
        footer={<BookingFooter />}
        width={566}
        destroyOnHidden={true}
        onCancel={handleCancelBooking}
      >
        <BookingBody />
      </Modal>
  </>)
}

export default BookingPage