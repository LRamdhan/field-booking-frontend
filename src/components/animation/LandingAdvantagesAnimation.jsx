import { animate, inView, stagger } from "motion";
import { useRef } from "react";
import { useEffect } from "react"

const LandingAdvantagesAnimation = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const initialY = '30%'
    const items = Array.from(target.current.children);

    items.forEach((item) => {
      item.style.opacity = 0;
      item.style.transform = `translateY(${initialY})`;
    })

    inView(target.current, () => {
      animate(items, {
        y: [initialY, 0],
        opacity: [0, 1]
      }, {
        duration: 0.7,
        ease: "easeOut",
        delay: stagger(0.2)
      })
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

export default LandingAdvantagesAnimation