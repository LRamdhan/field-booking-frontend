import { create } from "zustand"

const useFieldReviewStore = create((set) => ({
  isPending: true,
  error: null,
  refetch: null,
  average_rating: null,
  limit: 7,
  page: 1,
  reviews: [],
  total_reviews: null,
  total_page: 0,
  star: 0,
  
  init: (data, isPending, error, refetch) => {
    let newData = {
      isPending, 
      error, 
      refetch,
    }
    if(data) {
      newData.average_rating = data?.average_rating
      newData.limit = data?.limit
      newData.page = data?.page
      newData.reviews = data?.reviews
      newData.total_reviews = data?.total_reviews
      newData.total_page = data?.total_page
    }
    set(newData)
  },

  setPage: page => set({ page }),
  setStar: star => set({ star }),

}))

export default useFieldReviewStore