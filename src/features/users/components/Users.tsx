import { FC } from "react"
import useGetUsers from "../hooks/useGetUsers"
import UserList from "./UserList"

const Users: FC = (): JSX.Element => {
  const { users, isLoading, error } = useGetUsers()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users.users} />
    </div>
  )
}

export default Users
