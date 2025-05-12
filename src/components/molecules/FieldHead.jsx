import { css } from "@emotion/react";
import { Typography, Rate, Flex } from "antd";
const { Title, Text } = Typography;
import { PiBuildingsFill } from "react-icons/pi";
import { GiHighGrass } from "react-icons/gi";

const FieldHead = () => {

  return (
    <div>
      <Flex justify="space-between">
        <Title level={3} css={css`color: var(--text-color); margin: 0;`}>Lapang A</Title>
        <Rate disabled defaultValue={4} css={css`font-size: 16px;`} />
      </Flex>
      <Flex align="flex-end" gap={10} css={css`margin-top: 16px;`}>
        <Flex align="flex-end" gap={7}>
          <PiBuildingsFill css={css`font-size: 22px; color: var(--secondary-color);`} />
          <Text css={css`font-size: 14px; color: var(--secondary-color);`}>Indoor</Text>
        </Flex>
        <span css={css`color: var(--secondary-color);`}>|</span>
        <Flex align="flex-end" gap={7}>
          <GiHighGrass css={css`font-size: 22px; color: var(--secondary-color);`} />
          <Text css={css`font-size: 14px; color: var(--secondary-color);`}>Sintetis</Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default FieldHead