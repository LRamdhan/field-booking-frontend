import { css } from '@emotion/react';
import { Card, Space, Avatar, Typography, Flex, Rate, Spin, Empty } from 'antd';
import useFieldReviewStore from '../../store/fieldReviewStore';
const { Text, Paragraph } = Typography;
import { LoadingOutlined } from '@ant-design/icons';
import moment from 'moment'
moment.locale('id')

const FieldReviewList = () => {
  const isPending = useFieldReviewStore(state => state.isPending)
  const error = useFieldReviewStore(state => state.error)
  const reviews = useFieldReviewStore(state => state.reviews)
  
  return (
    <Space direction="vertical" size={15} css={css`width: 100%;`}>
      {isPending && (
        <Flex justify="center" align="center" css={css`width: 100%; height: 150px;`}>
          <Spin size="large" indicator={<LoadingOutlined spin />} />
        </Flex>
      )}
      {(!error && !isPending && (reviews.length === 0)) && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Belum ada ulasan" />
      )}
      {(!error && !isPending && (reviews.length !== 0)) && (reviews.map((item, index) => (
        <Card css={css`border: .7px solid var(--blur-color);`} key={item.id}>
          <Flex justify="space-between">
            <Flex gap={12} css={css`width: max-content;`}>
              <Avatar size="large" src={item.user.img_url} css={css`width: 42px; height: 42px;`}>
                {'udin'}
              </Avatar>
              <Flex vertical={true}>
                <Text css={css`font-size: 15px; color: var(--text-color);`}>{item.user.name}</Text>
                <Text css={css`font-size: 13px; color: var(--secondary-color);`}>{moment(item.date_created).format("DD MMM YYYY")}</Text>
              </Flex>
            </Flex>
            <Rate disabled defaultValue={item.rating} css={css`font-size: 15px;`} />
          </Flex>
          <Paragraph css={css`font-size: 15px; color: var(--text-color); margin-top: 20px; text-align: justify;`}>
            {item.description}
          </Paragraph>
        </Card>
      )))}
    </Space>
  )
}

export default FieldReviewList