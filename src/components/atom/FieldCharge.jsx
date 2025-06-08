import { css } from "@emotion/react";
import { Typography, Flex } from "antd";
import { convertCost } from "../../utils/cost.utils";
const { Title, Text } = Typography;

const FieldCharge = ({data}) => {
  return (
    <Flex gap={6} align="flex-end">
      <Title level={4} css={css`font-size: 18px; color: var(--text-color); margin: 0;`}>Rp{convertCost(data)}</Title>
      <Text css={css`color: var(--secondary-color); font-size: 14px;`}>/sesi</Text>
    </Flex>
  )
}

export default FieldCharge