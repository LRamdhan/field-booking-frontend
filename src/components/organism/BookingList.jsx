import { css } from '@emotion/react';
import { Space, Flex, Image, Typography, Button, Spin, Empty } from 'antd';
import { IoQrCode } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { MdInsertComment } from "react-icons/md";
import useUserBookingStore from '../../store/userBookingStore';
import { LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { formatHourRangeFull } from '../../utils/field.utils';
import { useNavigate } from 'react-router-dom';
import FetchError from '../molecules/FetchError';
import BookingCreateReview from './BookingCreateReview';
import { useState } from 'react';
import BOOKING_STATUS from '../../constant/bookingStatus';

const ButtonGroup = ({item, isDesktop, setFieldId, setBookingId}) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/booking/${item.id}`)
  }
  
  const handlePay = () => {
    navigate(`/booking/${item.id}/bayar`, {state: {payment_token: item.payment_token}})
  }

  const handleQrCode = () => {
    navigate(`/booking/${item.id}/qr-code`)
  }

  const handleReview = () => {
    setFieldId(item.field.id)
    setBookingId(item.id)
  }

  return (
    <Flex justify="flex-end" wrap gap={17} css={css`padding: ${isDesktop ? '0' : '16px'};`}>
      <Button icon={<IoQrCode css={css`font-size: 16px;`} />} onClick={handleQrCode} css={css`font-size: 15px; font-weight: 500; color: var(--primary-color); border: 1.5px solid var(--primary-color); background-color: var(--background-color); display: ${item.status === BOOKING_STATUS.AKTIF ? 'flex' : 'none'};`}>QR Code</Button>
      <Button icon={<MdOutlinePayment css={css`font-size: 18px;`} />} onClick={handlePay} css={css`font-size: 15px; font-weight: 500; color: var(--primary-color); border: 1.5px solid var(--primary-color); background-color: var(--background-color); display: ${(item.status === BOOKING_STATUS.PENDING) && (item.payment_token) ? 'flex' : 'none'};`}>Bayar</Button>
      <Button icon={<MdInsertComment css={css`font-size: 18px;`} />} onClick={handleReview} css={css`font-size: 15px; font-weight: 500; color: var(--primary-color); border: 1.5px solid var(--primary-color); background-color: var(--background-color); display: ${(item.status === BOOKING_STATUS.SELESAI && !item.isReviewed) ? 'flex' : 'none'};`}>Ulas</Button>
      <Button type="primary" onClick={handleDetail} icon={<BiDetail css={css`font-size: 18px;`} />} css={css`font-size: 15px; font-weight: 500; color: var(--background-color);`}>Detail</Button>
    </Flex>
  )
}

const BookingList = () => {
  const bookings = useUserBookingStore(state => state.bookings)
  const isPending = useUserBookingStore(state => state.isPending)
  const error = useUserBookingStore(state => state.error)
  const refetch = useUserBookingStore(state => state.refetch)
  const [fieldIdReview, setFieldIdReview] = useState(null)
  const [bookingIdReview, setBookingIdReview] = useState(null)

  return (<>
    {fieldIdReview && <BookingCreateReview fieldId={fieldIdReview} setFieldId={setFieldIdReview} bookingId={bookingIdReview} setBookingId={setBookingIdReview} />}
    <Space direction="vertical" size="large" css={css`width: 100%;`}>
      {isPending && (
        <Flex justify="center" align="center" css={css`width: 100%; height: 300px;`}>
          <Spin size="large" indicator={<LoadingOutlined spin />} />
        </Flex>
      )}
      {(bookings && !isPending && !error && (bookings.length === 0)) && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Belum ada Booking" css={css`width: 100%; padding: 100px 0;`} />
      )}
      {error && <FetchError refetch={() => refetch()} />}
      {(bookings && !isPending && (bookings.length !== 0)) && bookings.map((item) => (
        <div key={item.id} css={css`width: 100%; border: 1px solid var(--blur-color); border-radius: 7px; background-color: white;`}>
          <Flex justify="space-between" css={css`padding: 16px;`}>
            <div>
              <Flex gap={16} align="center">
                <Image width={80} height={80} src={item.field.img} fallback="/img/error-img-load-field.svg" css={css`object-fit: cover; object-position: center;`} />
                <div>
                  <Typography.Title css={css`font-size: 17px; color: var(--text-color); margin: 0;`}>{item.field.name}</Typography.Title>
                  <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin-top: 6px; display: block;`}>{dayjs(item.schedule).format('DD MMMM YYYY')}</Typography.Text>
                  <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin-top: 6px; display: block;`}>{formatHourRangeFull(dayjs(item.schedule).hour())}</Typography.Text>
                </div>
              </Flex>
            </div>
            <Flex vertical justify="space-between" align="flex-end">
              <Typography.Text css={css`font-size: 14px; color: var(--text-color); display: block; font-weight: 500; text-transform: capitalize; color: ${item.status === 'aktif' ? '#00CE00' : item.status === 'pending' ? '#FFB03D' : '#7B818A'};`}>{item.status}</Typography.Text>
              <div css={css`display: none; @media(min-width: 768px) { display: block; }`}>
                <ButtonGroup item={item} isDesktop={true} setFieldId={setFieldIdReview} setBookingId={setBookingIdReview} />
              </div>
            </Flex>
          </Flex>
          <div css={css`@media(min-width: 768px) { display: none; }`}>
            <div css={css`height: 1px; background-color: var(--blur-color);`}></div>
            <ButtonGroup item={item} setFieldId={setFieldIdReview} setBookingId={setBookingIdReview} />
          </div>
        </div>
      ))}
    </Space>
  </>)
}

export default BookingList
