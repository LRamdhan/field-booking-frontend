import { useMutation, useQueryClient } from "@tanstack/react-query"
import bookingApi from "../api/bookingApi"
import { useEffect } from "react"
import useUserBookingStore from "../store/userBookingStore"

export const useCreateBooking = (fieldId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => await bookingApi.createBooking(data),
    retry: 0,
    onSuccess: async () => {
      return await queryClient.invalidateQueries({queryKey: ['field_schedule', fieldId]})
    },
    onError: async (error) => {
      if(error.status === 409) {
        return await queryClient.invalidateQueries({queryKey: ['field_schedule', fieldId]})
      }
    }
  })
}

export const useGetUserBooking = (page, limit, status = null, createOrder = null, fieldId = null) => {
  const init = useUserBookingStore(state => state.init)

  const queryKey = ['user_booking']
  if(status) queryKey.push(status)
  if(fieldId) queryKey.push(fieldId)
  queryKey.push(page)
  if(createOrder) queryKey.push(createOrder)

  const {data, isPending, error, refetch} = useQuery({
    queryFn: async () => await bookingApi.getUserBooking(page, limit, status, createOrder, fieldId),
    queryKey,
    retry: 3,
    select: (data) => data.data.data
  })

  useEffect(() => {
    init()
  }, [data, isPending, error, refetch, page, status, createOrder, fieldId])
}