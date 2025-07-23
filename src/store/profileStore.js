import { create } from "zustand";

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
  editCity: '',
  editDistrict: '',
  editSubDistrict: '',

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

  init: (data, isPending, error, refetch) => {
    const newState = {
      isPending,
      error,
      refetch,
    }
    if(data) {
      newState.name = data.name
      newState.email = data.email
      newState.imgUrl = data.img_url
      newState.city = data.city
      newState.district = data.district
      newState.subDistrict = data.sub_district
      newState.editName = data.name
      newState.editEmail = data.email
      newState.editImg = null
      newState.editCity = data.city
      newState.editDistrict = data.district
      newState.editSubDistrict = data.sub_district
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