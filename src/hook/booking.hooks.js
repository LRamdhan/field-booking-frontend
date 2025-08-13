import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import bookingApi from "../api/bookingApi"
import { useEffect } from "react"
import useUserBookingStore from "../store/userBookingStore"
import useUserDetailBookingStore from "../store/userDetailBookingStore"
import BOOKING_STATUS from "../constant/bookingStatus"

export const useCreateBooking = (fieldId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => await bookingApi.createBooking(data),
    retry: 0,
    onSuccess: async () => {
      return await queryClient.invalidateQueries({
        predicate: query => {
          const key = query.queryKey
          if(key[0] === 'field_schedule' && key[1] === fieldId) {
            return true
          }
          if(key[0] === 'user_booking') {
            return true
          }
          return false
        }
      })
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
    select: (data) => {
      return data.data.data
    }
  })

  useEffect(() => {
    init(data, isPending, error, refetch, page, status, createOrder, fieldId)
  }, [data, isPending, error, refetch, page, status, createOrder, fieldId])
}

export const useGetDetailUserBooking = (id) => {
  const init = useUserDetailBookingStore(state => state.init)
  const reset = useUserDetailBookingStore(state => state.reset)

  const {data, isPending, error, refetch} = useQuery({
    queryFn: async () => await bookingApi.getDetailUserBooking(id),
    queryKey: ['user_booking', id],
    retry: 3,
    select: (data) => data.data.data
  })

  useEffect(() => {
    reset()
  }, [])

  useEffect(() => {
    init(data, isPending, error, refetch)
  }, [data, isPending, error, refetch])
}

export const useCancelBooking = (bookingId, fieldId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => await bookingApi.cancelBooking(bookingId),
    retry: 0,
    onSuccess: async () => {
      return await queryClient.invalidateQueries({
        predicate: query => {
          const key = query.queryKey
          if(key[0] === 'field_schedule' && key[1] === fieldId) {
            return true
          }
          if(key[0] === 'user_booking') {
            return true
          }
          return false
        }
      })
    },
  })
}

export const useGetUserCurrentBooking = () => {
  const queryKey = ['user_current_booking']

  return useQuery({
    queryFn: async () => {
      const bookingPending = await bookingApi.getUserBooking(1, 2, BOOKING_STATUS.PENDING)
      const bookingActive = await bookingApi.getUserBooking(1, 2, BOOKING_STATUS.AKTIF)
      return {
        data: [...bookingActive.data.data.bookings, ...bookingPending.data.data.bookings],
      }
    },
    queryKey,
    retry: 3,
  })
}