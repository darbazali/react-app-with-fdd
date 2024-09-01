import { create } from "zustand"

interface CounterState {
  count: number
}

export const useCounterStore = create<CounterState>(() => ({
  count: 0,
}))
