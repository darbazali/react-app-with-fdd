import { type RouteObject } from "react-router-dom"
import Users from "./components/Users"

const userRoutes: RouteObject = {
  path: "/users",
  element: <Users />,
}

export default userRoutes
