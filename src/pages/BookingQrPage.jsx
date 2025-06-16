import { css } from "@emotion/react";
import { Flex, Modal, QRCode } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const BookingQrPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  const handleCancel = () => {
    navigate('/booking')
  }

  return (
    <Modal
      open={true}
      centered={true}
      footer={null}
      width={400}
      destroyOnHidden={true}
      onCancel={handleCancel}
    >
      <Flex justify="center" align="center" css={css`height: max-content; padding: 20px 0;`}>
        <QRCode value={id} size={300} type="svg" />
      </Flex>
    </Modal>
  )
}

export default BookingQrPage