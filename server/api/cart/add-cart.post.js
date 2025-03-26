export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, products } = body

  return await $fetch(`${process.env.API_URL}/carts/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: userId,
      products: products
    })
  })
})