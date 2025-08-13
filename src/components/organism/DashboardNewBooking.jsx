import { css } from "@emotion/react"
import { Button, Flex, Skeleton } from "antd"
import { Link, useNavigate } from "react-router-dom";
import { useFields } from "../../hook/field.hooks";
import { convertCost } from "../../utils/cost.utils";

const FieldItem = ({data}) => {
  const navigate = useNavigate()
  let location = data.location.toLowerCase()
  location = location.split('')
  location[0] = location[0].toUpperCase()
  location = location.join('')

  const handleStartBooking = e => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/lapang/${data.id}/booking`)
  }

  return (
    <Link to={`/lapang/${data.id}`}>
      <Flex align="center" css={css`justify-content: space-between; padding: 25px 0; @media(min-width: 500px) {padding: 25px 15px;}`}>
        <Flex align="center" css={css`gap: 15px; width: max-content;`}>
          <img src={data.img} alt={data.name} css={css`aspect-ratio: 1/1; width: 50px;`} />
          <div>
            <h3 css={css`font-size: 16px; font-weight: 500; color: var(--text-color); margin: 0;`}>{data.name}</h3>
            <p css={css`font-size: 14px; color: var(--secondary-color); margin-top: 4px;`}>{location} | Rp{convertCost(data.cost)} /sesi</p>
          </div>
        </Flex>
        <Button onClick={handleStartBooking} type="primary" css={css`font-size: 15px; font-weight: 500;`}>Booking</Button>
      </Flex>
    </Link>
  )
}

const DashboardNewBooking = () => {
  const {data, isPending, error, refetch} = useFields()

  return (
    <div css={css`padding: 20px; margin-top: 40px; border: 0.5px solid var(--secondary-color); border-radius: 7px; @media(min-width: 500px) {padding: 25px 29px;} @media(min-width: 768px) {width: 443px; margin-top: 0;}`}>

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

      {data && (
        <div>
          <h1 css={css`font-size: 18px; font-weight: bold; color: var(--text-color);`}>Buat Booking Baru</h1>
          <div css={css`margin-top: 5px;`}>
            {data.map((item, index) => (
              <div key={index}>
                <FieldItem data={item} />
                {index !== data.length - 1 && <div css={css`width: 100%; height: 0.5px; background-color: var(--secondary-color);`}></div>}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default DashboardNewBooking