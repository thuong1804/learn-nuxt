<template>
  <div class="w-full flex items-center justify-center h-full mt-[50px]">
    <div class="flex flex-col max-w-[400px] w-full gap-10 border py-8 px-6 rounded-[20px] border-[#00000066]">
      <h1 class="text-[30px] font-bold text-center">Login</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <form class="flex flex-col gap-7" @submit="submitForm">
        <Input v-model="email" type="email" placeholder="Email" :error="errors.email" :inputAttrs="emailAttrs" />
        <Input v-model="password" type="password" placeholder="Password" :error="errors.password"
          :inputAttrs="passwordAttrs" />
        <Button type="submit" class="w-full rounded-[60px] text-[18px]"  title="Login" />
      </form>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Input from '~/component/input/input.vue';
import Cookies from 'js-cookie';

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
  initialValues: {
    email: 'test@example.com',
    password: '123456'
  }
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const toast = useToast()

const submitForm = handleSubmit(async (values) => {

  const response = await $fetch('/api/login', {
    method: 'post',
    body: { email: values.email, password: values.password }
  });

  if (response.success) {
    toast.show({
      position: 'topRight',
      backgroundColor: "#e7e7e7",
      color: 'black',
      title: 'Success!',
      message: 'Login Success!'
    })
    Cookies.set('userToken', response.token, { expires: 7 })

    const cookie = Cookies.get('userToken')

    if (cookie) {
      setTimeout(() => {
        return navigateTo('/')
      }, 1500)
    }
  }
});
</script>