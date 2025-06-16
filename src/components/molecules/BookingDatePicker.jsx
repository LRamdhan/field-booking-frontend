import { css } from "@emotion/react";
import { Typography, Flex, DatePicker, Button } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import useBookingStore from "../../store/bookingStore";
import { useSearchParams } from "react-router-dom";
import { validateParams } from "../../utils/field.utils";

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
  const selectedDate = useBookingStore(state => state.selectedDate)
  const setSelectedDate = useBookingStore(state => state.setSelectedDate)
  const setSelectedHour = useBookingStore(state => state.setSelectedHour)
  const reset = useBookingStore(state => state.reset)
  const [dateOption, setDateOption] = useState([])
  const [params, setParams] = useSearchParams();

  const updateDateOption = (definedDate) => {
    let newDateOption = []
    const date = definedDate? dayjs(definedDate) : dayjs()
    newDateOption.push(date)
    for(let i = 1; i < 9; i++) {
      newDateOption.push(date.add(i, 'day'))
    }
    newDateOption = newDateOption.map(e => {
      e = e
        .millisecond(0)
        .second(0)
        .minute(0)
        .hour(0);
      return {
        epochTime: e.valueOf(),
        day: e.format('dddd'),
        date: e.format('DD'),
        month: e.format('MMM')
      }
    }) 
    setDateOption(newDateOption)
  }

  const updateTanggalParam = (date) => {
    const newParams = new URLSearchParams(params.toString())
    newParams.set('tanggal', date)
    newParams.delete('jam')
    setParams(newParams)
  }

  const handleSelectDate = date => {
    setSelectedDate(date)
    updateTanggalParam(date)
    setSelectedHour(null)
  }

  const handleSelectDateRange = date => {
    date = date.millisecond(0).second(0).minute(0).hour(0);
    date = date.valueOf()
    updateDateOption(date)
    setSelectedDate(date)
    updateTanggalParam(date)
    setSelectedHour(null)
    setPanelVisible(false)
  }

  useEffect(() => {
    reset()

    // if param exist and valid, use it
    const {date} = validateParams(params, setParams)
    if(date) {
      setSelectedDate(Number(date))
      updateDateOption(Number(date))
    } else {
      updateDateOption()
    }
  }, [])

  return (
    <div>
      <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin: 0;`}>Pilih tanggal</Typography.Text>
      <div css={css`width: 100%; display: grid; grid-template-columns: auto max-content; grid-template-rows: max-content; align-items: center; column-gap: 12px; margin-top: 12px;`} >
        <div css={dateListStyle}>
          <Flex gap={12} css={css`width: max-content;`}>
            {dateOption.map((item, index) => (
              <div key={index} onClick={() => handleSelectDate(item.epochTime)} css={css`padding: 7px 11px; border: 1px solid ${selectedDate === item.epochTime ? 'var(--primary-color)' : 'transparent'}; border-radius: 5px; cursor: pointer;`}>
                <Typography.Text css={css`display: block; font-size: 13px; color: var(--secondary-color); text-align: center; margin: 0;`}>{item.day}</Typography.Text>
                <Typography.Text css={css`font-size: 15px; color: var(--text-color); text-align: center; font-weight: 500; margin-top: 3px;`}>{item.date} {item.month}</Typography.Text>
              </div>
            ))}
          </Flex>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setPanelVisible(panelVisible ? false : true);
          }}
          css={css`padding-bottom: 15px; position: relative;`}
        >
          <Button type="primary" size="large" icon={<FaRegCalendarAlt css={css`font-size: 25px;`} />} css={css`width: 50px; height: 50px;`} />
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              height: "0",
              width: "0",
              overflow: 'hidden',
              top: 0,
              left: 0,
              insetInlineStart: 0,
              position: "absolute",
            }}
          >
            <DatePicker
              placement="bottomRight"
              open={panelVisible}
              minDate={dayjs()}
              value={selectedDate ? dayjs(selectedDate) : null}
              onChange={handleSelectDateRange}
              css={css`width: 50px; height: 50px;`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDatePicker