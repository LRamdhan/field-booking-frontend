import { css } from "@emotion/react"
import { Typography, Image, Flex, Col, Row } from "antd"
import { convertCost } from "../../utils/cost.utils"
import useUserDetailBookingStore from "../../store/userDetailBookingStore"
import { Link } from "react-router-dom"

const FieldPreview = () => {
  const field = useUserDetailBookingStore(state => state.field)

  let parsedLocation = (field.location.toLowerCase()).split("")
  parsedLocation[0] = parsedLocation[0].toUpperCase()
  parsedLocation = parsedLocation.join("")

  return (
    <Link to={'/lapang/' + field.id} css={css`cursor: pointer;`}>
      <Row css={css`margin: 13px 0; background-color: var(--primary-blur-color); border-radius: 5px; padding: 14px 16px;`}>
        <Col span={12}>
          <Flex gap={15}>
            <Image
              width={73}
              height={73}
              src={field.img}
              css={css`object-fit: cover; object-position: center;`}
            />
            <div>
              <Typography.Title css={css`font-size: 16px; color: var(--text-color); margin: 0; font-weight: 500;`}>{field.name}</Typography.Title>
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); padding: 5px 0 0 0; margin: 0;`}>{parsedLocation}</Typography.Text>
            </div>
          </Flex>
        </Col>
        <Col span={12}>
          <Flex align="flex-end" css={css`height: 100%;`}>
            <div>
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); padding: 5px 0 0 0; margin: 0;`}>Harga</Typography.Text>
              <div css={css`margin-top: 3px;`}>
                <Typography.Title css={css`font-size: 16px; color: var(--text-color); margin: 0; font-weight: 500; display: inline-block;`}>Rp{convertCost(field.cost)}</Typography.Title>
                &nbsp;&nbsp;
                <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); padding: 5px 0 0 0; margin: 0; display: inline-block;`}>/Sesi</Typography.Text>
              </div>
            </div>
          </Flex>
        </Col>
      </Row>
    </Link>
  )
}

export default FieldPreview