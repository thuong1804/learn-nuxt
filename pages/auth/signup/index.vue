<template>
  <div class="w-full flex items-center justify-center h-full pb-[150px]">
    <div class="flex flex-col max-w-[400px] w-full gap-5">
      <h1 class="text-[30px] font-bold text-center">Signin to SHOP.CO</h1>
      <form class="flex flex-col gap-5" @submit="submitForm">
          <Input v-model="email" type="email" placeholder="Email" :error="errors.email" :inputAttrs="emailAttrs" />
          <Input v-model="name" type="text" placeholder="Name" :error="errors.name" :inputAttrs="nameAttrs" />
          <Input v-model="phone" type="number" placeholder="Phone" :error="errors.phone" :inputAttrs="phoneAttrs" />
          <Input v-model="password" type="email" placeholder="Password" :error="errors.password" :inputAttrs="passwordAttrs" />
          <Input v-model="confirmPassword" type="email" placeholder="Confirm Password" :error="errors.confirmPassword" :inputAttrs="confirmPassworddAttrs" />
          <Button type="submit" class="w-full rounded-[60px] text-[18px] py-3">Register</Button>
          <div class="flex justify-center gap-1 font-bold">Have an account?<NuxtLink to="/auth/signin" class="text-gray-500 cursor-pointer">Sign in</NuxtLink></div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';
import { useForm } from 'vee-validate';
import Input from '~/component/input/input.vue';
import * as yup from 'yup';
definePageMeta({ middleware: 'auth' })

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
});

const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [phone, phoneAttrs] = defineField('phone');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPassworddAttrs] = defineField('confirmPassword');

const submitForm = handleSubmit((values => {
  console.log(values)
}))

</script>