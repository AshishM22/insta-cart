import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectLoggedInUser } from "../AuthSlice"

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser)

  if (!user) {
    return <Navigate to="/login"></Navigate>
  } else return children
}

export default Protected
