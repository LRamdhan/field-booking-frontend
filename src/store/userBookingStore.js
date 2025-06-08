import { create } from "zustand";

const useUserBookingStore = create((set) => ({
  page: 0,
  limit: 0,
  total_page: 0,
  status: null,
  create_order: null,
  field_id: null,
  bookings: null,

  isPending: false,
  error: null,
  refetch: null,


  init: (data, isPending, error, refetch, page, status, createOrder, fieldId) => {
    // set
  }
}))

export default useUserBookingStore