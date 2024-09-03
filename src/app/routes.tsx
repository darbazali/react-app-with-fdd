import { createBrowserRouter } from "react-router-dom"
import Counter from "features/counter/components/Counter"
import userRoutes from "features/users/userRoutes"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  userRoutes,
])
