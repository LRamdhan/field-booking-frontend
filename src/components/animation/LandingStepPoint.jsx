import { animate, inView } from "motion";
import { useRef } from "react";
import { useEffect } from "react"

const LandingStepPoint = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    let elements = Array.from(target.current.children)
    elements = elements.map(e => {
      return {
        icon: e.children[0].children[0],
        line: e.children[0].children[1] || null,
        detail: e.children[1]
      }
    })

    const initialY = '50%'

    elements.forEach(item => {
      item.icon.style.transform = `translateY(${initialY})`
      if(item.line) item.line.style.transform = `translateY(${initialY})`
      item.detail.style.transform = `translateY(${initialY})`
      item.icon.style.opacity = 0
      if(item.line) item.line.style.opacity = 0
      item.detail.style.opacity = 0
    })

    inView(target.current, () => {
      const sequence = []
      
      for(let i = 0; i < elements.length; i++) {
        const gap = i * 0.4
        sequence.push([
          elements[i].icon, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            at: gap,
            duration: 1,
            ease: "easeOut",
          }
        ])
        sequence.push([
          elements[i].detail, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            at: gap,
            duration: 1,
            ease: "easeOut",
          }
        ])
        if(elements[i].line) {
          sequence.push([
            elements[i].line, 
            {
              y: [initialY, 0],
              opacity: [0, 1]
            },
            {
              at: gap,
              duration: 1,
              ease: "easeOut",
            }
          ])
        }
      }

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

export default LandingStepPoint