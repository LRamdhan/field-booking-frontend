import { Helmet } from "react-helmet"
import PageTitle from "../components/atom/PageTitle"
import { css } from "@emotion/react"
import FieldCard from "../components/organism/FieldCard"
import { useFields } from "../hook/fieldHook.js"
import FetchError from "../components/molecules/FetchError"
import FieldListSkeleton from "../components/molecules/FieldListSkeleton"

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
  const { data: fields, isPending, error, refetch } = useFields()

  if(error) console.log(error.message);

  return (<>
    <Helmet>
      <title>Lapang</title>
    </Helmet>
    <main css={css`width: 100%; padding: 0 12px;`}>
      <div css={css`margin: 50px auto; max-width: 961px;`}>
        <div css={css`margin-bottom: 28px;`}>
          <PageTitle>lapang</PageTitle>
        </div>
        {error && <FetchError refetch={() => refetch()} />}
        {isPending && (
          <div css={listStyle}>
            {[1, 2, 3].map((e, i) => (
              <FieldListSkeleton key={i} />
            ))}
        </div>
        )}
        {fields && (
          <div css={listStyle}>
            {fields.map((e, i) => (
              <FieldCard key={i} data={e} />
            ))}
          </div>
        )}
      </div>
    </main>
  </>)
}

export default FieldPage