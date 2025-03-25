export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, 'slug')
  
  if (!userId || isNaN(userId)) {
    throw createError({ statusCode: 400, message: "Invalid user ID" });
  }
  return await $fetch(`${process.env.API_URL}/carts/user/${userId}`)
})