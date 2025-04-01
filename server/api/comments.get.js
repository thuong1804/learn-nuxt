export default defineEventHandler(async (event) => {
  const response = await $fetch(`${process.env.API_URL}/comments?limit=10&skip=10&select=body,postId`)
  return response.comments
})