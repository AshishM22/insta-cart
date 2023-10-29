import axios from "axios"
import { BACKEND_URL } from "../../app/constants"

// A mock function to mimic making an async request for data

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const BACKEND_URL_CART = `${BACKEND_URL}/cart`

    const response = await axios.post(BACKEND_URL_CART, item)
    const data = response.data
    resolve({ data })
  })
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const BACKEND_URL_CART_ALL_ITEMS = `${BACKEND_URL}/cart?user=${userId}`

    const response = await axios.get(BACKEND_URL_CART_ALL_ITEMS)
    const data = response.data
    resolve({ data })
  })
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const BACKEND_URL_CART_UPDATE = `${BACKEND_URL}/cart/${update.id}`

    const response = await axios.patch(BACKEND_URL_CART_UPDATE, update)
    const data = response.data
    resolve({ data })
  })
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    console.log(itemId)
    const BACKEND_URL_CART_DELETE = `${BACKEND_URL}/cart/${itemId}`

    const response = await axios.delete(BACKEND_URL_CART_DELETE)

    resolve({ data: itemId })
  })
}
