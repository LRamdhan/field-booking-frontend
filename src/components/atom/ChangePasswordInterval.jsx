import { useState, useEffect } from "react"

const ChangePasswordInterval = ({timeleft, setTimeleft}) => {
  const [counter, setCounter] = useState(timeleft)

  useEffect(() => {      
    if(counter < 1) {
      setTimeleft(0)
      return
    }
    setTimeout(() => {
      setCounter(counter - 1)
    }, 1000)
  }, [counter])

  return (
    `${counter}`
  )
}

export default ChangePasswordInterval