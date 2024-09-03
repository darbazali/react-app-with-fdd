import { useEffect, useState } from "react"
import { userService } from "../services/userService"
import { User } from "@domain/models/User"

const useGetUsers = () => {
  const [data, setData] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>({})

  useEffect(() => {
    ;(async () => {
      try {
        const data = await userService.getUsers()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    })()
  }, [])

  return { users: data, loading, error }
}

export default useGetUsers
