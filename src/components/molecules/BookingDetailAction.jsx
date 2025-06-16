import { css } from "@emotion/react"
import { Button, Flex, Typography } from "antd"

const BookingDetailAction = ({title, descrption, buttonTitle, icon, onClick, loading}) => {

  return (
    <div css={css`padding: 18px 0;`}>
      <Typography.Title css={css`font-size: 15px; color: var(--text-color); font-weight: 500; text-transform: capitalize; margin: 0;`}>{title}</Typography.Title>
      <Flex justify="space-between" align="center" css={css`margin-top: 10px;`}>
        <Typography.Text css={css`font-size: 14px; color: var(--secondary-color); margin: 0; width: 323px;`}>{descrption}</Typography.Text>
        <Button type="primary" icon={icon} loading={loading} onClick={onClick} css={css`font-weight: 500; text-transform: capitalize;`}>{buttonTitle}</Button>
      </Flex>
    </div>
  )
}

export default BookingDetailAction