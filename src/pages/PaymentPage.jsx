import { Modal } from "antd"
import { useLocation, useNavigate } from "react-router-dom"

const PaymentPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.state); //

  const handleCancel = () => {
    navigate('/booking')
  }

  return (
    <Modal
      open={true}
      centered={true}
      footer={null}
      width={630}
      destroyOnHidden={true}
      onCancel={handleCancel}
    >
      ya begitulah
    </Modal>
  )
}

export default PaymentPage