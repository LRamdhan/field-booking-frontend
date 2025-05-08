import { Helmet } from "react-helmet"
import PageTitle from "../components/atom/PageTitle"
import { css } from "@emotion/react"
import FieldCard from "../components/organism/FieldCard"

const listStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  gap: 15px;
  @media(min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
  }
`

const FieldPage = () => {
  const exampleField = [1, 2, 3]

  return (<>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <main css={css`width: 100%; padding: 0 12px;`}>
      <div css={css`margin: 50px auto; max-width: 961px;`}>
        <div css={css`margin-bottom: 28px;`}>
          <PageTitle>lapang</PageTitle>
        </div>
        <div css={listStyle}>
          {exampleField.map(() => (
            <FieldCard />
          ))}
        </div>
      </div>
    </main>
  </>)
}

export default FieldPage