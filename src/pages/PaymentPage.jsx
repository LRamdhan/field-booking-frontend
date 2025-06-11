import { Modal, Typography, notification } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { MIDTRANS_CLIENT_KEY, MIDTRANS_SNAP_URL } from "../config/env"
import { useEffect } from "react"
import { MdOutlineError } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { css } from "@emotion/react";

const PaymentTitle = () => {
  const location = useLocation()
  const fieldName = location.state.fieldName

  return <Typography.Title css={css`font-size: 18px; color: var(--text-color); margin: 0; font-weight: 500; border-bottom: 1px solid var(--blur-color); padding-bottom: 20px;`}>Bayar {fieldName}</Typography.Title>
}

const PaymentPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const paymentToken = location.state.payment_token
  const fieldId = location.state.fieldId
  const [api, contextHolder] = notification.useNotification();
  const queryClient = useQueryClient()

  const handleCancel = () => {
    navigate('/booking')
  }

  const navigateAndRevalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['user_booking'] })
    queryClient.invalidateQueries({ queryKey: ['field_schedule', fieldId] })
    navigate('/booking')
  }

  useEffect(() => {
    const midtransScriptUrl = MIDTRANS_SNAP_URL;  
    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
    const myMidtransClientKey = MIDTRANS_CLIENT_KEY;
    scriptTag.setAttribute('data-client-key', myMidtransClientKey);
    scriptTag.addEventListener('load', e => {
      window.snap.embed(paymentToken, {
        embedId: 'snap-container',
        onSuccess: function (result) {
          navigateAndRevalidate()
        },
        onPending: function (result) {
          navigateAndRevalidate()
        },
        onError: function (result) {
          navigateAndRevalidate()          
          api.error({
            message: 'Terjadi kesalahan',
            description: 'Silahkan coba lagi nanti',
            placement: 'top',
            icon: <MdOutlineError color="#E5342F" size={24} />
          })
        },
        onClose: function () {
          navigateAndRevalidate()
        }
      });
    })
    document.body.appendChild(scriptTag);   
    return () => {
      document.body.removeChild(scriptTag);
    }
  }, [])

  return (<>
    {contextHolder}
    <Modal
      open={true}
      centered={true}
      title={<PaymentTitle />}
      footer={null}
      width={'max-content'}
      destroyOnHidden={true}
      onCancel={handleCancel}
    >
      <div id={`snap-container`}></div>
    </Modal>
  </>)
}

export default PaymentPage