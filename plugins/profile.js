export default defineNuxtPlugin(async () => {
  const { fetchProfile } = useProfile()
  await fetchProfile()
})