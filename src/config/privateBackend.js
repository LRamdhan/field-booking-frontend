import axios from "axios";
import Cookies from "js-cookie";
import { BACKEND_API } from "./env";
import userApi from "../api/userApi";
import UnauthorizeError from "../exception/UnauthorizeError.js";

const privateBackend = axios.create({
  baseURL: BACKEND_API,
});

privateBackend.interceptors.request.use(function (config) {
  const token = Cookies.get('access_token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config;
}, function (error) {
  return Promise.reject(error);
});

privateBackend.interceptors.response.use(function (response) {
  return response;
}, async function (error) {
  if(error.status === 401 && error.config.url !== '/api/users/refresh-token') {
    try {
      const token = await userApi.getNewToken()
      Cookies.set('access_token', token, { expires: 1 / 96 })    
      return privateBackend(error.config)
    } catch(err) {
      console.log(err.message);
      Cookies.remove('access_token')
      Cookies.remove('refresh_token')  
      throw new UnauthorizeError('Refresh Token Error')
    }
  }
  return Promise.reject(error);
});

export default privateBackend