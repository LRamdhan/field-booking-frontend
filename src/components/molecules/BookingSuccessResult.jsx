import { useNavigate, useParams } from "react-router-dom"
import useBookingStore from "../../store/bookingStore"
import { Modal, Result, Button } from 'antd';

const BookingSuccessResult = () => {
  const navigate = useNavigate()
  const poaSuccess = useBookingStore(state => state.poaSuccess)
  const setPoaSuccess = useBookingStore(state => state.setPoaSuccess)
  const setBookingId = useBookingStore(state => state.setBookingId)
  const bookingId = useBookingStore(state => state.bookingId)
  const {id: fieldId} = useParams()

  const handleCancelSuccess = () => {
    navigate('/lapang/' + fieldId)
    setPoaSuccess(false)
    setBookingId(null)
  }

  const handleDetailRedirect = () => {
    navigate(`/booking/${bookingId}`)
    setPoaSuccess(false)
    setBookingId(null)
  }

  return (
    <Modal
      open={poaSuccess}
      centered={true}
      footer={null}
      width={630}
      destroyOnHidden={true}
      onCancel={handleCancelSuccess}
    >
      <Result
        status="success"
        title="Booking Berhasil!"
        subTitle="Pastikan anda datang tepat waktu pada jam yang anda booking"
        extra={[
            <Button type="primary" onClick={handleDetailRedirect} key="console">
              Lihat Detail
            </Button>,
          <Button key="buy" onClick={handleCancelSuccess}>Kembali</Button>,
        ]}
      />
    </Modal>
  )
}

export default BookingSuccessResult