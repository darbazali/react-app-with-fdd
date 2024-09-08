import AuthUser from "@domain/models/AuthUser"

export interface LoginParams {
  username: string
  password: string
}

interface AuthUserEntity {
  login(user: LoginParams): Promise<AuthUser>
  logout(): Promise<void>
}

export default AuthUserEntity
