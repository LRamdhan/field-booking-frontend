import { create } from "zustand";
import userApi from "../api/userApi";

const useProfileStore = create((set, get) => ({
  editMode: false,

  name: '',
  email: '',
  imgUrl: '',
  city: '',
  district: '',
  subDistrict: '',
  
  editName: '',
  editEmail: '',
  editImg: null,
  editCity: null,
  editDistrict: null,
  editSubDistrict: null,

  isPending: false,
  error: null,
  refetch: null,

  setEditMode: editMode => set({ editMode }),

  setEditName: editName => set({ editName }),
  setEditEmail: editEmail => set({ editEmail }),
  setEditImg: editImg => set({ editImg }),
  setEditCity: editCity => set({ editCity }),
  setEditDistrict: editDistrict => set({ editDistrict }),
  setEditSubDistrict: editSubDistrict => set({ editSubDistrict }),

  init: async (data, isPending, error, refetch) => {
    const newState = {
      isPending,
      error,
      refetch,
    }
    if(data) {
      newState.name = data.name
      newState.email = data.email
      newState.imgUrl = data.img_url

      newState.city = {name: data?.city}
      newState.district = {name: data?.district}
      newState.subDistrict = {name: data?.sub_district}
      
      newState.editName = data.name
      newState.editEmail = data.email
      newState.editImg = null

      newState.editCity = {name: data?.city}
      newState.editDistrict = {name: data?.district}
      newState.editSubDistrict = {name: data?.sub_district}

      try {
        const cityCode = await userApi.getCityCode(data?.city)
        newState.city.code = cityCode
        newState.editCity.code = cityCode
        const districtCode = await userApi.getDistrictCode(data?.district, cityCode)
        newState.district.code = districtCode
        newState.editDistrict.code = districtCode
      } catch(err) {
        console.log(err.message);
      }
    }
    set(newState)
  },

  resetEdit: () => {
    const state = get()
    set({
      editName: state.name,
      editEmail: state.email,
      editImg: null,
      editCity: state.city,
      editDistrict: state.district,
      editSubDistrict: state.subDistrict,
    })
  }

}))

export default useProfileStore