import { create } from "zustand";
import userApi from "./../api/userApi.js";

const useRegisterStore = create((set, get) => ({
  name: "",
  city: null,
  district: null,
  subDistrict: null,
  email: "",
  password: "",

  setName: name => set({ name }),
  setCity: city => set({ city }),
  setDistrict: district => set({ district }),
  setSubDistrict: subDistrict => set({ subDistrict }),
  setEmail: email => set({ email }),
  setPassword: password => set({ password }),

  resetField: () => set({ name: "", city: null, district: null, subDistrict: null, email: "", password: "" }),

  register: async (onReceived) => {
    let data = get()
    data = {
      name: data.name,
      city: data.city?.name,
      district: data.district?.name,
      sub_district: data.subDistrict?.name,
      email: data.email,
      password: data.password
    }
    await userApi.register(data, onReceived)
  }
}))

export default useRegisterStore