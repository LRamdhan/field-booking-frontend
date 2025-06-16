import { css } from "@emotion/react";
import { Typography, Flex, Skeleton } from "antd";
const { Title, Text } = Typography;
import { IoMdFootball } from "react-icons/io";
import { FaMedkit } from "react-icons/fa";
import { MdScoreboard } from "react-icons/md";
import { FaVest } from "react-icons/fa6";
import { MdOutlineTag } from "react-icons/md";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import useFieldDetailStore from "../../store/fieldDetailStore";
import FACILITIES from "../../constant/facilities";

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
  const isPending = useFieldDetailStore(state => state.isPending)
  const facilities = useFieldDetailStore(state => state.facilities)
  let parsedFacilities = []

  if(facilities) {
    parsedFacilities = facilities.map((e) => {
      switch(e) {
        case FACILITIES.BACKUP_BALS :
          return {
            title: "Bola Cadangan",
            icon: <IoMdFootball css={css`font-size: 24px; color: var(--text-color);`} />
          }
          break
        case FACILITIES.P3K :
          return {
            title: "P3K",
            icon: <FaMedkit css={css`font-size: 24px; color: var(--text-color);`} />
          }
          break
        case FACILITIES.SCORING_BOARD :
          return {
            title: "Scoring Board",
            icon: <MdScoreboard css={css`font-size: 24px; color: var(--text-color);`} />
          }
          break
        case FACILITIES.VEST :
          return {
            title: "Rompi",
            icon: <FaVest css={css`font-size: 24px; color: var(--text-color);`} />
          }
          break
        case FACILITIES.NET :
          return {
            title: "Jaring Pembatas",
            icon: <MdOutlineTag css={css`font-size: 24px; color: var(--text-color);`} />
          }
          break
        case FACILITIES.SEAT :
          return {
            title: "Bangku",
            icon: <MdOutlineAirlineSeatReclineNormal css={css`font-size: 24px; color: var(--text-color);`} />
          }
          break
        default : 
          return false
      }
    })
  };

  return (
    <div>
      {isPending && (<Skeleton active paragraph={{ rows: 2 }} />)}
      {facilities && (<>
        <Title level={3} css={css`font-size: 18px; color: var(--text-color); margin: 0;`}>Fasilitas</Title>
        <div css={facilityStyle}>
          {parsedFacilities.map((e, i) => (
            <Flex align="center" gap={9} key={i}>
              {e.icon}
              <Text css={css`font-size: 15px; color: var(--text-color);`}>{e.title}</Text>
            </Flex>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default FieldFacility