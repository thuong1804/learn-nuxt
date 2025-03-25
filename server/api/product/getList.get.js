import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await $fetch(`${process.env.API_URL}/products`, {
    query
  })
})