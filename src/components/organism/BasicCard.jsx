import { css } from "@emotion/react"
import { Card, Flex } from "antd"

const pageStyle = css`
  width: 100%;
  height: 100vh;
  padding: 12px;
  @media(max-height: 500px) {
    display: block;
    height: max-content;
    padding: 50px 12px;
  }
`

const cardStyle = css`
  max-width: 400px;
  height: max-content;
  margin: 0 auto;
  border: .7px solid var(--blur-color);
  padding: 25px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  @media(min-width: 768px) {
    padding: 25px 16px
  }
`

const BasicCard = ({children}) => {
  return (
    <Flex vertical justify="center" component="main" css={pageStyle}>
      <div css={css`width: 100%; height: max-content;`}>
        <Card css={cardStyle}>
          {children}
        </Card>
      </div>
    </Flex>
  )
}

export default BasicCard