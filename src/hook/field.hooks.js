import { useQuery } from "@tanstack/react-query"
import fieldApi from "../api/fieldApi"
import useFieldDetailStore from "../store/fieldDetailStore"
import { useEffect, useState } from "react"
import useFieldReviewStore from "../store/fieldReviewStore"

export const useFields = () => {
  return useQuery({
    queryFn: async () => await fieldApi.getFields(),
    queryKey: ['fields-list'],
    retry: 3,
    select: (data) => data.data.data
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