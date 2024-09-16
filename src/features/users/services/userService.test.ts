import { describe, expect, it, beforeEach, vi } from "vitest"

import apiAgent from "@adapters/apiAgent"
import { userService } from "./userService"
import { GetUsers } from "@domain/entities/userEntity"

const mockGet = vi.fn()

beforeEach(() => {
  apiAgent.get = mockGet
  mockGet.mockClear()
})

describe("UserService", () => {
  it("should get users successfully", async () => {
    const mockUsers: GetUsers = {
      limit: 0,
      skip: 0,
      total: 0,
      users: [
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
      ],
    }

    mockGet.mockResolvedValueOnce({ data: mockUsers })

    const result = await userService.getUsers()

    expect(mockGet).toHaveBeenCalledWith("/users")
    expect(result).toEqual(mockUsers)
  })
})
