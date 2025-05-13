import { css } from "@emotion/react"
import { Typography, Radio } from "antd"

const BookingPaymentPicker = () => {

  return (
    <div>
      <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin: 0;`}>Pilih metode pembayaran</Typography.Text>
      <Radio.Group
        css={css`display: flex; flex-direction: column; gap: 8; margin-top: 12px;`}
        options={[
          { value: 1, label: 'Bayar sekarang' },
          { value: 2, label: 'Bayar di tempat' },
        ]}
      />
    </div>
  )
}

export default BookingPaymentPicker