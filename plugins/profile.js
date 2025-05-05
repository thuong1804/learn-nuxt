import { useCookie } from "nuxt/app"
import { useProfile } from "~/composables/useProfile"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', async () => {
    const {profile, fetchProfile } = useProfile()
    await fetchProfile()
  })
})