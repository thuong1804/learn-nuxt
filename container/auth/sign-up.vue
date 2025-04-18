<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div class="flex flex-col max-w-[500px] w-full gap-7 py-8 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff]">
      <h1 class="text-[30px] font-bold text-center">Signup</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <UForm :schema="schema" :state="state" class="flex flex-col gap-5 w-full" @submit="onSubmit">
        <UFormField label="First name" required size="xl" name="firstName" >
          <UInput placeholder="First name" class="w-full" v-model="state.firstName"/>
        </UFormField>
        <UFormField label="Last name" required size="xl" name="lastName">
          <UInput placeholder="Last name" class="w-full" v-model="state.lastName"/>
        </UFormField>
        <UFormField label="Email" required size="xl" name="email" :error="serverErrors.email">
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
import { emailTemplateVerify } from '~/utils';
import { useEmail } from '~/composables/useEmail';

const toast = useToast()
const { sendEmail, success } = useEmail();
const config = useRuntimeConfig();

const schema = object({
  email: string().email('Invalid email').required('Email required'),
  firstName: string().required('Fist name required'),
  lastName: string().required('Last name required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Password required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Confirm password required')
})

const state = reactive({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined
})

const serverErrors = reactive({
  email: ''
})

const emailHtml = emailTemplateVerify
.replace("{{name}}", 'User')
  .replace("{{verify_link}}", `${config.public.URL_PRODUCT}/auth/signin`)
  .replace("{{store_name}}", 'Your E-Commerce Store')
	
async function onSubmit(event) {
  const {firstName, lastName, email, password } = event.data
 	serverErrors.email = ''

  try {
    const response = await $fetch('http://localhost:3005/api/create-user', {
      method: 'POST',
      body: { firstName, lastName, email, password },
      credentials: 'include'
    });
		console.log(response)

		if (response.data.result) {
			toast.add({ title: 'Success', description: 'Register success.', color: 'success' });
			navigateTo('/auth/active-email');

			await sendEmail({
				to: state.email,
				name: "User",
				subject: "New Account Activation",
				message: 'Hello',
				html: emailHtml
			});

			if (success.value) {
				toast.add({
					title: 'Send Email',
					description: 'Send Email Success!',
					color: 'primary',
				})
			}
    }
  } catch (error) {
    console.log({ error });

    if (error.data.statusCode === 409) {
			serverErrors.email = 'Email already exists'
			console.log(emailExist)
    } else {
      toast.add({ title: 'Register failed', description: 'Server Error!', color: 'error' });
    }
  }
}

watch(() => state.email, () => {
  serverErrors.email = ''
})
</script>