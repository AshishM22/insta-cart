import axios from "axios"

export function fetchProductsByFilter(filter, pagination) {
  // Filter object will look like filter = {"category" : "smartphone"}
  let queryString = ""

  for (let key in filter) {
    const categoryValues = filter[key]
    console.log(categoryValues)
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues
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

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/categories")
    const data = response.data

    resolve({ data })
  })
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await axios.get("http://localhost:8080/brands")
    const data = response.data

    resolve({ data })
  })
}
