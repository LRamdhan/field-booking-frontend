import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import fieldApi from "../api/fieldApi"
import useFieldDetailStore from "../store/fieldDetailStore"
import { useEffect } from "react"
import useFieldReviewStore from "../store/fieldReviewStore"

export const useFields = () => {
  return useQuery({
    queryFn: async () => await fieldApi.getFields(),
    queryKey: ['fields-list'],
    retry: 3,
    select: (data) => data.data.data
  })
}

export const useFieldOption = () => {
  return useQuery({
    queryFn: async () => await fieldApi.getFields(),
    queryKey: ['fields-option'],
    retry: 3,
    select: (data) => {
      const option = data.data.data.map(item => ({ value: item.id, label: item.name }))
      return [
        {
          value: 0,
          label: 'Semua Lapang'
        },
        ...option
      ]
    }
  })
}

export const useFieldDetail = (id) => {
  const init = useFieldDetailStore(state => state.init)

  const {data, isPending, error, refetch} = useQuery({
    queryFn: async () => await fieldApi.getFieldDetail(id),
    queryKey: ['fields', id],
    retry: 3,
    select: (data) => data.data.data
  })

  useEffect(() => {
    init(data, isPending, error, refetch)
  }, [data, isPending, error, refetch])
}

export const useFieldReviews = (id, page, limit, star) => {
  const init = useFieldReviewStore(state => state.init)

  const queryKey = ['fields', id, 'review']
  if(star) queryKey.push(star)
  queryKey.push(page)

  const {data, isPending, error, refetch} = useQuery({
    queryFn: async () => await fieldApi.getFieldReview(id, page, limit, star),
    queryKey,
    retry: 3,
    select: (data) => data.data.data
  })

  useEffect(() => {
    init(data, isPending, error, refetch)
  }, [page, star, data, isPending, error, refetch])
}

export const useUseFieldSchedule = (fieldId, date) => {
  return useQuery({
    queryFn: async () => await fieldApi.getSchedule(fieldId, date),
    queryKey: ['field_schedule', fieldId, date],
    retry: 1,
    select: (data) => data.data.data
  })
}

export const useCreateReview = (fieldId, data) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data) => await fieldApi.createReview(fieldId, data),
    retry: 0,
    onSuccess: async () => {
      return await queryClient.invalidateQueries({
        predicate: query => {
          const key = query.queryKey
          if(key[0] === 'fields' && key[1] === fieldId && key[2] === 'review') {
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