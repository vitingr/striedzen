export const getProductsData = async () => {
  const response = await fetch("http://localhost:3333/products")
  const data = await response.json()
  return data
}