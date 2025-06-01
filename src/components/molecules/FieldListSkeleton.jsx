import { css } from "@emotion/react";
import { Skeleton } from "antd";

const FieldListSkeleton = () => {
  return (
    <Skeleton.Node active css={css`width: 100%; height: 185px;`} />
  )
}

export default FieldListSkeleton