import { FC } from "react"
import useGetUsers from "../hooks/useGetUsers"

const Users: FC = (): JSX.Element => {
  const { users, loading, error } = useGetUsers()
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <h1>Users</h1>
      {users?.users?.map((user) => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Users
