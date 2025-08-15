import { animate, inView } from "motion"
import { useRef } from "react"
import { useEffect } from "react"

const LandingStepImagesAnimation = ({children, marginView, circle, image1, image2, ...others}) => {
  const target = useRef()

  useEffect(() => {
    circle = circle.current
    image1 = image1.current
    image2 = image2.current

    const initialScaleCircle = 0.5
    const initialXImage1 = '-20%'
    const initialXImage2 = '20%'

    circle.style.transform = `scale(${initialScaleCircle})`;
    circle.style.opacity = 0
    image1.style.transform = `translateX(${initialXImage1})`
    image1.style.opacity = 0
    image2.style.transform = `translateX(${initialXImage2})`
    image2.style.opacity = 0

    inView(target.current, () => {
      const sequence = [
        [
          circle, 
          {
            scale: [initialScaleCircle, 1],
            opacity: [0, 1]
          },
          {
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          image1, 
          {
            x: [initialXImage1, 0],
            opacity: [0, 1]
          },
          {
            at: 0.3,
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          image2, 
          {
            x: [initialXImage2, 0],
            opacity: [0, 1]
          },
          {
            at: 0.3,
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

export default LandingStepImagesAnimation