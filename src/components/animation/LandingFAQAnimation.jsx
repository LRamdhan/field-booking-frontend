import { animate, inView } from "motion"
import { useEffect } from "react"
import { useRef } from "react"

const LandingFAQAnimation = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const elements = [
      target.current.children[0],
      ...(Array.from(target.current.children[1].children))
    ]

    const initialY = '50%'

    elements.forEach(item => {
      item.style.transform = `translateY(${initialY})`
      item.style.opacity = 0
    })

    inView(target.current, () => {
      const sequence = elements.map((e, index) => {
        const gap = index * 0.3
        return [
          e, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            at: gap,
            duration: 0.8,
            ease: "easeOut",
          }
        ]
      })
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

export default LandingFAQAnimation