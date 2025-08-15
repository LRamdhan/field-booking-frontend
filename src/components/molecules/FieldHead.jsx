import { css } from "@emotion/react";
import { Typography, Rate, Flex, Skeleton } from "antd";
const { Title, Text } = Typography;
import { PiBuildingsFill } from "react-icons/pi";
import { GiHighGrass } from "react-icons/gi";
import useFieldDetailStore from "../../store/fieldDetailStore";
import { GiSoccerField } from "react-icons/gi";

const FieldHead = () => {
  const isPending = useFieldDetailStore(state => state.isPending)
  const name = useFieldDetailStore(state => state.name)
  const rating = useFieldDetailStore(state => state.rating)
  const floor_type = useFieldDetailStore(state => state.floor_type)
  const location = useFieldDetailStore(state => state.location)
  let parsedFloorType
  let parseLocation

  if(floor_type && location) {
    parsedFloorType = floor_type
    parsedFloorType = parsedFloorType.toLowerCase()
    parsedFloorType = parsedFloorType.charAt(0).toUpperCase() + parsedFloorType.slice(1)
    parseLocation = location
    parseLocation = parseLocation.toLowerCase()
    parseLocation = parseLocation.charAt(0).toUpperCase() + parseLocation.slice(1)
  }

  return (
    <div>
      <Flex justify="space-between">
        {isPending && (<>
          <Skeleton.Node active css={css`width: 105px; height: 30px;`} />
          <Skeleton.Node active css={css`width: 112px; height: 32px;`} />
        </>)}
        {(name) && (<>
          <Title level={3} css={css`color: var(--text-color); margin: 0;`}>{name}</Title>
          <Rate disabled value={rating} css={css`font-size: 16px;`} />
        </>)}
      </Flex>
      <Flex align="flex-end" gap={10} css={css`margin-top: 16px;`}>
        <Flex align="flex-end" gap={7}>
          {isPending && (<>
            <Skeleton.Node active css={css`width: 70px; height: 22px;`} />
          </>)}
          {location && (<>
            {location === 'INDOOR' ? (
              <PiBuildingsFill css={css`font-size: 22px; color: var(--secondary-color);`} />
              ) : (
              <GiSoccerField css={css`font-size: 22px; color: var(--secondary-color);`} />
            )}
            <Text css={css`font-size: 14px; color: var(--secondary-color);`}>{parseLocation}</Text>
          </>)}
        </Flex>
        <span css={css`color: var(--secondary-color);`}>|</span>
        <Flex align="flex-end" gap={7}>
          {isPending && (<>
            <Skeleton.Node active css={css`width: 70px; height: 22px;`} />
          </>)}
          {floor_type && (<>
            <GiHighGrass css={css`font-size: 22px; color: var(--secondary-color);`} />
            <Text css={css`font-size: 14px; color: var(--secondary-color);`}>{parsedFloorType}</Text>
          </>)}
        </Flex>
      </Flex>
    </div>
  )
}

export default FieldHead