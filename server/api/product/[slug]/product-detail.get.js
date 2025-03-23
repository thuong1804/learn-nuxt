export default defineEventHandler(async (event) => {
  const idProduct = getRouterParam(event, 'slug')
  return await $fetch(`https://dummyjson.com/products/${idProduct}`)
})