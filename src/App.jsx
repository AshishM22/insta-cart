import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUppage"
import HomePage from "./pages/HomePage"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import Protected from "./features/Auth/components/Protected"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <HomePage></HomePage>
      </Protected>
    ),
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
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <CheckoutPage></CheckoutPage>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
