import { css } from "@emotion/react";
import FieldReviewHead from "../molecules/FieldReviewHead"
import FieldReviewList from "../molecules/FieldReviewList"
import {Pagination, Space, Flex} from 'antd';
import { useFieldReviews } from "../../hook/fieldHook";
import useFieldReviewStore from "../../store/fieldReviewStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FieldReview = () => {
  const page = useFieldReviewStore(state => state.page)
  const limit = useFieldReviewStore(state => state.limit)
  const star = useFieldReviewStore(state => state.star)
  const total_page = useFieldReviewStore(state => state.total_page)
  const setPage = useFieldReviewStore(state => state.setPage)
  const setStar = useFieldReviewStore(state => state.setStar)
  const error = useFieldReviewStore(state => state.error)
  const {id: fieldId} = useParams()
  useFieldReviews(fieldId, page, limit, star)

  useEffect(() => {
    setPage(1)
    setStar(null)
  }, [])

  const handlePageChange = (page) => {
    setPage(page)
  }

  return (
    <Space direction="vertical" size="large" css={css`width: 100%;`}>
      <FieldReviewHead />
      {error && (
        <Flex justify="center" align="center" css={css`width: 100%; height: 150px;`}>
          <p>Terjadi error, silahkan coba lagi nanti</p>
        </Flex>
      )}
      {!error && <FieldReviewList />}
      <Pagination align="center" current={page} total={total_page * 10} onChange={handlePageChange} css={css`font-size: 15px;`} />
    </Space>
  )
}

export default FieldReview