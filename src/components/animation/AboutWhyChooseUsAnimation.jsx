import { animate, inView } from "motion"
import { useEffect } from "react"
import { useRef } from "react"

const AboutWhyChooseUsAnimation = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const titleElement = target.current.children[0].children[0].children[0]
    const descriptionElement = target.current.children[0].children[0].children[1]
    const img1Element = target.current.children[0].children[1].children[0]
    const img2Element = target.current.children[0].children[1].children[1]
    const vectorElement = target.current.children[0].children[1].children[2]
  
    const initialY = '50%'
    const initialYTitle = '80%'
    const initialVectorScale = 0.9

    titleElement.style.transform = `translateY(${initialYTitle})`
    titleElement.style.opacity = 0
    descriptionElement.style.transform = `translateY(${initialY})`
    descriptionElement.style.opacity = 0
    img1Element.style.transform = `translateY(${initialY})`
    img1Element.style.opacity = 0
    img2Element.style.transform = `translateY(${initialY})`
    img2Element.style.opacity = 0
    vectorElement.style.transform = `scale(${initialVectorScale})`
    vectorElement.style.opacity = 0

    inView(target.current, () => {
      const sequence = [
        [
          titleElement, 
          {
            opacity: [0, 1],
            y: [initialYTitle, 0]
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
          img1Element, 
          {
            opacity: [0, 1],
            y: [initialY, "-30px"]
          }, {
            at: 0.5,
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          img2Element, 
          {
            opacity: [0, 1],
            y: [initialY, "30px"]
          }, {
            at: 0.6,
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          vectorElement, 
          {
            opacity: [0, 1],
            transform: [`scale(${initialVectorScale})`, `scale(1.5)`]
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
  }, [])

  return (
    <div ref={target} {...others}>
      {children}
    </div>
  )
}

export default AboutWhyChooseUsAnimation