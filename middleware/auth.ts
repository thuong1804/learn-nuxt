import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app"
import { useProfile } from "../composables/useProfile"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { profile } = useProfile()

  if (!profile.value) {
    return navigateTo('/auth/signin')
  }
})