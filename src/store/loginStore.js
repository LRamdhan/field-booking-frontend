import { create } from "zustand";
import userApi from "../api/userApi";

const useLoginStore = create((set, get) => ({
  email: "",
  password: "",
  setEmail: email => set({ email }),
  setPassword: password => set({ password }),

  login: async () => {
    let data = get()
    data = {
      email: data.email,
      password: data.password
    }
    await userApi.login(data)
  }
}))

export default useLoginStore