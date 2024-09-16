import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import UserList from "./UserList"
import { User } from "@domain/models/User"

const users: User[] = [
  {
    id: 1,
    username: "testuser",
    firstName: "",
    lastName: "",
    maidenName: "",
    age: 0,
    gender: "",
    email: "",
    phone: "",
    password: "",
    birthDate: "",
    image: "",
    role: "user",
  },
  {
    id: 2,
    username: "testuser2",
    firstName: "",
    lastName: "",
    maidenName: "",
    age: 0,
    gender: "",
    email: "",
    phone: "",
    password: "",
    birthDate: "",
    image: "",
    role: "user",
  },
]

describe("UserList component", () => {
  it("renders with empty users array", () => {
    const { container } = render(<UserList users={[]} />)
    expect(container.children.length).toBe(0)
  })

  it("renders with single user", () => {
    const { getByText } = render(<UserList users={users} />)
    expect(getByText("testuser")).toBeInTheDocument()
  })
})
