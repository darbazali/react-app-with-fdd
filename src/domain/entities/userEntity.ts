import { User } from "@domain/models/User"

interface UserEntity {
  getUsers(): Promise<User[]>
}

export default UserEntity
