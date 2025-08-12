import { css } from '@emotion/react';
import { Card, Flex, Typography, Rate, Button } from 'antd';
import FieldCharge from '../atom/FieldCharge';
import { Link, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
import Cookies from 'js-cookie';

const cardStyle = css`
  border: .7px solid var(--blur-color);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`

const FieldCard = ({data}) => {
  const refreshToken = Cookies.get('refresh_token')
  const navigate = useNavigate()

  const handleClickBooking = e => {
    e.stopPropagation();
    e.preventDefault()
    navigate(`/lapang/${data.id}/booking`)
  }

  return (
    <Link to={`/lapang/${data.id}`} css={css`position: relative; z-index: 5;`}>
      <Card
        css={cardStyle}
        cover={<img alt="lapang" src={data.img} css={css`width: 100%; height: 226px;`} />}
      >
        <Flex justify="space-between" align="center" css={css`margin-bottom: 7px;`}>
          <Title level={3} css={css`font-size: 20px; color: var(--text-color); margin: 0;`}>{data.name}</Title>
          <Rate disabled defaultValue={data.rating} css={css`font-size: 16px;`} />
        </Flex>
        <Text css={css`font-size: 15px; color: var(--secondary-color); display: block; margin-bottom: 11px; text-transform: capitalize;`}>{data.location.toLowerCase()}</Text>
        <FieldCharge data={data.cost} />
        {!refreshToken && (
          <Button onClick={handleClickBooking} type="primary" css={css`font-size: 15px; font-weight: bold; color: var(--background-color); margin-top: 23px;`}>Booking</Button>
        )}
      </Card>
    </Link>
  )
}

export default FieldCard