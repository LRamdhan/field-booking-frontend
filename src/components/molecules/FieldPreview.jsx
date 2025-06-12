import { css } from "@emotion/react"
import { Typography, Image, Flex, Col, Row } from "antd"
import { convertCost } from "../../utils/cost.utils"

const FieldPreview = ({fieldName, location, cost}) => {

  return (
    <Row css={css`margin: 13px 0; background-color: var(--primary-blur-color); border-radius: 5px; padding: 14px 16px;`}>
      <Col span={12}>
        <Flex gap={15}>
          <Image
            width={73}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div>
            <Typography.Title css={css`font-size: 16px; color: var(--text-color); margin: 0; font-weight: 500;`}>{fieldName}</Typography.Title>
            <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); padding: 5px 0 0 0; margin: 0;`}>{location}</Typography.Text>
          </div>
        </Flex>
      </Col>
      <Col span={12}>
        <Flex align="flex-end" css={css`height: 100%;`}>
          <div>
            <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); padding: 5px 0 0 0; margin: 0;`}>Harga</Typography.Text>
            <div css={css`margin-top: 3px;`}>
              <Typography.Title css={css`font-size: 16px; color: var(--text-color); margin: 0; font-weight: 500; display: inline-block;`}>Rp{convertCost(cost)}</Typography.Title>
              &nbsp;&nbsp;
              <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); padding: 5px 0 0 0; margin: 0; display: inline-block;`}>/Sesi</Typography.Text>
            </div>
          </div>
        </Flex>
      </Col>
    </Row>
  )
}

export default FieldPreview