import { css } from "@emotion/react"
import { Button, Typography, Flex } from "antd"

const BookingFooter = () => {
  return (
    <Flex justify="space-between" align="center" css={css`border-top: 1px solid var(--blur-color); padding-top: 20px;`}>
      <div align="start">
        <Typography.Title css={css`font-size: 15px; color: var(--text-color); font-weight: 500; margin: 0;`}>Rp100.000</Typography.Title>
        <Typography.Text css={css`font-size: 14px; color: var(--text-color);`}>Rabu 19 Nov | 14.00 - 15.00</Typography.Text>
      </div>
      <Button type="primary" size="large" css={css`font-size: 15px; font-weight: 500; color: var(--background-color);`}>Booking</Button>
    </Flex>
  )
}

export default BookingFooter