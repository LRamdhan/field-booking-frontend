import { css } from "@emotion/react";
import { Typography, Flex, Select } from "antd";
const { Title, Text } = Typography;
import { FaStar } from "react-icons/fa";
import useFieldReviewStore from "../../store/fieldReviewStore";

const SelectOptionLabel = ({label}) => (
  <Flex align="center" gap={4}>
    <FaStar css={css`color: #FADB14; font-size: 15px;`} />
    <Text css={css`color: var(--text-color); font-size: 15px; font-weight: 500;`}>{label}</Text>
  </Flex>
)

const FieldReviewHead = () => {
  const average_rating = useFieldReviewStore(state => state.average_rating)
  const total_reviews = useFieldReviewStore(state => state.total_reviews)
  const isPending = useFieldReviewStore(state => state.isPending)
  const star = useFieldReviewStore(state => state.star)
  const setStar = useFieldReviewStore(state => state.setStar)
  const setPage = useFieldReviewStore(state => state.setPage)
  const ratingOption = [
    {
      label: <SelectOptionLabel label="Semua" />,
      value: 0
    },
    {
      label: <SelectOptionLabel label="5" />,
      value: 5
    },
    {
      label: <SelectOptionLabel label="4" />,
      value: 4
    },
    {
      label: <SelectOptionLabel label="3" />,
      value: 3
    },
    {
      label: <SelectOptionLabel label="2" />,
      value: 2
    },
    {
      label: <SelectOptionLabel label="1" />,
      value: 1
    }
  ]

  const handleChange = value => {
    setStar(value)
    setPage(1)
  }

  return (
    <Flex justify="space-between">
      <div>
        <Title level={3} css={css`font-size: 18px; color: var(--text-color); margin: 0;`}>Ulasan</Title>
        {!isPending && (<>
          <Flex align="center" gap={6} css={css`margin-top: 7px;`}>
            <FaStar css={css`color: var(--text-color); font-size: 17px;`} />
            <Text css={css`color: var(--text-color); font-size: 17px; font-weight: 500;`}>{average_rating ? average_rating.toString().slice(0, 3) : 0}</Text>
            <Text css={css`color: var(--secondary-color); font-size: 13px; font-weight: 500;`}>/5</Text>
            <Text css={css`color: var(--secondary-color); font-size: 13px; font-weight: 500;`}>({total_reviews} Ulasan)</Text>
          </Flex>
        </>)}
      </div>
      <Select
        value={star || 0}
        options={ratingOption}
        onChange={handleChange}
        css={css`width: 110px;`}
      />
    </Flex>
  )
}

export default FieldReviewHead