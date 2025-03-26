export async function useProfile () {
  return useAsyncData('profile', async () => {
    const cookie = useCookie('userToken')

    if (!cookie.value) {
      console.error('No token found')
      return null
    }

    return await $fetch('/api/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cookie.value}`,
      },
      credentials: 'include'
    })
  })
}
