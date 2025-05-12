import { css } from '@emotion/react';
import { Card, Space, Avatar, Typography, Flex, Rate } from 'antd';
const { Text, Paragraph } = Typography;

const FieldReviewList = () => {
  const dummyReview = [1, 2, 4, 5]

  return (
    <Space direction="vertical" size={15} css={css`width: 100%;`}>
      {dummyReview.map((item, index) => (
        <Card css={css`border: .7px solid var(--blur-color);`} key={index}>
          <Flex justify="space-between">
            <Flex gap={12} css={css`width: max-content;`}>
              <Avatar size="large" css={css`width: 42px; height: 42px;`}>
                {'udin'}
              </Avatar>
              <Flex vertical={true}>
                <Text css={css`font-size: 15px; color: var(--text-color);`}>Udin</Text>
                <Text css={css`font-size: 13px; color: var(--secondary-color);`}>12 Mei 2025</Text>
              </Flex>
            </Flex>
            <Rate disabled defaultValue={3} css={css`font-size: 15px;`} />
          </Flex>
          <Paragraph css={css`font-size: 15px; color: var(--text-color); margin-top: 20px; text-align: justify;`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eligendi voluptatum. Qui sed nemo perferendis!
          </Paragraph>
        </Card>
      ))}
    </Space>
  )
}

export default FieldReviewList