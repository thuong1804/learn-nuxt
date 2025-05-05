<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div class="flex flex-col max-w-[500px] w-full gap-7 py-14 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff] relative">
      <NuxtLink class="absolute top-10" to="/auth/signin">
        <Icon name="material-symbols:arrow-back-rounded" style="color: gray" class="text-[25px] cursor-pointer hover:text-gray-700" />
      </NuxtLink>
      <h1 class="text-[30px] font-bold text-center">Set Password</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <UForm :schema="schema" :state="state" class="flex flex-col gap-7 w-full" @submit="onSubmit">
        <UFormField label="New password" name="password" size="xl" required>
          <UInput placeholder="New password..." v-model="state.password" type="password" class="w-full" />
        </UFormField>
        <UFormField label="Confirm new password" name="confirmPassword" size="xl" required>
          <UInput placeholder="Confirm new password..." v-model="state.confirmPassword" type="password" class="w-full" />
        </UFormField>
        <Button type="submit" class="w-full rounded-[10px] text-[18px]" title="Update password" />
      </UForm>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';
import { object, string, ref } from 'yup';

const config = useRuntimeConfig();
const toast = useToast()

const schema = object({
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Password required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Confirm password required')
})

const state = reactive({
  password: undefined,
  confirmPassword: undefined,
})

async function onSubmit(event) {
  const { password, confirmPassword } = event.data
  const emailJson  = localStorage.getItem('emailInfo')
  const parsed = JSON.parse(emailJson);
  const email = parsed.email

  try {
    const response = await $fetch(`${config.public.URL_API}/api/reset-password`, {
      method: 'PUT',
      body: {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
    });

    if (response.result) {
      localStorage.setItem('isCheckNavigateResetPassword', true)
      navigateTo('/auth/password-changed')
    }

  } catch (error) {
    console.log({error})
    if (error.data) {
      toast.add({ title: 'Reset failed', description: 'Server error, please log in again!', color: 'error' })
    }
  }
}
</script>