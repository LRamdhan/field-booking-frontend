import { useQueryClient } from "@tanstack/react-query"
import { notification } from "antd"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { MIDTRANS_CLIENT_KEY, MIDTRANS_SNAP_URL } from "../../config/env"
import { MdOutlineError } from "react-icons/md"

const PaymentMidtrans = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const paymentToken = location.state.payment_token
  const fieldId = location.state.fieldId
  const [api, contextHolder] = notification.useNotification();
  const queryClient = useQueryClient()

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
    <div id={`snap-container`}></div>
  </>)
}

export default PaymentMidtrans