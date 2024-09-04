import type { User } from "@domain/models/User"
import React from "react"

interface Props {
  users: User[]
}

const UserList: React.FC<Props> = ({ users }) => (
  <div>
    {users.map(({ id, username, email }) => (
      <div key={id}>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    ))}
  </div>
)

export default UserList
