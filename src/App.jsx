import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUppage"
import HomePage from "./pages/HomePage"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailPage from "./pages/ProductDetailPage"

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
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
