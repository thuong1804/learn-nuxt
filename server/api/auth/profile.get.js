export default defineEventHandler(async (event) => {
  let cookie = getCookie(event, 'userToken')
  if (cookie) {
    try {
      const data = await $fetch(`${process.env.API_URL}/auth/me`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${cookie}` },
        credentials: 'include'
      })
      return data
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }
})
