import { LoginParams } from "features/auth/types"
import { User } from "./User"

interface AuthModel {
  readonly login: (user: LoginParams) => Promise<User>
  readonly logout: () => Promise<void>
}

export default AuthModel
