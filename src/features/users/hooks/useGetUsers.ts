import { useEffect, useState } from "react"
import { userService } from "../services/userService"
import { GetUsers } from "@domain/entities/userEntity"

const useGetUsers = () => {
  const [data, setData] = useState<GetUsers>({
    limit: 0,
    skip: 0,
    total: 0,
    users: [],
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>()

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
