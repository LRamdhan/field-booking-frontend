import { Button } from 'antd';
import { css } from '@emotion/react'

const style = css`
  background: red;
  width: 100%; 
  @media(min-width: 768px) {
    background: green;
    width: auto;
  }
`

const ButtonLogin = () => {
  return (
    <Button type={'primary'} css={style}>button</Button>
  )
}

export default ButtonLogin