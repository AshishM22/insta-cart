import axios from "axios"
import { BACKEND_URL } from "../../app/constants"

export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    const BACKEND_URL_USERS = `${BACKEND_URL}/user?email=${email}`
    const response = await axios.post(BACKEND_URL_USERS, userData)
    const data = response.data

    resolve({ data })
  })
}
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email
    const password = loginInfo.password

    const BACKEND_URL_USER = `${BACKEND_URL}/user?email=${email}`
    const response = await axios.get(BACKEND_URL_USER)

    const data = response.data

    if (data.length) {
      if (password === data[0].password) {
        resolve({ data })
      } else reject({ message: "Incorrect password" })
    } else reject({ message: "User not found" })
  })
}
