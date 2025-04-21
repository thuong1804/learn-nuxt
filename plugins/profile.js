import { useProfile } from "~/composables/useProfile"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', async () => {
    const {fetchProfile } = useProfile()
    await fetchProfile()
  })
})