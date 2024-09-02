import { describe, expect, it, beforeEach, mock } from "bun:test"
import apiAgent from "@adapters/apiAgent"
import { authService } from "./authService"
import { LoginParams } from "../types"
import AuthUser from "@domain/models/AuthUser"

// Manual mock of apiAgent
const mockPost = mock()

// Replace the original post method with the mock
beforeEach(() => {
  apiAgent.post = mockPost
  mockPost.mockClear() // Clear mock data before each test
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

    // Mock the API response
    mockPost.mockResolvedValueOnce({ data: mockUser })

    const loginParams: LoginParams = {
      username: "testuser",
      password: "password123",
    }
    const result = await authService.login(loginParams)

    // Check that the correct endpoint and data were used
    expect(mockPost).toHaveBeenCalledWith("/login", loginParams)

    // Verify that the login method returns the correct user data
    expect(result).toEqual(mockUser)
  })

  it("should handle logout successfully", async () => {
    // Mock the API response for logout
    mockPost.mockResolvedValueOnce({})

    await authService.logout()

    // Check that the correct endpoint was called
    expect(mockPost).toHaveBeenCalledWith("/logout")
  })
})
