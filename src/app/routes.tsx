import { createBrowserRouter } from "react-router-dom"
import Counter from "features/counter/components/Counter"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
])
