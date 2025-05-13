import { css } from '@emotion/react';
import { Timeline } from 'antd';
import { BsCalendar2Date } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import BookingDatePicker from '../molecules/BookingDatePicker';
import BookingTimePicker from '../molecules/BookingTimePicker';
import BookingPaymentPicker from '../molecules/BookingPaymentPicker';

const bodyStyle = css`
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  padding-left: 5px;
   
  ::-webkit-scrollbar {
    width: 5px; /* Width of vertical scrollbar */
    height: 5px; /* Height of horizontal scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 111, 0, .1); /* Track background */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 111, 0, .3); /* Scrollbar handle */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 111, 0, .3); /* Handle on hover */
  }
`

const BookingBody = () => {

  return (
    <div css={bodyStyle}>
      <Timeline
        items={[
          {
            children: <BookingDatePicker />,
            dot: <BsCalendar2Date css={css`font-size: 17px;`} />
          },
          {
            children: <BookingTimePicker />,
            dot: <IoTimeOutline css={css`font-size: 17px;`} />
          },
          {
            children: <BookingPaymentPicker />,
            dot: <MdOutlinePayment css={css`font-size: 17px;`} />
          },
        ]}
        css={css`padding: 20px 0;`}
     />
    </div>
  )
}

export default BookingBody