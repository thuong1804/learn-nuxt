import { useRequestHeaders, useRuntimeConfig } from "nuxt/app"

export function useProfile() {
  const profile = useState('profile', () => null)
  const runtimeConfig = useRuntimeConfig()

  const fetchProfile = async() => {
    const headers = useRequestHeaders(['cookie'])
    const data = await $fetch(`${runtimeConfig.public.URL_API}/api/profile`, {
      method: 'GET',
      credentials: 'include',
      headers
    })
    profile.value = data
  }

  return { profile , fetchProfile}
}
