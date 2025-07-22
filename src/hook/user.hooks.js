import { useMutation } from "@tanstack/react-query"
import userApi from "../api/userApi"

export const useRequestResetPassword = (email) => {
  return useMutation({
    mutationFn: async () => await userApi.requestResetPassword(email),
    retry: 1,
  })
}

export const useResetPassword = () => {
  return useMutation({
    mutationFn: async ({otp, password}) => {
      await userApi.resetPassword(otp, password)
    },
    retry: 1,
  })
}