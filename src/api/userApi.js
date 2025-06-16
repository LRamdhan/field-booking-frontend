import axios from "axios"
import { LOCATION_API } from "../config/env"
import publicBackend from "../config/publicBackend"
import socket from "../config/wsClient"
import Cookies from "js-cookie"
import privateBackend from "../config/privateBackend"

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
    await publicBackend.post('/users/register', data)
    socket.auth.email = data.email
    socket.connect()
    socket.on('register', (message) => {      
      message = JSON.parse(message)
      Cookies.set('access_token', message.accessToken, { expires: 1 / 96 })
      Cookies.set('refresh_token', message.refreshToken, { expires: 30 })
      socket.disconnect()
      onReceived()
    });  
  },

  login: async (data) => {
    let result = await publicBackend.post('/users/login', data)
    result = {
      accessToken: result.data.data.access_token,
      refreshToken: result.data.data.refresh_token
    }
    Cookies.set('access_token', result.accessToken, { expires: 1 / 96 })
    Cookies.set('refresh_token', result.refreshToken, { expires: 30 })
  },

  logout: async () => {
    const token = Cookies.get('access_token')
    await privateBackend.delete('/users/logout', { 
      headers: { 
        'Authorization': `Bearer ${token}` 
      }
    }).catch(err => {
      if(err.response.status === 401) {
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')
      }
      throw err
    })
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
  },

  getNewToken: async () => {
    const refreshToken = Cookies.get('refresh_token')
    const result = await publicBackend.post('/users/refresh-token', {
      refresh_token: refreshToken
    })
    return result.data?.data?.access_token
  }

}

export default userApi