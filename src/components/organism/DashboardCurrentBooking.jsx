import { css } from "@emotion/react"
import { Button, Empty, Flex, Skeleton } from "antd"
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetUserCurrentBooking } from "../../hook/booking.hooks";
import dayjs from "dayjs";

const BookingItem = ({data}) => {
  const schedule = dayjs(data.schedule)
  const now = dayjs()
  const diff = schedule.diff(now, "day")

  return (
    <Link to={`/booking/${data.id}`}>
      <Flex align="center" css={css`justify-content: space-between; padding: 25px 0; @media(min-width: 500px) {padding: 25px 15px;}`}>
        <Flex align="center" css={css`gap: 15px; width: max-content;`}>
          <img src={data.field.img} alt="Lapang" css={css`aspect-ratio: 1/1; width: 50px;`} />
          <div>
            <h3 css={css`font-size: 16px; font-weight: 500; color: var(--text-color); margin: 0;`}>{data.field.name}</h3>
            <p css={css`font-size: 14px; color: var(--secondary-color); margin-top: 4px;`}>{schedule.format("DD MMMM YYYY")}</p>
          </div>
        </Flex>
        <div css={css`font-size: 14px; color: var(--text-color); height: max-content; padding: 5px 10px; border: 1.5px solid var(--primary-color); border-radius: 7px; background-color: #FFE5D0;`}>{diff} Hari Lagi</div>
        <IoIosArrowForward css={css`display: none; color: var(--text-color); font-size: 18px; @media(min-width: 500px) {display: block;`} />
      </Flex>
    </Link>
  )
}

const DashboardCurrentBooking = () => {
  const {data, isPending, error, refetch} = useGetUserCurrentBooking()

  return (
    <div css={css`padding: 20px; border: 0.5px solid var(--secondary-color); border-radius: 7px; @media(min-width: 500px) {padding: 25px 29px;} @media(min-width: 768px) {width: 469px;}`}>

      {(isPending && !error) && (
        <>
          <Skeleton.Input active />
          <Skeleton.Input active css={css`width: 100%; margin-top: 10px;`} />
          <Skeleton.Input active css={css`width: 100%; margin-top: 10px;`} />
          <Skeleton.Input active css={css`width: 100%; margin-top: 10px;`} />
        </>
      )}

      {error && (
        <Flex vertical justify="center" align="center">
          <h1 css={css`font-size: 18px; font-weight: bold; color: var(--text-color);`}>Terjadi Error</h1>
          <div css={css`margin-top: 15px;`}>
            <Button type="primary" onClick={() => refetch()}>Coba Lagi</Button>
          </div>
        </Flex>
      )}

      {(data?.data?.length === 0) && (
        <Flex vertical justify="center" align="center">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Belum ada booking saat ini" />
        </Flex>
      )}

      {data && (
        <div>
          <h1 css={css`font-size: 18px; font-weight: bold; color: var(--text-color);`}>Booking Saat Ini</h1>
          <div css={css`margin-top: 5px;`}>
            {data.data.map((item, index) => (
              <div key={index}>
                <BookingItem data={item} />
                {index !== data.data.length - 1 && <div css={css`width: 100%; height: 0.5px; background-color: var(--secondary-color);`}></div>}
              </div>
            ))}
          </div>
          <Flex justify="end" css={css`width: 100%; margin-top: 5px; `}>
            <Link to="/booking">
              <Button color="default" variant="text" icon={<FaArrowRight css={css`color: var(--text-color); font-size: 15px;`} />} iconPosition="end" type="primary" css={css`font-size: 15px; font-weight: 500;`}>Lihat Semua</Button>
            </Link>
          </Flex>
        </div>
      )}

    </div>
  )
}

export default DashboardCurrentBooking