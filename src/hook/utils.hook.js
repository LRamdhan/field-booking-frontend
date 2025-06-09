import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UnauthorizeError from "../exception/UnauthorizeError"

export const useCheckAuth = (error) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(error) {
      if(error instanceof UnauthorizeError) {
        navigate('/login')
      }
    }
  }, [error])
}