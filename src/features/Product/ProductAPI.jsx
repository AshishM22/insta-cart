import axios from "axios"

// A mock function to mimic making an async request for data

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const { data } = await axios.get("http://localhost:8080/products")
    resolve({ data })
  })
}

export function fetchProductsByFilter(filter) {
  // Filter object will look like filter = {"category" : "smartphone"}
  let queryString = ""
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    const { data } = await axios.get(
      "http://localhost:8080/products?" + queryString,
    )
    console.log(queryString)

    resolve({ data })
  })
}
