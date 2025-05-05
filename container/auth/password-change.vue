<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div v-if="isCheckFlag"
      class="flex flex-col max-w-[500px] w-full gap-7 py-14 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff] relative items-center">
      <Icon name="material-symbols:check-circle-outline-rounded" class="text-[60px] text-green-500" />
      <h1 class="text-[30px] font-bold text-center">Password Changed!</h1>
      <div>Your password has been changed successfully</div>
      <Button color="neutral" class="cursor-pointer" @click="handleBackLogin">Back to login</Button>
    </div>
  </div>
</template>

<script setup>
import Button from '@nuxt/ui/runtime/components/Button.vue';
import { navigateTo } from 'nuxt/app';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const isCheckFlag = ref(false)
const router = useRouter()

const handleBackLogin = () => {
  localStorage.removeItem('emailInfo');
  navigateTo('/auth/signin')
}

onMounted(() => {
  const flag = localStorage.getItem('isCheckNavigateResetPassword')
  if (!flag) {
    return router.replace('/auth/signin')
  } else {
    isCheckFlag.value = true
    localStorage.removeItem('isCheckNavigateResetPassword')
  }
})
</script>