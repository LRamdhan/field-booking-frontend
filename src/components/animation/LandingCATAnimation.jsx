import { animate, inView } from "motion"
import { useEffect } from "react"
import { useRef } from "react"

const LandingCATAnimation = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const background = target.current.children[0];
    const title = target.current.children[0].children[0].children[0];
    const description = target.current.children[0].children[0].children[1];
    const button = target.current.children[0].children[0].children[2];
    const img = target.current.children[0].children[1];

    const initialY = '50%'
    const initialRightImg = '-200px'
    const initialBackgroundColor = 'rgba(255, 111, 0, 0)'

    title.style.transform = `translateY(${initialY})`
    description.style.transform = `translateY(${initialY})`
    button.style.transform = `translateY(${initialY})`
    img.style.right = initialRightImg
    background.style.backgroundColor = initialBackgroundColor
    title.style.opacity = 0
    description.style.opacity = 0
    button.style.opacity = 0
    img.style.opacity = 0

    inView(target.current, () => {
      const sequence = [
        [
          background, 
          {
            backgroundColor: [initialBackgroundColor, 'rgba(255, 111, 0, 1)'],
          },
          {
            duration: 0.7,
            ease: "easeOut",
          }
        ],
        [
          title, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            at: 0.7,
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          description, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            at: 0.9,
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          button, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            at: 1.1,
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          img, 
          {
            right: [initialRightImg, 0],
            opacity: [0, 1]
          },
          {
            at: 1.3,
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

export default LandingCATAnimation