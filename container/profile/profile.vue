<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div class="flex h-full border w-1/2 rounded-[20px] border-[#00000066] justify-around">
      <div class="w-1/2 flex flex-col items-center gap-2">
        <NuxtImg :src="profile.image" class="w-[250px] h-[200px] object-contain"/>
        <Button title="Upload avatar" class="bg-cyan-900"/>
      </div>
      <div class="flex flex-col flex-1 w-full gap-10 py-8 px-6  border-[#00000066]  border-l-2">
        <h1 class="text-[30px] font-bold text-center">Profile</h1>
        <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
        <form class="flex flex-col gap-3" @submit="submitForm">
          <Input v-model="username" type="text" placeholder="Username" :error="errors.username"
            :inputAttrs="usernameAttrs" />
          <Input v-model="email" type="text" placeholder="Email" :error="errors.email" :inputAttrs="emailAttrs" />
          <Input v-model="birthDate" type="datetime" placeholder="Birth Date" :error="errors.birthDate"
            :inputAttrs="birthDateAttrs" />
          <Input v-model="address" type="text" placeholder="Address" :error="errors.address"
            :inputAttrs="addressAttrs" />
          <Input v-model="country" type="text" placeholder="Address" :error="errors.country"
            :inputAttrs="countryAttrs" />
          <Input v-model="gender" type="text" placeholder="Gender" :error="errors.gender" :inputAttrs="genderAttrs" />
          <Button type="submit" class="w-full text-[18px] mt-[20px]" title="Update Profile" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Input from '~/component/input/input.vue';
const { profile } = useProfile()

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required(),
    country: yup.string().required(),

  }),
  initialValues: {
    username: profile.value.username,
    email: profile.value.email,
    birthDate: profile.value.birthDate,
    gender: profile.value.gender,
    address: profile.value.address.address,
    country: profile.value.address.country
  }
});

const [username, usernameAttrs] = defineField('username');
const [address, addressAttrs] = defineField('address');
const [birthDate, birthDateAttrs] = defineField('birthDate');
const [email, emailAttrs] = defineField('email');
const [gender, genderAttrs] = defineField('gender');
const [country, countryAttrs] = defineField('country');

const toast = useToast()

const submitForm = handleSubmit(async (values) => {
  console.log(values)
  toast.show({
    position: 'topRight',
    backgroundColor: "#e7e7e7",
    color: 'black',
    title: 'Success!',
    message: 'Update profile Success!'
  })
  // const response = await $fetch('/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: { username: values.username, password: values.password ,  expiresInMins: 60,}
  // });

  // if (response) {
  //   toast.show({
  //     position: 'topRight',
  //     backgroundColor: "#e7e7e7",
  //     color: 'black',
  //     title: 'Success!',
  //     message: 'Login Success!'
  //   })
  //   Cookies.set('userToken', response.accessToken, { expires: 30 })
  //   Cookies.set('refreshToken', response.refreshToken, { expires: 7 })

  //   const cookie = Cookies.get('userToken')
  //   console.log(cookie)

  //   if (cookie) {
  //     setTimeout(() => {
  //       return navigateTo('/')
  //     }, 1500)
  //   }
  // }
});
</script>