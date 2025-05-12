import { css } from "@emotion/react";
import { Typography, Flex, Select } from "antd";
const { Title, Text } = Typography;
import { FaStar } from "react-icons/fa";

const SelectOptionLabel = ({label}) => (
  <Flex align="center" gap={4}>
    <FaStar css={css`color: #FADB14; font-size: 15px;`} />
    <Text css={css`color: var(--text-color); font-size: 15px; font-weight: 500;`}>{label}</Text>
  </Flex>
)

const FieldReviewHead = () => {
  const ratingOption = [
    {
      label: <SelectOptionLabel label="5" />,
      value: "5"
    },
    {
      label: <SelectOptionLabel label="4" />,
      value: "4"
    },
    {
      label: <SelectOptionLabel label="3" />,
      value: "3"
    },
    {
      label: <SelectOptionLabel label="2" />,
      value: "2"
    },
    {
      label: <SelectOptionLabel label="1" />,
      value: "1"
    }
  ]

  return (
    <Flex justify="space-between">
      <div>
        <Title level={3} css={css`font-size: 18px; color: var(--text-color); margin: 0;`}>Ulasan</Title>
        <Flex align="center" gap={6} css={css`margin-top: 7px;`}>
          <FaStar css={css`color: var(--text-color); font-size: 17px;`} />
          <Text css={css`color: var(--text-color); font-size: 17px; font-weight: 500;`}>4.5</Text>
          <Text css={css`color: var(--secondary-color); font-size: 13px; font-weight: 500;`}>/5</Text>
          <Text css={css`color: var(--secondary-color); font-size: 13px; font-weight: 500;`}>(70 Ulasan)</Text>
        </Flex>
      </div>
      <Select
        defaultValue={"5"}
        options={ratingOption}
        css={css`width: 71px;`}
      />
    </Flex>
  )
}

export default FieldReviewHead