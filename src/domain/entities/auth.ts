import { LoginParams } from "features/auth/types"
import { User } from "./User"

interface AuthEntity {
  readonly login: (user: LoginParams) => Promise<User>
  readonly logout: () => Promise<void>
}

export default AuthEntity
