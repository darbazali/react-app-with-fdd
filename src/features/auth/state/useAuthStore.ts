import { create } from "zustand"

interface AuthState {
  isAuthenticated: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  async login(): Promise<void> {
    set({ isAuthenticated: true })
  },

  async logout(): Promise<void> {
    set({ isAuthenticated: false })
  },
}))
