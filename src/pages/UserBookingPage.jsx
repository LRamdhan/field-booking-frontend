import { css } from "@emotion/react";
import { Typography, Pagination } from "antd";
import BookingFilter from "../components/molecules/BookingFilter";
import BookingList from "../components/organism/BookingList";
import { Outlet } from "react-router-dom";

const layoutStyle = css`
  margin: 30px auto 0 auto;
  padding: 0 12px;
  max-width: 629px;
  @media(min-width: 768px) {
    padding: 0;
  }
`

const UserBookingPage = () => {

  return (
    <main css={layoutStyle}>
      <Typography.Title css={css`font-size: 24px; color: var(--text-color); margin: 0; font-weight: 500;`}>Booking</Typography.Title>
      <div css={css`height: 30px;`}></div>
      <BookingFilter />
      <div css={css`height: 18px;`}></div>
      <BookingList />
      <div css={css`height: 30px;`}></div>
      <Pagination defaultCurrent={1} total={50} align="center" />
      <Outlet />
    </main>
  )
}

export default UserBookingPage