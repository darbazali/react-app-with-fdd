import apiAgent from "@adapters/apiAgent"
import UserEntity, { GetUsers } from "@domain/entities/userEntity"

export class UserService implements Exact<UserService, UserEntity> {
  async getUsers(): Promise<GetUsers> {
    const { data } = await apiAgent.get<GetUsers>("/users")
    return data
  }
}

export const userService = new UserService()
