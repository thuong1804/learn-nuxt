import { useProfile } from "~/composables/useProfile"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', async () => {
    const route = nuxtApp._route
    const {fetchProfile } = useProfile()
    const skipRoutes = ['/auth/signin', '/auth/signup', '/auth/logout']
    if (!skipRoutes.includes(route.path)) {
      await fetchProfile()
    }
  })
})