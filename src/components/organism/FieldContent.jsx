import { css } from "@emotion/react"
import FieldHead from "../molecules/FieldHead"
import { Divider } from "antd"
import FieldCost from "../molecules/FieldCost"
import FieldFacility from "../molecules/FieldFacility"
import FieldReview from "./FieldReview"
import useFieldDetailStore from "../../store/fieldDetailStore"

const FieldContentStyle = css`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: max-content;
  margin-top: 30px;
  @media(min-width: 768px) {
    grid-template-columns: 5fr 3fr;
    gap: 40px;
  }
`

const FieldContent = () => {
  const error = useFieldDetailStore(state => state.error)

  return (
    <div css={FieldContentStyle}>
      <div css={css`width: 100%;`}>
        {!error && (<>
          <FieldHead />
          <Divider css={css`margin: 30px 0;`} />
          <div css={css`@media(min-width: 768px) {display: none;}`}>
            <FieldCost side={false} />
            <Divider css={css`margin: 30px 0;`} />
          </div>
          <FieldFacility />
          <Divider css={css`margin: 30px 0;`} />
        </>)}
        <FieldReview />
      </div>
      <div css={css`width: 100%; display: none; @media(min-width: 768px) {display: block;}`}>
        <FieldCost side={true} />
      </div>
    </div>
  )
}

export default FieldContent