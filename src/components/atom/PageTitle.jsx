import { css } from "@emotion/react";
import { Typography } from "antd";
const { Title } = Typography;

const PageTitle = ({children}) => {

  return (
    <Title level={1} css={css`font-size: 24px; text-transform: capitalize; color: var(--text-color);`}>{children}</Title>
  )
}

export default PageTitle