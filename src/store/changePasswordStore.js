import { create } from "zustand";

const useChangePasswordStore = create(set => ({
  isStarted: false,
  openSuccessNotif: false,

  otp: '',
  newPassword: '',
  confirmPassword: '',
  isComplexityValid: false,

  setIsStarted: isStarted => set({ isStarted }),
  setOpenSuccessNotif: openSuccessNotif => set({ openSuccessNotif }),

  setOtp: otp => set({otp}),
  setNewPassword: newPassword => set({newPassword}),
  setConfirmPassword: confirmPassword => set({confirmPassword}),
  setIsComplexityValid: isComplexityValid => set({isComplexityValid}),
  reset: () => set({ otp: '', newPassword: '', confirmPassword: '', isComplexityValid: false })
}))

export default useChangePasswordStore