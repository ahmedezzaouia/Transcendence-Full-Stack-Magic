import { create } from 'zustand'

// type State = {
//   count: number
// }

// type Actions = {
//   increment: (qty: number) => void
//   decrement: (qty: number) => void
// }

// const useCountStore = create<State & Actions>((set) => ({
//   count: 0,
//   increment: (qty: number) => set((state) => ({ count: state.count + qty })),
//   decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
// }))



// // use zustand for userStore


export const useUserStore = create((set) => ({}))