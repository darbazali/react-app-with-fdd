import { describe, expect, it, beforeEach, mock } from "bun:test"
import apiAgent from "@adapters/apiAgent"
import { authService } from "./authService"
import AuthUser from "@domain/models/AuthUser"
import { LoginParams } from "@domain/entities/authEntity"

const mockPost = mock()

beforeEach(() => {
  apiAgent.post = mockPost
  mockPost.mockClear()
})

describe("AuthService", () => {
  it("should login successfully and return user data", async () => {
    const mockUser: AuthUser = {
      id: 1,
      username: "testuser",
      token: "testtoken",
      email: "",
      firstName: "",
      lastName: "",
      gender: "",
      image: "",
      refreshToken: "",
    }

    mockPost.mockResolvedValueOnce({ data: mockUser })

    const loginParams: LoginParams = {
      username: "testuser",
      password: "password123",
    }
    const result = await authService.login(loginParams)

    expect(mockPost).toHaveBeenCalledWith("/login", loginParams)

    expect(result).toEqual(mockUser)
  })

  it("should handle logout successfully", async () => {
    mockPost.mockResolvedValueOnce({})

    await authService.logout()

    expect(mockPost).toHaveBeenCalledWith("/logout")
  })
})
