import apiAgent from "@adapters/apiAgent"
import { LoginParams } from "../types"
import AuthEntity from "@core/entities/auth"
import { User } from "@core/entities/User"

class AuthService implements AuthEntity {
  async login(user: LoginParams): Promise<User> {
    const { data } = await apiAgent.post<User>("/login", user)
    return data
  }

  async logout(): Promise<void> {
    await apiAgent.post("/logout")
  }
}

export const authService = new AuthService()
