import { css } from "@emotion/react";
import { Typography, Flex } from "antd";
const { Title, Text } = Typography;

const FieldCharge = ({data}) => {
  let parsedCost;

  if(data) {
    parsedCost = data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return (
    <Flex gap={6} align="flex-end">
      <Title level={4} css={css`font-size: 18px; color: var(--text-color); margin: 0;`}>Rp{parsedCost}</Title>
      <Text css={css`color: var(--secondary-color); font-size: 14px;`}>/sesi</Text>
    </Flex>
  )
}

export default FieldCharge