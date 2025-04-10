<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div class="flex flex-col max-w-[500px] w-full gap-7 py-8 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff]">
      <h1 class="text-[30px] font-bold text-center">Signup</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <UForm :schema="schema" :state="state" class="flex flex-col gap-5 w-full" @submit="onSubmit" @error="onError">
        <UFormField label="First name" required size="xl" name="firstName">
          <UInput placeholder="First name" class="w-full" v-model="state.firstName" type="email" />
        </UFormField>
        <UFormField label="Last name" required size="xl" name="lastName">
          <UInput placeholder="Last name" class="w-full" v-model="state.lastName"/>
        </UFormField>
        <UFormField label="Email" required size="xl" name="email">
          <UInput placeholder="Email..." class="w-full" v-model="state.email"/>
        </UFormField>
        <UFormField label="Password" name="password" size="xl" required>
          <UInput placeholder="Password..." v-model="state.password" type="password" class="w-full" />
        </UFormField>
        <UFormField label="Confirm password" name="confirmPassword" size="xl" required>
          <UInput placeholder="Password..." v-model="state.confirmPassword" type="password" class="w-full" />
        </UFormField>
        <Button type="submit" class="w-full rounded-[10px] text-[18px]" title="Signup" />
      </UForm>
      <div class="w-full flex justify-center gap-1 font-medium">Already have an account?
        <NuxtLink to="/auth/signin" class="text-blue-600 cursor-pointer hover:text-blue-800">Signin
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup>
import Button from '~/component/button/button.vue';
import { object, string, ref } from 'yup';

const toast = useToast()

const schema = object({
  email: string().email('Invalid email').required('Email required'),
  firstName: string().required('Fist name required'),
  lastName: string().required('Last name required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Password required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .min(8, 'Must be at least 8 characters')
    .required('Confirm password required')
})

const state = reactive({
  email: undefined,
  password: undefined,
  confirmPassword: undefined
})

async function onSubmit(event) {
  const { email, password } = event.data

  // try {
  //   const response = await $fetch('http://localhost:3005/api/login', {
  //     method: 'POST',
  //     body: { email: email, password: password },
  //     credentials: 'include'
  //   });
  //   if (response.result) {
  //     toast.add({ title: 'Success', description: 'Login success.', color: 'success' })
  //     navigateTo('/')
  //   }
  // } catch (error) {
  //   if (error) {
  //     toast.add({ title: 'Login failed', description: 'Incorrect account or password, please log in again!', color: 'error' })
  //   }
  // }
}
</script>