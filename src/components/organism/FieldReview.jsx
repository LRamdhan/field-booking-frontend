import { css } from "@emotion/react";
import FieldReviewHead from "../molecules/FieldReviewHead"
import FieldReviewList from "../molecules/FieldReviewList"
import {Pagination, Space} from 'antd';

const FieldReview = () => {
  return (
    <Space direction="vertical" size="large" css={css`width: 100%;`}>
      <FieldReviewHead />
      <FieldReviewList />
      <Pagination align="center" defaultCurrent={1} total={50} css={css`font-size: 15px;`} />
    </Space>
  )
}

export default FieldReview