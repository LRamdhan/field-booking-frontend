import { css } from '@emotion/react';
import { Select, Space } from 'antd';

const BookingFilter = () => {
  return (
    <Space size="middle">
      <Select
        size="large"
        defaultValue="aktif"
        options={[
          { value: 'aktif', label: 'Aktif' },
          { value: 'pending', label: 'Pending' },
          { value: 'selesai', label: 'Selesai' },
        ]}
        css={css`* {font-size: 15px; color: var(--text-color);} width: 100px;`}
      />
      <Select
        size="large"
        defaultValue="desc"
        options={[
          { value: 'asc', label: 'Terlama' },
          { value: 'desc', label: 'Terbaru' },
        ]}
        css={css`* {font-size: 15px; color: var(--text-color);} width: 100px;`}
      />
      <Select
        size="large"
        defaultValue="sjiow"
        options={[
          { value: 'sjiow', label: 'Lapang A' },
          { value: 'iowjf', label: 'Lapang B' },
          { value: 'jofww', label: 'Lapang C' },
        ]}
        css={css`* {font-size: 15px; color: var(--text-color);} width: 110px;`}
      />
    </Space>
  )
}

export default BookingFilter