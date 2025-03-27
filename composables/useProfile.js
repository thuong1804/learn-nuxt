export function useProfile() {
  const profile = useState('profile', () => null)
  const cookie = useCookie('userToken')

  const fetchProfile = async () => {
    if (profile.value) return

    if (cookie.value) {
      try {
        const data = await $fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${cookie.value}` },
          credentials: 'include',
        })
        console.log(data)
        profile.value = data
      } catch (error) {
        console.error('Error fetching profile:', error)
        profile.value = null
      }
    }
  }
  return { profile, fetchProfile }
}
