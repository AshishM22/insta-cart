import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUppage"
import HomePage from "./pages/HomePage"

import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CartPage from "./pages/CartPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
