import { Modal, Typography } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { css } from "@emotion/react";
import PaymentMidtrans from "../components/organism/PaymentMidtrans";

const PaymentTitle = () => {
  const location = useLocation()
  const fieldName = location.state.fieldName

  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Bayar {fieldName}</Typography.Title>
}

const PaymentPage = () => {
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/booking')
  }

  return (<>
    <Modal
      open={true}
      centered={true}
      title={<PaymentTitle />}
      footer={null}
      width={'max-content'}
      destroyOnHidden={true}
      onCancel={handleCancel}
    >
      <PaymentMidtrans />
    </Modal>
  </>)
}

export default PaymentPage