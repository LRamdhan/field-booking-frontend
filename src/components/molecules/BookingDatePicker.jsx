import { css } from "@emotion/react";
import { Typography, Flex, DatePicker, Button } from "antd";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const dateListStyle = css`
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 15px;

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

const BookingDatePicker = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(1);

  const dummyDate = [1, 2, 3, 4, 5]

  const handleSelectDate = item => {
    setSelectedDate(item)
  }

  return (
    <div>
      <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin: 0;`}>Pilih tanggal</Typography.Text>
      <div css={css`width: 100%; display: grid; grid-template-columns: auto max-content; grid-template-rows: max-content; align-items: center; column-gap: 12px; margin-top: 12px;`} >
        <div css={dateListStyle}>
          <Flex gap={12} css={css`width: max-content;`}>
            {dummyDate.map((item, index) => (
              <div key={index} onClick={() => handleSelectDate(item)} css={css`padding: 7px 11px; border: 1px solid ${selectedDate === item ? 'var(--blur-color)' : 'transparant'}; border-radius: 5px; cursor: pointer;`}>
                <Typography.Text css={css`display: block; font-size: 13px; color: var(--secondary-color); text-align: center; margin: 0;`}>Selasa</Typography.Text>
                <Typography.Text css={css`font-size: 15px; color: var(--text-color); text-align: center; font-weight: 500; margin-top: 3px;`}>13 Mei</Typography.Text>
              </div>
            ))}
          </Flex>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setPanelVisible(true);
          }}
          css={css`padding-bottom: 15px;`}
        >
          <Button type="primary" size="large" icon={<FaRegCalendarAlt css={css`font-size: 25px;`} />} css={css`width: 50px; height: 50px;`} />
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              height: 0,
              width: 0,
              overflow: 'hidden',
              position: 'absolute',
              top: 0,
              insetInlineStart: 0,
            }}
          >
            <DatePicker
              open={panelVisible}
              onChange={(date) => {
                setPanelVisible(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDatePicker