<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div
      class="flex flex-col max-w-[600px] w-full gap-7 py-8 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff]">
      <h1 class="text-[30px] font-bold text-center">Account Activated</h1>
      <div class="flex justify-center">
        <Icon name="bx:bxl-gmail" style="color: gray" class="text-[50px]" />
      </div>
      <h4 class="text-center font-medium">Hi {{ nameUser }}</h4>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <div class="w-full flex justify-center font-medium text-[13px] ">Thank you, your email has been verified. Your
        account is now active</div>
      <div class="w-full flex justify-center font-medium text-[13px] ">Please use the link below to login to your
        account</div>
      <div class="w-full flex justify-center">
        <NuxtLink to="/auth/signin"
          class="flex justify-center font-medium text-[13px] border-gray-400 border px-4 py-2 rounded-[5px] cursor-pointer hover:border-amber-800">
          Login to your account
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const config = useRuntimeConfig();
const route = useRoute()
const token = route.query.token
const nameUser = ref()

onMounted(async () => {
  if (token) {
    try {
     const data = await $fetch(`${config.public.URL_API}/api/active-account`, {
        method: 'POST',
        body: { token }
      })
      nameUser.value = data.data.user.fullName
    } catch (error) {
      console.error(error)
      errorMessage.value = error?.data?.message || 'Activation failed'
    }
  }
})
</script>