<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div class="flex flex-col max-w-[500px] w-full gap-7 py-14 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff] relative"
      v-if="!isSendCode">
      <NuxtLink class="absolute top-10" to="/auth/signin">
        <Icon name="material-symbols:arrow-back-rounded" style="color: gray"
          class="text-[25px] cursor-pointer hover:text-gray-700" />
      </NuxtLink>
      <h1 class="text-[30px] font-bold text-center">Reset Password</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <UForm :schema="schema" :state="state" class="flex flex-col gap-7 w-full" @submit="onSubmitSendEmail">
        <UFormField label="Email" required size="xl" name="email" :error="serverErrors.email">
          <UInput placeholder="Email..." class="w-full" v-model="state.email" />
        </UFormField>
        <Button type="submit" class="w-full rounded-[10px] text-[18px]" title="Next" :disabled="!state.email"/>
      </UForm>
    </div>
    <div v-else class="flex flex-col max-w-[500px] w-full gap-5  py-14 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff] relative">
      <NuxtLink class="absolute top-10" to="/auth/signin">
        <Icon name="material-symbols:arrow-back-rounded" style="color: gray"
          class="text-[25px] cursor-pointer hover:text-gray-700" />
      </NuxtLink>
      <h1 class="text-[30px] font-bold text-center">Input OTP</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <div class="flex justify-center items-center gap-2" v-if="serverErrors.otp">
        <Icon name="material-symbols-light:chat-error-outline-rounded" class="text-[25px] text-gray-600" />
        <h4 class="text-red-600">{{ serverErrors.otp }}</h4>
      </div>
      <div class="flex justify-center flex-wrap">The verification code will be sent via email to: </div>
      <div class="flex justify-center">{{ state.email }}</div>
      <UForm :schema="schema" :state="state" class="flex flex-col gap-7 w-full items-center" @submit="onSubmitOTP">
        <UFormField name="inputOtp" size="xl" required>
          <UPinInput v-model="state.inputOtp" length="6" type="number"/>
        </UFormField>
        <div>Haven't received it yet?</div>
        <ButtonSendEmail :actionSendEmail={emailApi} :localKey="'emailInfo'"/>
        <Button type="submit" class="w-full rounded-[10px] text-[18px]" title="Next" :disabled="state.inputOtp?.length < 6"/>
      </UForm>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';
import { object, string } from 'yup';
import { computed, ref, watch } from 'vue';
import ButtonSendEmail from '../../component/button/button-send-email.vue';
import { navigateTo } from 'nuxt/app';
const config = useRuntimeConfig();

const emailApi = `${config.public.URL_API}/api/check-exit-user`
console.log(emailApi)
const toast = useToast()
const isSendCode = ref(false)

const schema = object({
  email: string().email('Invalid email').required('Required'),
})


const state = reactive({
  email: undefined,
  inputOtp: undefined,
})

const serverErrors = reactive({
  email: '',
  otp: ''
})

async function onSubmitSendEmail(event) {
  const { email } = event.data
  serverErrors.email = ''

  try {
    const response = await $fetch('http://localhost:3005/api/check-exit-user', {
      method: 'POST',
      body: { email: email },
      credentials: 'include'
    });

    if (response.result) {
      localStorage.setItem( 'emailInfo', JSON.stringify({email: state.email}));
      isSendCode.value = true
    }

  } catch (error) {
    console.log({ error })
    if (error.data?.statusCode === 400) {
      serverErrors.email = "Email don't exist"
    } else {
      toast.add({ title: 'Reset failed', description: 'Server error, please log in again!', color: 'error' })
    }
  }
}

async function onSubmitOTP(event) {
  const {inputOtp} = event.data
  try {
    const response = await $fetch('http://localhost:3005/api/check-auth-otp', {
      method: 'POST',
      body: { email: state.email, otp: inputOtp.join('') },
      credentials: 'include'
    });
    if (response.result) {
      navigateTo('/auth/reset-password')
    }
    return response
  } catch (error) {
    serverErrors.otp = error.data.message
    if (error?.data?.message === 'OTP expired or invalid') {
      toast.add({ title: 'Error', description: 'OTP code has expired, please resend.', color: 'error' });
    } else if (error?.data?.message === 'Invalid OTP') {
      toast.add({ title: 'Error', description: 'OTP code is incorrect, please check.', color: 'error' });
    } else {
      toast.add({ title: 'Error', description: 'An error occurred, try again later.', color: 'error' });
    }
  }
}

</script>