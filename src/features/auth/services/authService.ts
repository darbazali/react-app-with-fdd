import apiAgent from "@adapters/apiAgent"
import { LoginParams } from "../types"
import AuthUserEntity from "@domain/entities/authEntity"
import AuthUser from "@domain/models/AuthUser"

export class AuthService implements Exact<AuthService, AuthUserEntity> {
  async login(user: LoginParams): Promise<AuthUser> {
    const { data } = await apiAgent.post<AuthUser>("/login", user)
    return data
  }

  async logout(): Promise<void> {
    await apiAgent.post("/logout")
  }
}

export const authService = new AuthService()
