import { css } from "@emotion/react";
import { Button } from "antd";
import { IoCloseSharp } from "react-icons/io5";

const CloseButton = ({ ...others }) => {
  return (
    <Button {...others} icon={<IoCloseSharp css={css`font-size: 40px;`} />} css={css`border: none;`} />
  )
}

export default CloseButton