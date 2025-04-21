import { useRequestHeaders } from "nuxt/app"

export function useProfile() {
  const profile = useState('profile', () => null)

  const fetchProfile = async() => {
    const headers = useRequestHeaders(['cookie'])
    const data = await $fetch('/api/auth/profile', {
      method: 'GET',
      credentials: 'include',
      headers
    })
    profile.value = data
  }

  return { profile , fetchProfile}
}
