import { create } from "zustand";

const useUserDetailBookingStore = create((set) => ({
  id: null,
  payment_token: null,
  status: null,
  created_date: null,
  schedule: null,
  payment_type: null,
  total: null,
  field: null,
  isReviewed: false,
  isPending: false,
  error: null,
  refetch: null,
  reviewBookingId: null,
  reviewFieldId: null,
  showCancelModal: false,

  setReviewBookingId: reviewBookingId => set({ reviewBookingId }),
  setReviewFieldId: reviewFieldId => set({ reviewFieldId }),
  setShowCancelModal: showCancelModal => set({ showCancelModal }),

  init: (data, isPending, error, refetch) => {
    const newData = {
      isPending, 
      error, 
      refetch,
    }
    if(data) {
      newData.id = data.id
      newData.payment_token = data?.payment_token
      newData.status = data.status
      newData.created_date = data.created_date
      newData.schedule = data.schedule
      newData.payment_type = data.payment_type
      newData.total = data.total
      newData.field = data.field
      newData.isReviewed = data.is_reviewed
    }
    set(newData)
  },

  reset: () => {
    set({ 
      id: null,
      payment_token: null,
      status: null,
      created_date: null,
      schedule: null,
      payment_type: null,
      total: null,
      field: null,
      isPending: false,
      error: null,
      refetch: null,
      isReviewed: false,
      reviewBookingId: null,
      reviewFieldId: null,
      showCancelModal: false
    })
  }
}))

export default useUserDetailBookingStore