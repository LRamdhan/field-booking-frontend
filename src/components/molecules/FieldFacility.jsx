import { css } from "@emotion/react";
import { Typography, Flex } from "antd";
const { Title, Text } = Typography;
import { IoMdFootball } from "react-icons/io";
import { FaMedkit } from "react-icons/fa";
import { MdScoreboard } from "react-icons/md";
import { FaVest } from "react-icons/fa6";
import { MdOutlineTag } from "react-icons/md";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";

const facilityStyle = css`
  margin-top: 20px;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-auto-rows: max-content;
  row-gap: 20px;
  column-gap: 55px;
  @media(min-width: 500px) {
    grid-template-columns: repeat(3, max-content);
    column-gap: 0;
    justify-content: space-between;
  }
`

const FieldFacility = () => {
  const facilities = [
    {
      title: "Bola Cadangan",
      icon: <IoMdFootball css={css`font-size: 24px; color: var(--text-color);`} />
    },
    {
      title: "P3K",
      icon: <FaMedkit css={css`font-size: 24px; color: var(--text-color);`} />
    },
    {
      title: "Scoring Board",
      icon: <MdScoreboard css={css`font-size: 24px; color: var(--text-color);`} />
    },
    {
      title: "Rompi",
      icon: <FaVest css={css`font-size: 24px; color: var(--text-color);`} />
    },
    {
      title: "Jaring Pembatas",
      icon: <MdOutlineTag css={css`font-size: 24px; color: var(--text-color);`} />
    },
    {
      title: "Bangku",
      icon: <MdOutlineAirlineSeatReclineNormal css={css`font-size: 24px; color: var(--text-color);`} />
    },
  ]

  return (
    <div>
      <Title level={3} css={css`font-size: 18px; color: var(--text-color); margin: 0;`}>Fasilitas</Title>
      <div css={facilityStyle}>
        {facilities.map((e, i) => (
          <Flex align="center" gap={9} key={i}>
            {e.icon}
            <Text css={css`font-size: 15px; color: var(--text-color);`}>{e.title}</Text>
          </Flex>
        ))}
      </div>
    </div>
  )
}

export default FieldFacility