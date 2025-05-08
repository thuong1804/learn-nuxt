export default defineEventHandler(async (event) => {
  return await $fetch(`${process.env.URL_API}/api/categories`)
})