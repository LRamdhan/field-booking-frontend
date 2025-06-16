import { css } from '@emotion/react';
import { Select, Space } from 'antd';
import useUserBookingStore from '../../store/userBookingStore';
import { useFieldOption } from '../../hook/field.hooks';
import BOOKING_STATUS from '../../constant/bookingStatus';

const BookingFilter = () => {
  const status = useUserBookingStore(state => state.status)
  const setStatus = useUserBookingStore(state => state.setStatus)
  const createOrder = useUserBookingStore(state => state.createOrder)
  const setCreateOrder = useUserBookingStore(state => state.setCreateOrder)
  const fieldId = useUserBookingStore(state => state.fieldId)
  const setFieldId = useUserBookingStore(state => state.setFieldId)
  const {data: fields, isPending, error} = useFieldOption()

  const handChangeStatus = (value) => {
    setStatus(value);
  }

  const handleChangeOrder = (value) => {
    setCreateOrder(value);
  }

  const handleChangeField = (value) => {
    setFieldId(value);
  }

  return (
    <Space size="middle">
      <Select
        size="large"
        value={status}
        options={[
          { value: 0, label: 'Semua' },
          { value: BOOKING_STATUS.AKTIF, label: 'Aktif' },
          { value: BOOKING_STATUS.PENDING, label: 'Pending' },
          { value: BOOKING_STATUS.SELESAI, label: 'Selesai' },
        ]}
        onChange={handChangeStatus}
        css={css`* {font-size: 15px; color: var(--text-color);} width: 100px;`}
      />
      <Select
        size="large"
        value={createOrder}
        options={[
          { value: 'asc', label: 'Terlama' },
          { value: 'desc', label: 'Terbaru' },
        ]}
        onChange={handleChangeOrder}
        css={css`* {font-size: 15px; color: var(--text-color);} width: 100px;`}
      />
      {fields && (
        <Select
          size="large"
          value={fieldId}
          options={fields}
          onChange={handleChangeField}
          css={css`* {font-size: 15px; color: var(--text-color);} width: 120px;`}
        />
      )}
    </Space>
  )
}

export default BookingFilter