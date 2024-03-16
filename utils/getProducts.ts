export const getProductsData = async () => {
  // const response = await fetch("http://localhost:3333/products")
  const requisition = await fetch("/api/products/getAllProducts", {
    method: "GET"
  })
  const data = await requisition.json()
  return data
}