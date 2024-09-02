import AuthUser from "@domain/models/AuthUser"
import { LoginParams } from "features/auth/types"

interface AuthUserEntity {
  login(user: LoginParams): Promise<AuthUser>
  logout(): Promise<void>
}

export default AuthUserEntity
