import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import UserCard from "./UserCard"
import { User } from "@domain/models/User"

const user: User = {
  id: 1,
  username: "testuser",
  email: "test@example.com",
  firstName: "John",
  lastName: "Doe",
  maidenName: "",
  age: 0,
  gender: "",
  phone: "",
  password: "",
  birthDate: "",
  image: "",
  role: "user",
}

describe("UserCard component", () => {
  it("renders with valid user data", () => {
    const { getByText } = render(<UserCard user={user} />)

    expect(getByText("John Doe")).toBeInTheDocument()
    expect(getByText("testuser")).toBeInTheDocument()
    expect(getByText("test@example.com")).toBeInTheDocument()
  })

  it.skip("renders with missing user data", () => {
    const { getByText } = render(<UserCard user={user} />)

    expect(getByText("")).toBeInTheDocument()
    expect(getByText("")).toBeInTheDocument()
    expect(getByText("")).toBeInTheDocument()
  })
})
