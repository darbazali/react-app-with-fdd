import { User } from "@domain/models/User"

export interface GetUsers {
  limit: number
  skip: number
  total: number
  users: User[]
}

interface UserEntity {
  getUsers(): Promise<GetUsers>
}

export default UserEntity
