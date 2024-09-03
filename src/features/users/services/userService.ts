import apiAgent from "@adapters/apiAgent"
import UserEntity from "@domain/entities/userEntity"
import { User } from "@domain/models/User"

export class UserService implements Exact<UserService, UserEntity> {
  async getUsers(): Promise<User[]> {
    const { data } = await apiAgent.get<User[]>("/users")
    return data
  }
}

export const userService = new UserService()
