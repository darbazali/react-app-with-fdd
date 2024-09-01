import { create } from "zustand"

interface AuthState {
  isAuthenticated: boolean
  token: string | null
  login: (token: string) => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,

  async login(token): Promise<void> {
    set({ isAuthenticated: true, token })
  },

  async logout(): Promise<void> {
    set({ isAuthenticated: false, token: null })
  },
}))
