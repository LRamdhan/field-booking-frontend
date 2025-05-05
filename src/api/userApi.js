import axios from "axios"
import { LOCATION_API } from "../config/env"
import authBackend from "../config/authBackend"
import socket from "../config/wsClient"
import Cookies from "js-cookie"

const userApi = {
  getCity: async () => {
    const result = await axios.get(LOCATION_API + '/regencies?limit=100&provinceCode=32')
    return result.data.data
  },

  getDistrict: async (cityCode) => {
    const result = await axios.get(LOCATION_API + `/districts?limit=100&regencyCode=${cityCode}`)
    return result.data.data
  },
  
  getSubDistrict: async (districtCode) => {
    const result = await axios.get(LOCATION_API + `/villages?limit=100&districtCode=${districtCode}`)
    return result.data.data
  },

  register: async (data, onReceived) => {
    await authBackend.post('/users/register', data)
    socket.auth.email = data.email
    socket.connect()
    socket.on('register', (message) => {      
      message = JSON.parse(message)
      Cookies.set('access_token', message.accessToken, { expires: 1 / 96 })
      Cookies.set('refresh_token', message.refreshToken, { expires: 30 })
      socket.disconnect()
      onReceived()
    });  
  }
}

export default userApi