import privateBackend from "../config/privateBackend"

const bookingApi = {
  createBooking: async (data) => {
    return await privateBackend.post('/bookings', data)
  },

  getUserBooking: async (page, limit, status = null, createOrder = null, fieldId = null) => {
    const url = `/bookings?page=${page}&limit=${limit}${status ? `&status=${status}` : ''}${createOrder ? `&create_order=${createOrder}` : ''}${fieldId ? `&field_id=${fieldId}` : ''}`
    return await privateBackend.get(url)
  },

  getDetailUserBooking: async (id) => {
    return await privateBackend.get(`/bookings/${id}`)
  },

  cancelBooking: async (id) => {
    return await privateBackend.delete(`/bookings/${id}`)
  }
}

export default bookingApi