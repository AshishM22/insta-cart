import axios from "axios"

// A mock function to mimic making an async request for data

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const { data } = await axios.get("http://localhost:8080/products")
    resolve({ data })
  })
}

export function fetchProductsByFilter(filter, pagination) {
  // Filter object will look like filter = {"category" : "smartphone"}
  let queryString = ""

  for (let key in filter) {
    const categoryValues = filter[key]
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for (let key in pagination) queryString += `${key}=${pagination[key]}&`

  return new Promise(async (resolve) => {
    const response = await axios.get(
      "http://localhost:8080/products?" + queryString,
    )
    const data = response.data
    const totalItems = response.headers.get("X-Total-Count")
    resolve({ data: { products: data, totalItems: +totalItems } })
  })
}
