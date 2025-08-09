import { animate, inView } from "motion"
import { useEffect } from "react"
import { useRef } from "react"

const LandingTestimoniAnimation = ({children, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const head = target.current.children[0];
    const testimoni = target.current.children[1];

    const initialYHead = '50%';
    const initialXTestioni = '10%'

    head.style.transform = `translateY(${initialYHead})`;
    head.style.opacity = 0;
    testimoni.style.transform = `translateX(${initialXTestioni})`;
    testimoni.style.opacity = 0;

    inView(target.current, () => {
      const sequence = [
        [
          head, 
          {
            y: [initialYHead, 0],
            opacity: [0, 1]
          },
          {
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          testimoni, 
          {
            x: [initialXTestioni, 0],
            opacity: [0, 1]
          },
          {
            at: 0.4,
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

export default LandingTestimoniAnimation