import { css } from "@emotion/react"
import { Flex, Spin, Typography } from "antd"
import useBookingStore from "../../store/bookingStore"
import { useUseFieldSchedule } from "../../hook/field.hooks"
import { useParams, useSearchParams } from "react-router-dom"
import { LoadingOutlined } from '@ant-design/icons';
import { formatHourRange, validateParams } from "../../utils/field.utils"
import { useEffect } from "react"
import dayjs from "dayjs"

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
  const selectedDate = useBookingStore(state => state.selectedDate)
  const selectedHour = useBookingStore(state => state.selectedHour)
  const setSelectedHour = useBookingStore(state => state.setSelectedHour)
  const {id: fieldId} = useParams()
  const {data, isPending, error} = useUseFieldSchedule(fieldId, selectedDate)
  const [params, setParams] = useSearchParams();
  let hourOption = []

  if(data || error?.status === 404) {
    if(data) {
      const bookedSchedules = data.schedules
      for(let i = 8; i <= 22; i++) {
        if(bookedSchedules.includes(i)) {
          hourOption.push({
            hour: i,
            status: "Booked"
          })
        } else {
          hourOption.push({
            hour: i,
            status: "Tersedia"
          })
        }
      }
    } else {
      for(let i = 8; i <= 22; i++) {
        hourOption.push({
          hour: i,
          status: "Tersedia"
        })
      }
    }
  }

  const updateJamParam = (hour) => {
    const newParams = new URLSearchParams(params.toString())
    newParams.set('jam', hour)
    setParams(newParams)
  }

  const handleSelectHour = hour => {
    setSelectedHour(hour)
    updateJamParam(hour)
  }

  const checkPassedHour = (hour) => {
    const now = dayjs()
    const currentHour = now.hour()
    const currentDate = now.date()
    const currentMonth = now.month()
    const currentYear = now.year()
    const currentSelected = dayjs(selectedDate)
    if((currentSelected.year() < currentYear) && (currentSelected.month() < currentMonth) && (currentSelected.date() < currentDate)) {
      return true
    }
    if((currentSelected.date() === currentDate) && (hour <= currentHour)) {
      return true
    }
    return false
  }

  useEffect(() => {
    // if param exist and valid, use it
    const {hour, date} = validateParams(params, setParams)
    if(hour && date) {
      setSelectedHour(Number(hour))
    }
  }, [])

  return (
    <div>
      <Typography.Text css={css`font-size: 14px; color: var(--text-color); margin: 0;`}>Pilih jam</Typography.Text>
      {(error?.status === 400) && (
        <div css={css`width: 100%;`}>
          <p css={css`font-size: 14px; margin: auto; padding: 45px 0; width: max-content;`}>Pilih tanggal dulu!</p>
        </div>
      )}
      {(error && ((error?.status !== 400) && (error?.status !== 404))) && (
        <div css={css`width: 100%;`}>
          <p css={css`font-size: 14px; margin: auto; padding: 45px 0; width: max-content;`}>Terjadi error, silahkan coba lagi nanti</p>
        </div>
      )}
      {isPending && (
        <Flex justify="center" align="center" css={css`width: 100%; height: 100px;`}>
          <Spin size="large" indicator={<LoadingOutlined spin />} />
        </Flex>
      )}
      {(data || error?.status === 404) && (
        <div css={timeStyle}>
          {hourOption.map((item, idx) => (
             <div key={idx} onClick={(item.status !== 'Booked' && !checkPassedHour(item.hour)) ? () => handleSelectHour(item.hour) : () => {}} css={css`display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 7px 11px; border: 1px solid ${item.hour === selectedHour ? "var(--primary-color)" : "var(--blur-color)"}; border-radius: 5px; cursor: ${(item.status !== 'Booked' && !checkPassedHour(item.hour)) ? "pointer" : "not-allowed"};`}>
              <Typography.Text css={css`display: block; font-size: 13px; color: var(--secondary-color); margin: 0;`}>{item.status}</Typography.Text>
              <Typography.Text css={css`font-size: 15px; color: var(--text-color); font-weight: 500; margin-top: 3px; text-decoration: ${checkPassedHour(item.hour) ? 'line-through' : 'normal'};`}>{formatHourRange(item.hour)}</Typography.Text>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BookingTimePicker