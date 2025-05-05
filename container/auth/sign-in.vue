<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div
      class="flex flex-col max-w-[500px] w-full gap-7 py-8 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff]">
      <h1 class="text-[30px] font-bold text-center">Signin</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <UForm :schema="schema" :state="state" class="flex flex-col gap-7 w-full" @submit="onSubmit" @error="onError">
        <UFormField label="Email" required size="xl">
          <UInput placeholder="Email..." class="w-full" v-model="state.email" type="email" />
        </UFormField>
        <UFormField label="Password" name="password" size="xl" required>
          <UInput placeholder="Password..." v-model="state.password" type="password" class="w-full" />
        </UFormField>
        <NuxtLink to="/auth/forget-password" class="w-full flex justify-center text-blue-600 font-medium">Forget
          password?</NuxtLink>
        <Button type="submit" class="w-full rounded-[10px] text-[18px]" title="Login" />
      </UForm>
      <div class="w-full flex justify-center gap-1 font-medium ">Don't have an account?
        <NuxtLink to="/auth/signup" class="text-blue-600 cursor-pointer hover:text-blue-800">Signup
        </NuxtLink>
      </div>
      <div class="pb-4 relative">
        <Divider />
        <span
          class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4f9ff] px-2 text-xl text-gray-500">OR</span>
      </div>
      <button @click="handleLoginGoogle"
        class="w-full border-2 border-gray-300 rounded-[10px] py-4 px-2
      flex items-center gap-2 justify-center text-gray-600 hover:border-blue-400 cursor-pointer transition-all font-medium text-[18px]">
        <Icon name="devicon:google" style="color: #ef1919" class="text-[25px]" /> Login with Google
      </button>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';
import { object, string } from 'yup';
import Divider from '~/component/divider/divider.vue';
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();

const toast = useToast()

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

const state = reactive({
  email: 'anhHung@example.com',
  password: '123456'
})

async function onError(event) {
  console.log(event)
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

async function onSubmit(event) {
  const { email, password } = event.data

  try {
    const response = await $fetch(`${config.public.URL_API}/api/login`, {
      method: 'POST',
      body: { email: email, password: password },
      credentials: 'include'
    });

    if (response.result) {
      toast.add({ title: 'Success', description: 'Login success.', color: 'success' })
      navigateTo('/')
    }

  } catch (error) {
    console.log({ error })
    if (error.data?.statusCode) {
      toast.add({ title: 'Login failed', description: 'Incorrect account or password, please log in again!', color: 'error' })
    } else {
      toast.add({ title: 'Login failed', description: 'Server error, please log in again!', color: 'error' })
    }
  }
}

const handleLoginGoogle = () => {
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth` +
    `?response_type=code` +
    `&client_id=${config.public.GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${config.public.URL_API}/api/auth/google/callback` +
    `&scope=openid%20profile%20email` +
    `&state=some_random_state` +
    `&prompt=select_account`;
  window.location.href = googleAuthUrl;
}
</script>