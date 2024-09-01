import { apiAgent } from "@adapters/apiAgent"
import { LoginParams } from "../types"

interface IAuthService {
  readonly login: (user: LoginParams) => Promise<void>
  readonly logout: () => Promise<void>
}

export class AuthService implements IAuthService {
  async login(user: LoginParams): Promise<void> {
    await apiAgent.post<LoginParams, { data: LoginParams }>("/login", {
      data: user,
    })
  }

  async logout(): Promise<void> {
    await apiAgent.post("/logout")
  }
}
