import { css } from '@emotion/react';
import { Card, Flex, Typography, Rate } from 'antd';
import FieldCharge from '../atom/FieldCharge';
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

const cardStyle = css`
  border: .7px solid var(--blur-color);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`

const FieldCard = () => {
  return (
    <Link to="/lapang/lapang-z">
      <Card
        css={cardStyle}
        cover={<img alt="lapang" src="https://jasakontraktorlapangan.id/wp-content/uploads/2023/05/Analisa-Bisnis-Lapangan-Futsal.jpg" css={css`width: 100%; height: 185px;`} />}
      >
        <Flex justify="space-between" align="center" css={css`margin-bottom: 7px;`}>
          <Title level={3} css={css`font-size: 20px; color: var(--text-color); margin: 0;`}>Lapang A</Title>
          <Rate disabled defaultValue={3} css={css`font-size: 16px;`} />
        </Flex>
        <Text css={css`font-size: 15px; color: var(--secondary-color); display: block; margin-bottom: 11px;`}>Indoor</Text>
        <FieldCharge />
      </Card>
    </Link>
  )
}

export default FieldCard