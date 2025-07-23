import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import userApi from "../api/userApi"
import useProfileStore from "../store/profileStore"
import { useEffect } from "react"

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

export const useProfile = () => {
  const init = useProfileStore(state => state.init)

  const {data, isPending, error, refetch} = useQuery({
    queryFn: async () => await userApi.getProfile(),
    queryKey: ['profile'],
    retry: 3,
    select: (data) => {
      return data.data.data
    }
  })

  useEffect(() => {
    init(data, isPending, error, refetch)
  }, [data, isPending, error, refetch])
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => await userApi.updateProfile(data),
    retry: 2,
    onSuccess: async () => {
      return await queryClient.invalidateQueries({queryKey: ['profile']})
    },
  })
}