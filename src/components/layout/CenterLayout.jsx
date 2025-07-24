import { css } from "@emotion/react"

const layoutStyle = css`
  margin: 30px auto 0 auto;
  padding: 0 12px;
  max-width: 715px;
  @media(min-width: 768px) {
    padding: 0;
  }
`

const CenterLayout = ({ children }) => {
  return (<main css={layoutStyle}>
    {children}
  </main>)
}

export default CenterLayout