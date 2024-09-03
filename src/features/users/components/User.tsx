import type { User } from "@domain/models/User"
import { FC } from "react"

interface Props {
  user: User
}
const User: FC<Props> = ({ user }): JSX.Element => {
  return (
    <div>
      <h1>{user.firstName}</h1>
    </div>
  )
}

export default User
