import { animate, inView } from "motion"
import { useEffect } from "react"
import { useRef } from "react"

const AboutFirstAnimation = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const titleElement = target.current.children[0]
    const descriptionElement = target.current.children[1]
    const ilustrationElement = target.current.children[2].children[0]
    const vectorElement = target.current.children[2].children[1]

    const initialY = '50%'
    const initialYIlustration = '20%'

    titleElement.style.transform = `translateY(${initialY})`
    titleElement.style.opacity = 0
    descriptionElement.style.transform = `translateY(${initialY})`
    descriptionElement.style.opacity = 0
    ilustrationElement.style.transform = `translateY(${initialYIlustration})`
    ilustrationElement.style.opacity = 0
    vectorElement.style.opacity = 0

    inView(target.current, () => {
      const sequence = [
        [
          titleElement, 
          {
            opacity: [0, 1],
            y: [initialY, 0]
          }, {
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          descriptionElement, 
          {
            opacity: [0, 1],
            y: [initialY, 0]
          }, {
            at: 0.3,
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          vectorElement, 
          {
            opacity: [0, 1],
          }, {
            at: 0.3,
            duration: 0.5,
            ease: "easeOut",
          }
        ],
        [
          ilustrationElement, 
          {
            opacity: [0, 1],
            y: [initialYIlustration, 0]
          }, {
            at: 0.5,
            duration: 1,
            ease: "easeOut",
          }
        ],
      ]
      animate(sequence)
    }, {
      margin: `0px ${marginView ? marginView : 150}px -${marginView ? marginView : 150}px 0px`
    })
  }, [])

  return (
    <div ref={target} {...others}>
      {children}
    </div>
  )
}

export default AboutFirstAnimation