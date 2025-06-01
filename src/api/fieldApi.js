import axiosBackend from "../config/axiosBackend"

const fieldApi = {
  getFields: async () => {
    return await axiosBackend.get('/fields')
  },

  getFieldDetail: async (id) => {
    return await axiosBackend.get(`/fields/${id}`)
  },

  getFieldReview: async (id, page, limit, star) => {
    return await axiosBackend.get(`/fields/${id}/review?page=${page}&limit=${limit}${star ? `&star=${star}` : ''}`)
  }
}

export default fieldApi