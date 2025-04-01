export default defineEventHandler(async (event) => {
  return await $fetch(`${process.env.API_URL}/products/category-list`)
})