import { css } from '@emotion/react';
import { Card, Flex, Typography, Rate } from 'antd';
import FieldCharge from '../atom/FieldCharge';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

const cardStyle = css`
  border: .7px solid var(--blur-color);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`

const FieldCard = ({data}) => {
  return (
    <Link to={`/lapang/${data.id}`}>
      <Card
        css={cardStyle}
        cover={<img alt="lapang" src={data.img} css={css`width: 100%; height: 185px;`} />}
      >
        <Flex justify="space-between" align="center" css={css`margin-bottom: 7px;`}>
          <Title level={3} css={css`font-size: 20px; color: var(--text-color); margin: 0;`}>{data.name}</Title>
          <Rate disabled defaultValue={data.rating} css={css`font-size: 16px;`} />
        </Flex>
        <Text css={css`font-size: 15px; color: var(--secondary-color); display: block; margin-bottom: 11px; text-transform: capitalize;`}>{data.location.toLowerCase()}</Text>
        <FieldCharge data={data.cost} />
      </Card>
    </Link>
  )
}

export default FieldCard