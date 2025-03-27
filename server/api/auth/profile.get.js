export default defineEventHandler(async (event) => {
  let cookie = getCookie(event, 'userToken')
  console.log(cookie)
  if (!cookie) {
    return { statusCode: 401, message: 'Missing token' }
  }

  try {
    return await $fetch(`${process.env.API_URL}/user/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cookie}`,
      },
      credentials: 'include'
    })
  } catch (error) {
    console.error('Fetch error:', error)
    return { statusCode: 401, message: 'Unauthorized' }
  }
})
