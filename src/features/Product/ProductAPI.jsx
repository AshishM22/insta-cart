import axios from "axios"
import { BACKEND_URL } from "../../app/constants"

export function fetchProductsByFilter(filter, pagination) {
  // Filter object will look like filter = {"category" : "smartphone"}
  let queryString = ""

  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }

  for (let key in pagination) queryString += `${key}=${pagination[key]}&`

  return new Promise(async (resolve) => {
    const response = await axios.get(`${BACKEND_URL}/products?${queryString}`)
    const data = response.data
    const totalItems = response.headers.get("X-Total-Count")
    resolve({ data: { products: data, totalItems: +totalItems } })
  })
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await axios.get(`${BACKEND_URL}/categories`)
    const data = response.data

    resolve({ data })
  })
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await axios.get(`${BACKEND_URL}/brands`)
    const data = response.data

    resolve({ data })
  })
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await axios.get(`${BACKEND_URL}/products/${id}`)
    const data = response.data

    resolve({ data })
  })
}
