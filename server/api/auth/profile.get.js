import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'userLogin')
  const headers = getRequestHeaders(event)

  if (token) {
    return await $fetch(`${process.env.URL_API}/api/profile`, {
      method: 'GET',
      credentials: 'include',
      headers
    })
  }
})
