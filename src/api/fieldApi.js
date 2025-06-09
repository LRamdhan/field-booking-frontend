import privateBackend from "../config/privateBackend"
import publicBackend from "../config/publicBackend"

const fieldApi = {
  getFields: async () => {
    return await publicBackend.get('/fields')
  },

  getFieldDetail: async (id) => {
    return await publicBackend.get(`/fields/${id}`)
  },

  getFieldReview: async (id, page, limit, star) => {
    return await publicBackend.get(`/fields/${id}/review?page=${page}&limit=${limit}${star ? `&star=${star}` : ''}`)
  },

  getSchedule: async (fieldId, date) => {
    return await publicBackend.get(`/fields/${fieldId}/schedules?date=${date}`)
  },

  createReview: async (fieldId, data) => {
    return await privateBackend.post(`/fields/${fieldId}/review`, data)
  }
}

export default fieldApi