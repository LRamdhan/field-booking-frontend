import { css } from "@emotion/react";
import { Typography } from "antd";
import BookingFilter from "../components/molecules/BookingFilter";
import BookingList from "../components/organism/BookingList";
import { Outlet } from "react-router-dom";
import { useGetUserBooking } from "../hook/booking.hooks";
import { Helmet } from "react-helmet";
import useUserBookingStore from "../store/userBookingStore";
import UserBookingPagination from "../components/molecules/UserBookingPagination";
import { useCheckAuth } from "../hook/utils.hook";

const layoutStyle = css`
  margin: 30px auto 0 auto;
  padding: 0 12px;
  max-width: 629px;
  @media(min-width: 768px) {
    padding: 0;
  }
`

const UserBookingPage = () => {
  const page = useUserBookingStore(state => state.page)
  const limit = useUserBookingStore(state => state.limit)
  const status = useUserBookingStore(state => state.status)
  const createOrder = useUserBookingStore(state => state.createOrder)
  const fieldId = useUserBookingStore(state => state.fieldId)
  const error = useUserBookingStore(state => state.error)

  useGetUserBooking(page, limit, status, createOrder, fieldId)
  useCheckAuth(error)

  return (<>
    <Helmet>
      <title>Booking</title>
    </Helmet>
    <main css={layoutStyle}>
      <Typography.Title css={css`font-size: 24px; color: var(--text-color); margin: 0; font-weight: 500;`}>Booking</Typography.Title>
      <div css={css`height: 30px;`}></div>
      <BookingFilter />
      <div css={css`height: 18px;`}></div>
      <BookingList />
      <div css={css`height: 30px;`}></div>
      <UserBookingPagination />
      <Outlet />
    </main>
  </>)
}

export default UserBookingPage