export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('userToken')

   if (!token.value) {
    return navigateTo('/auth/signin')
  }
})