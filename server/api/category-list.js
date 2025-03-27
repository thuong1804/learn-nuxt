export default defineEventHandler(async (event) => {
  return await $fetch('https://dummyjson.com/products/category-list')
})