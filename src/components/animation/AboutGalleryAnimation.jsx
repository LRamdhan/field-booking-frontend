import { animate, inView } from 'motion';
import { useEffect, useRef } from "react"

const AboutGalleryAnimation = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const titleElement = target.current.children[0].children[0]
    const galleryElement = target.current.children[0].children[1]

    const initialY = '80%'
    const initialYGallery = '10%'

    titleElement.style.transform = `translateY(${initialY})`
    titleElement.style.opacity = 0
    galleryElement.style.transform = `translateY(${initialYGallery})`
    galleryElement.style.opacity = 0

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
          galleryElement, 
          {
            opacity: [0, 1],
            y: [initialYGallery, 0]
          }, {
            at: 0.2,
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

export default AboutGalleryAnimation