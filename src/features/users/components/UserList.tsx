import type { User } from "@domain/models/User"
import React from "react"

interface Props {
  users: User[]
}

const UserList: React.FC<Props> = ({ users = [] }): JSX.Element => (
  <div>
    {users.map((user) => (
      <div key={user.id}>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
)

export default UserList
