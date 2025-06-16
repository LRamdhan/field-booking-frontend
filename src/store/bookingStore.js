import { create } from "zustand";

const useBookingStore = create(set => ({
  selectedDate: null,
  selectedHour: null,
  selectedPaymentType: null,
  poaSuccess: false,
  bookingId: null,

  setSelectedDate: selectedDate => set({ selectedDate }),
  setSelectedHour: selectedHour => set({ selectedHour }),
  setSelectedPaymentType: selectedPaymentType => set({ selectedPaymentType }),
  setPoaSuccess: poaSuccess => set({ poaSuccess }),
  setBookingId: bookingId => set({ bookingId }),

  reset: () => set({ selectedDate: null, selectedHour: null, selectedPaymentType: null, poaSuccess: false, bookingId: null }),
}))

export default useBookingStore