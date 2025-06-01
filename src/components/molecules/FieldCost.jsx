import { css } from "@emotion/react";
import { Typography, Flex, Button, Skeleton } from "antd";
const { Title, Text } = Typography;
import { Link, useParams } from 'react-router-dom';
import useFieldDetailStore from "../../store/fieldDetailStore";

const FieldCost = ({side}) => {
  const isPending = useFieldDetailStore(state => state.isPending)
  const cost = useFieldDetailStore(state => state.cost)
  const {id: fieldId} = useParams()
  let parsedCost;

  if(cost) {
    parsedCost = cost.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return (<>
    {isPending && (
      <Skeleton active />
    )}
    {cost && (<>
      <div css={side ? css`border: 1px solid var(--blur-color); padding: 18px; border-radius: 5px;` : css``}>
        <Text css={css`font-size: 14px; color: var(--secondary-color);`}>Harga</Text>
        <Flex align="flex-end" gap={5} css={css`margin-top: 5px;`}>
          <Title level={4} css={css`font-size: 22px; margin: 0; color: var(--text-color);`}>Rp{parsedCost}</Title>
          <Text css={css`color: var(--secondary-color); font-size: 14px;`}>/sesi</Text>
        </Flex>
        <Link to={`/lapang/${fieldId}/booking`}>
          <Button type="primary" size="large" css={css`width: 100%; font-size: 15px; font-weight: 500; color: var(--background-color); margin-top: 14px;`}>Booking</Button>
        </Link>
      </div>
    </>)}
  </>)
}

export default FieldCost