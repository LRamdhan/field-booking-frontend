import { css } from "@emotion/react"
import { animate, inView } from "motion"
import { useEffect, useRef } from "react"

const SwipeDown = ({children, marginView, ...props}) => {
  const target = useRef()
  const initialY = '-100%'

  useEffect(() => {
    inView(target.current, () => {
      animate(target.current, {
          y: [initialY, 0]
        }, 
        {
          duration: 1,
          ease: "circInOut",
        }
      )
    }, {
      margin: `0px ${marginView ? marginView : 100}px -${marginView ? marginView : 100}px 0px`
    })
  }, [])

  return (
    <div ref={target} {...props} css={css`transform: translateY(${initialY});`} >{children}</div>
  )
}

export default SwipeDown