export default defineEventHandler(async (event) => {
  const idProduct = getRouterParam(event, 'slug')
  if (!idProduct || isNaN(idProduct)) {
    throw createError({ statusCode: 400, message: "Invalid product ID" });
  }
  return await $fetch(`https://dummyjson.com/products/${idProduct}`)
})