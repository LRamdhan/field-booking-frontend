import Cookies from "js-cookie"
import { animate, inView } from "motion"
import { useEffect } from "react"
import { useRef } from "react"

const FieldAnimation = ({children, marginView, ...others}) => {
  const target = useRef()
  const refreshToken = Cookies.get('refresh_token')

  useEffect(() => {
    if(!refreshToken) {
      const childElement = target.current.children[0].children
      const cardElement = [childElement[0], childElement[1], childElement[2]]
      const backgroundElement = childElement[3].children[0]

      const initialCardY = '30%'
      const initialBackgroundXScale= 0.5

      cardElement.forEach(item => {
        item.style.opacity = 0
        item.style.transform = `translateY(${initialCardY})`
      })
      backgroundElement.style.transform = `scaleX(${initialBackgroundXScale})`
      backgroundElement.style.opacity = 0

      inView(target.current, () => {
        const sequence = [
          [
            backgroundElement,
            {
              opacity: [0, 1],
              transform: [`scaleX(${initialBackgroundXScale})`, 'scaleX(1.1)']
            }, {
              duration: 1,
              ease: "easeOut",
            }
          ],
          [
            childElement[0],
            {
              opacity: [0, 1],
              y: [initialCardY, 0]
            }, {
              at: 0.3,
              duration: 1,
              ease: "easeOut",
            }
          ],
          [
            childElement[1],
            {
              opacity: [0, 1],
              y: [initialCardY, 0]
            }, {
              at: 0.5,
              duration: 1,
              ease: "easeOut",
            }
          ],
          [
            childElement[2],
            {
              opacity: [0, 1],
              y: [initialCardY, 0]
            }, {
              at: 0.7,
              duration: 1,
              ease: "easeOut",
            }
          ],
        ]
        animate(sequence)
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

export default FieldAnimation