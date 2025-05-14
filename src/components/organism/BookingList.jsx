import { css } from '@emotion/react';
import { Space, Flex, Image, Typography, Button } from 'antd';
import { IoQrCode } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { MdInsertComment } from "react-icons/md";

const ButtonGroup = ({item, isDesktop}) => (
  <Flex justify="flex-end" wrap gap={17} css={css`padding: ${isDesktop ? '0' : '16px'};`}>
    <Button type="primary" icon={<IoQrCode css={css`font-size: 16px;`} />} css={css`font-size: 15px; font-weight: 500; color: var(--background-color); display: ${item.status === 'aktif' ? 'flex' : 'none'};`}>QR Code</Button>
    <Button type="primary" icon={<MdOutlinePayment css={css`font-size: 18px;`} />} css={css`font-size: 15px; font-weight: 500; color: var(--background-color); display: ${item.status === 'pending' ? 'flex' : 'none'};`}>Bayar</Button>
    <Button type="primary" icon={<MdInsertComment css={css`font-size: 18px;`} />} css={css`font-size: 15px; font-weight: 500; color: var(--background-color); display: ${item.status === 'selesai' ? 'flex' : 'none'};`}>Ulas</Button>
    <Button type="primary" icon={<BiDetail css={css`font-size: 18px;`} />} css={css`font-size: 15px; font-weight: 500; color: var(--background-color);`}>Detail</Button>
  </Flex>
)

const BookingList = () => {
  const dummyBooking = [
    {
      fieldImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVECM7gd1zOfYJew9cUNxCuaefi-R4Mlfipg&s',
      status: 'selesai'
    },
    {
      fieldImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVECM7gd1zOfYJew9cUNxCuaefi-R4Mlfipg&s',
      status: 'aktif'
    },
    {
      fieldImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVECM7gd1zOfYJew9cUNxCuaefi-R4Mlfipg&s',
      status: 'pending'
    },
    {
      fieldImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVECM7gd1zOfYJew9cUNxCuaefi-R4Mlfipg&s',
      status: 'selesai'
    },
    {
      fieldImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVECM7gd1zOfYJew9cUNxCuaefi-R4Mlfipg&s',
      status: 'pending'
    },
  ]

  return (
    <Space direction="vertical" size="large" css={css`width: 100%;`}>
      {dummyBooking.map((item, index) => (
        <div key={index} css={css`width: 100%; border: 1px solid var(--blur-color); border-radius: 7px; background-color: white;`}>
          <Flex justify="space-between" css={css`padding: 16px;`}>
            <div>
              <Flex gap={16} align="center">
                <Image width={80} height={80} src={item.fieldImg} fallback="/img/error-img-load-field.svg" css={css`object-fit: cover; object-position: center;`} />
                <div>
                  <Typography.Title css={css`font-size: 17px; color: var(--text-color); margin: 0;`}>Lapang A</Typography.Title>
                  <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin-top: 6px; display: block;`}>14 Mei 2025</Typography.Text>
                  <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin-top: 6px; display: block;`}>19:00 - 20:00</Typography.Text>
                </div>
              </Flex>
            </div>
            <Flex vertical justify="space-between" align="flex-end">
              <Typography.Text css={css`font-size: 14px; color: var(--text-color); display: block; font-weight: 500; text-transform: capitalize; color: ${item.status === 'aktif' ? 'green' : item.status === 'pending' ? 'orange' : 'grey'};`}>{item.status}</Typography.Text>
              <div css={css`display: none; @media(min-width: 768px) { display: block; }`}>
                <ButtonGroup item={item} isDesktop={true} />
              </div>
            </Flex>
          </Flex>
          <div css={css`@media(min-width: 768px) { display: none; }`}>
            <div css={css`height: 1px; background-color: var(--blur-color);`}></div>
            <ButtonGroup item={item} />
          </div>
        </div>
      ))}
    </Space>
  )
}

export default BookingList
