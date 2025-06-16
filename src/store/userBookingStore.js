import { create } from "zustand";

const useUserBookingStore = create((set) => ({
  page: 1,
  limit: 7,
  total_page: 0,
  status: 0,
  createOrder: 'desc',
  fieldId: 0,
  bookings: null,
  isPending: false,
  error: null,
  refetch: null,

  setStatus: status => set({ status }),
  setCreateOrder: createOrder => set({ createOrder }),
  setFieldId: fieldId => set({ fieldId }),
  setPage: page => set({ page }),

  init: (data, isPending, error, refetch, page, status, createOrder, fieldId) => {
    const newData = {
      isPending, 
      error, 
      refetch,
      page,
      status,
      createOrder,
      fieldId
    }
    if(data) {
      newData.page = data.page
      newData.limit = data.limit
      newData.total_page = data.total_page
      newData.bookings = data.bookings
      if(data.status) newData.status = data.status
      if(data.create_order) newData.createOrder = data.create_order
      if(data.field_id) newData.fieldId = data.field_id
    }
    set(newData)
  }
}))

export default useUserBookingStore