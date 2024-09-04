import { User } from "@domain/models/User"
import React from "react"

interface Props {
  user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
  const { id, username, email, firstName, lastName } = user

  return (
    <div key={id}>
      <h2>{firstName + " " + lastName}</h2>
      <h5>{username}</h5>
      <p>{email}</p>
    </div>
  )
}

export default UserCard
