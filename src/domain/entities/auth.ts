import { LoginParams } from "features/auth/types"
import { User } from "./User"

interface AuthEntity {
  login: (user: LoginParams) => Promise<User>
  logout: () => Promise<void>
}

export default AuthEntity
