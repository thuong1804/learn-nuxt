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
      if (error.response && error.response.status === 401) {
        try {
          const refreshData = await $fetch(`${process.env.API_URL}/auth/refresh`, {
            method: 'POST',
            credentials: 'include'
          })

          if (refreshData.token) {
            setCookie(event, 'userToken', refreshData.token, { httpOnly: true })

            const newData = await $fetch(`${process.env.API_URL}/auth/me`, {
              method: 'GET',
              headers: { 'Authorization': `Bearer ${refreshData.token}` },
              credentials: 'include'
            })
            return newData
          }
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError)
        }
      }
      deleteCookie(event, 'userToken')
      return sendRedirect(event, '/signin')
    }
  }
})
