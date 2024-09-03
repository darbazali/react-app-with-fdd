import { describe, expect, it, beforeEach, mock } from "bun:test"
import apiAgent from "@adapters/apiAgent"
import { userService } from "./userService"
import type { User } from "@domain/models/User"

const mockGet = mock()

beforeEach(() => {
  apiAgent.get = mockGet
  mockGet.mockClear()
})

describe("UserService", () => {
  it("should get users successfully", async () => {
    const mockUsers: User[] = [
      {
        id: 1,
        firstName: "test",
        lastName: "user",
        email: "test@me.com",
        username: "testuser",
        maidenName: "",
        age: 0,
        gender: "",
        phone: "",
        password: "",
        birthDate: "",
        image: "",
        role: "user",
      },
    ]

    mockGet.mockResolvedValueOnce({ data: mockUsers })

    const result = await userService.getUsers()

    expect(mockGet).toHaveBeenCalledWith("/users")
    expect(result).toEqual(mockUsers)
  })
})
