import { css } from "@emotion/react"
import { Button, Flex, Typography } from "antd"
import { MdComment } from "react-icons/md";

const BookingDetailCreateReview = () => {

  return (
    <div css={css`padding: 18px 0; width: 100%;`}>
      <Typography.Title css={css`font-size: 15px; color: var(--text-color); font-weight: 500; text-transform: capitalize; margin: 0; text-align: center;`}>Beri Ulasan</Typography.Title>
      <p css={css`font-size: 14px; color: var(--secondary-color); margin: 0; text-align: center; margin-top: 10px;`}>Berikan ulasan dan penilaian berdasarkan pengalaman anda</p>
      <Flex justify="center" css={css`margin-top: 15px;`}>
        <Button type="primary" icon={<MdComment css={css`font-size: 17px;`} />} css={css`font-weight: 500; text-transform: capitalize;`}>Ulas</Button>
      </Flex>
    </div>
  )
}

export default BookingDetailCreateReview