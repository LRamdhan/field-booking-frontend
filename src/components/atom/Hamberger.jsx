import { css } from "@emotion/react"
import { Flex } from "antd"

const Hamberger = ({...others}) => {

  return (
    <Flex {...others} align="center" css={css`height: 100%; padding-left: 20px; cursor: pointer;`}>
      <Flex vertical justify="space-between" align="flex-end" css={css`width: 40px; height: 30px;`}>
        <div css={css`width: 100%; height: 4px; background-color: var(--text-color); border-radius: 30px;`}></div>
        <div css={css`width: 70%; height: 4px; background-color: var(--text-color); border-radius: 30px;`}></div>
        <div css={css`width: 100%; height: 4px; background-color: var(--text-color); border-radius: 30px;`}></div>
      </Flex>
    </Flex>
  )
}

export default Hamberger