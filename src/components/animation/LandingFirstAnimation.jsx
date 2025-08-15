import { animate, inView } from "motion";
import { useRef } from "react";
import { useEffect } from "react";

const LandingFirstAnimation = ({children, title, description, button, img, flag, marginView, ...others}) => {
  const target = useRef()

  useEffect(() => {
    const initialY = '100%'
    const initialXImg = '10%'
    const initialYFlag = '-100%'
    title = title.current
    description = description.current
    button = button.current
    img = img.current
    flag = flag.current

    title.style.transform = `translateY(${initialY})`;
    title.style.opacity = 0;
    description.style.transform = `translateY(${initialY})`;
    description.style.opacity = 0;
    button.style.transform = `translateY(${initialY})`;
    button.style.opacity = 0;
    img.style.transform = `translateX(${initialXImg})`;
    img.style.opacity = 0;
    flag.style.transform = `translateY(${initialYFlag})`;

    inView(target.current, () => {
      const sequence = [
        [
          title, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            duration: 1,
            ease: "easeOut",
          }
        ],
        [
          flag, 
          {
            y: 0,
          },
          {
            duration: 1,
            ease: "easeOut",
            at: 0.1
          }
        ],
        [
          description, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            duration: 1,
            ease: "easeOut",
            at: 0.3
          }
        ],
        [
          button, 
          {
            y: [initialY, 0],
            opacity: [0, 1]
          },
          {
            duration: 1,
            ease: "easeOut",
            at: 0.6
          }
        ],
        [
          img, 
          {
            x: [initialXImg, 0],
            opacity: [0, 1]
          },
          {
            duration: 0.7,
            ease: "easeOut",
            at: 0.6
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

export default LandingFirstAnimation