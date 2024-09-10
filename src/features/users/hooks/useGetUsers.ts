import { userService } from "../services/userService"
import { GetUsers } from "@domain/entities/userEntity"
import useSWR from "swr"

const useGetUsers = () => {
  const {
    data = { limit: 0, skip: 0, total: 0, users: [] },
    error,
    isLoading,
  } = useSWR<GetUsers>("/users", userService.getUsers)

  return { users: data, isLoading, error }
}

export default useGetUsers
