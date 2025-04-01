export default defineNuxtPlugin(async () => {
  const cookie = useCookie('userToken')

  const { fetchProfile } = useProfile()

  if (cookie.value) {
    await fetchProfile()
  }
})