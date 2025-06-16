import { create } from "zustand"

const useFieldDetailStore = create((set, get) => ({
  isPending: true,
  error: null,
  refetch: null,
  cost: null,
  facilities: [],
  floor_type: null,
  id: null,
  images: [],
  location: null,
  name: null,
  rating: null,

  init: (data, isPending, error, refetch) => {
    set({ 
      isPending, 
      error, 
      refetch,
      cost: data?.cost,
      facilities: data?.facilities,
      floor_type: data?.floor_type,
      id: data?.id,
      images: data?.images,
      location: data?.location,
      name: data?.name,
      rating: data?.rating,
    })
  }
}))

export default useFieldDetailStore