export default defineEventHandler(async (event) => {
  const response = await $fetch('https://dummyjson.com/comments?limit=10&skip=10&select=body,postId')
  return response.comments
})