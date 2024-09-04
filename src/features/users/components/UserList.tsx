import type { User } from "@domain/models/User"
import React from "react"
import UserCard from "./UserCard"

interface Props {
  users: User[]
}

const UserList: React.FC<Props> = ({ users }) => (
  <div>
    {users.map((user) => (
      <UserCard user={user} />
    ))}
  </div>
)

export default UserList
