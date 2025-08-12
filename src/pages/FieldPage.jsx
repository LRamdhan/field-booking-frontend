import { Helmet } from "react-helmet"
import PageTitle from "../components/atom/PageTitle"
import { css } from "@emotion/react"
import FieldCard from "../components/organism/FieldCard"
import { useFields } from "../hook/field.hooks.js"
import FetchError from "../components/molecules/FetchError"
import FieldListSkeleton from "../components/molecules/FieldListSkeleton"
import { Flex } from "antd"
import Cookies from 'js-cookie';
import FieldAnimation from "../components/animation/FieldAnimation"

const listStyle = css`
  position: relative;
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
  const refreshToken = Cookies.get('refresh_token')

  if(error) console.log(error.message);

  return (<>
    <Helmet>
      <title>Lapang</title>
    </Helmet>
    <main css={css`width: 100%; padding: 0 12px; overflow-x: hidden;`}>
      <div css={css`margin: 30px auto; max-width: 961px;`}>
        {refreshToken && (
          <div css={css`margin-bottom: 28px;`}>
            <PageTitle>lapang</PageTitle>
          </div>
        )}
        {error && <FetchError refetch={() => refetch()} />}
        {isPending && (
          <div css={listStyle}>
            {[1, 2, 3].map((e, i) => (
              <FieldListSkeleton key={i} />
            ))}
        </div>
        )}
        {fields && (
          <FieldAnimation>
            <div css={listStyle}>
              {fields.map((e, i) => (
                <FieldCard key={i} data={e} />
              ))}
              {!refreshToken && (
                <Flex align="center" css={css`display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; @media(min-width: 768px) {display: flex;}`}>
                  <div css={css`width: 100%; height: 290px; background-color: #FFE1CA; transform: scaleX(1.1); border-radius: 10px;`}></div>
                </Flex>
              )}
            </div>
          </FieldAnimation>
        )}
      </div>
    </main>
  </>)
}

export default FieldPage