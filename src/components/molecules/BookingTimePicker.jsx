import { css } from "@emotion/react"
import { Typography } from "antd"

const timeStyle = css`
  margin-top: 12px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-auto-rows: max-content;
  justify-content: space-between;
  row-gap: 17px;

  @media(min-width: 430px) {
    grid-template-columns: repeat(4, max-content);
  }
  @media(min-width: 545px) {
    grid-template-columns: repeat(5, max-content);
  }
`

const BookingTimePicker = () => {
  const dummyTime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <div>
      <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin: 0;`}>Pilih jam</Typography.Text>
      <div css={timeStyle}>
        {dummyTime.map((item, index) => (
          <div key={index} onClick={() => handleSelectDate(item)} css={css`padding: 7px 11px; border: 1px solid var(--blur-color); border-radius: 5px; cursor: pointer;`}>
            <Typography.Text css={css`display: block; font-size: 13px; color: var(--secondary-color); text-align: center; margin: 0;`}>Tersedia</Typography.Text>
            <Typography.Text css={css`font-size: 15px; color: var(--text-color); text-align: center; font-weight: 500; margin-top: 3px;`}>07-08</Typography.Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookingTimePicker