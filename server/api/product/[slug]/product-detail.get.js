export default defineEventHandler(async (event) => {
  const idProduct = getRouterParam(event, 'slug')
  if (!idProduct) {
    throw createError({ statusCode: 400, message: "Invalid product ID" });
  }
  return await $fetch(`${process.env.URL_API}/api/product/${idProduct}`)
})