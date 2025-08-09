import Cookies from 'js-cookie';
import { animate, inView } from 'motion';
import { useEffect, useRef } from "react"

const FooterAnimation = ({children, marginView, ...others}) => {
  const target = useRef()
  const refreshToken = Cookies.get('refresh_token')

  useEffect(() => {
    if(!refreshToken) {
      target.current.style.opacity = 0
      inView(target.current, () => {
        animate(target.current, {
          opacity: [0, 1]
        }, {
          duration: 1,
          ease: "easeOut",
        })

      }, {
        margin: `0px ${marginView ? marginView : 150}px -${marginView ? marginView : 150}px 0px`
      })
    }
  }, [])

  return (
    <div ref={target} {...others}>
      {children}
    </div>
  )
}

export default FooterAnimation