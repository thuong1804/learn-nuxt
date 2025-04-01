export function useProfile() {
  const profile = useState('profile', () => null)
  const cookie = useCookie('userToken')

  const fetchProfile = async() => {
    const data = await $fetch('/api/auth/profile', {
      method: 'GET',
      headers: {'Authorization' : `Bearer ${cookie.value}` },
      credentials: 'include'
    })
    profile.value = data
  }

  return { profile , fetchProfile}
}
