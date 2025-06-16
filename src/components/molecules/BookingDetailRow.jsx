import { css } from "@emotion/react"
import { Typography, Col, Row } from "antd"

const ColHead = ({children}) => {
  return (
    <Typography.Title css={css`font-size: 14px; color: var(--secondary-color); text-transform: capitalize; margin: 0;`}>{children}</Typography.Title>
  )
}

const ColBody = ({children}) => {
  return (
    <Typography.Title css={css`font-size: 15px; color: var(--text-color); text-transform: capitalize; margin: 0;`}>{children}</Typography.Title>
  )
}

const BookingDetailRow = ({title, field1, value1, field2, value2}) => {
  return (
    <div css={css`padding: 18px 0;`}>
      <Typography.Title css={css`font-size: 15px; color: var(--text-color); font-weight: 500; text-transform: capitalize; margin: 0;`}>{title}</Typography.Title>
      <Row css={css`margin: 12px 0 0 0;`}>
        <Col span={12}><ColHead>{field1}</ColHead></Col>
        <Col span={12}><ColBody>{value1}</ColBody></Col>
      </Row>
      <Row css={css`margin: 12px 0 0 0;`}>
        <Col span={12}><ColHead>{field2}</ColHead></Col>
        <Col span={12}><ColBody>{value2}</ColBody></Col>
      </Row>
    </div>
  )
}

export default BookingDetailRow