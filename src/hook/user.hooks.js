import { useMutation, useQueryClient } from "@tanstack/react-query"
import userApi from "../api/userApi"

export const useCancelBooking = (email) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => await userApi.requestResetPassword(email),
    retry: 3,
  })
}