import { css } from "@emotion/react"
import { animate, inView } from "motion"
import { useEffect, useRef } from "react"

const FadeUp = ({children, marginView, ...props}) => {
  const target = useRef()
  const initialY = '50%'

  useEffect(() => {
    inView(target.current, () => {
      animate(target.current, {
          y: [initialY, 0],
          opacity: [0, 1]
        }, 
        {
          duration: 1,
          ease: "easeOut",
        }
      )
    }, {
      margin: `0px ${marginView ? marginView : 100}px -${marginView ? marginView : 100}px 0px`
    })
  }, [])

  return (
    <div ref={target} {...props} css={css`transform: translateY(${initialY}); opacity: 0;`} >{children}</div>
  )
}

export default FadeUp