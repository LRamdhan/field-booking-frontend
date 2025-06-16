import { css } from "@emotion/react"
import { Typography, Radio } from "antd"
import useBookingStore from "../../store/bookingStore"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { validateParams } from "../../utils/field.utils"

const BookingPaymentPicker = () => {
  const selectedPaymentType = useBookingStore(state => state.selectedPaymentType)
  const setSelectedPaymentType = useBookingStore(state => state.setSelectedPaymentType)
  const [params, setParams] = useSearchParams();

  const updateMetodePembayaranParam = (paymentMethod) => {
    const newParams = new URLSearchParams(params.toString())
    newParams.set('metode_pembayaran', paymentMethod)
    setParams(newParams)
  }

  const handleSelect = paymentType => {
    setSelectedPaymentType(paymentType.target.value);
    updateMetodePembayaranParam(paymentType.target.value);
  }

  useEffect(() => {
    // if param exist and valid, use it
    const {paymentMethod} = validateParams(params, setParams)
    if(paymentMethod) {
      setSelectedPaymentType(paymentMethod)
    }
  }, [])

  return (
    <div>
      <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin: 0;`}>Pilih metode pembayaran</Typography.Text>
      <Radio.Group
        value={selectedPaymentType}
        onChange={handleSelect}
        css={css`display: flex; flex-direction: column; gap: 8; margin-top: 12px;`}
        options={[
          { value: 'ONLINE', label: 'Bayar sekarang' },
          { value: 'POA', label: 'Bayar di tempat' },
        ]}
      />
    </div>
  )
}

export default BookingPaymentPicker