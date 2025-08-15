import { css } from "@emotion/react";
import { Button } from "antd";
import { IoCloseSharp } from "react-icons/io5";

const CloseButton = ({ color, ...others }) => {
  return (
    <Button {...others} icon={<IoCloseSharp css={css`font-size: 40px; color: ${color ? 'var(--background-color)' : color}`} />} css={css`border: none; background-color: transparent;`} />
  )
}

export default CloseButton