<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div class="flex h-full border w-1/2 rounded-[20px] border-[#00000066] justify-around">
      <div class="w-1/2 flex flex-col items-center gap-2">
        <NuxtImg v-if="profile?.image" :src="profile.image" class="w-[250px] h-[200px] object-contain" />
        <UTooltip text="Feature in Development">
          <Button title="Upload avatar" class="bg-cyan-900" disabled />
        </UTooltip>
      </div>
      <div class="flex flex-col flex-1 w-full gap-10 py-8 px-6  border-[#00000066]  border-l-2">
        <h1 class="text-[30px] font-bold text-center">Profile</h1>
        <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormField label="First name" size='xl' name="firstName">
            <UInput class="w-full" v-model="state.firstName" />
          </UFormField>

          <UFormField label="Email" n size='xl' ame="email">
            <UInput class="w-full" v-model="state.email" />
          </UFormField>

          <UFormField label="Birthday" size='xl'name="birthDate">
            <UInput class="w-full" v-model="state.birthDate" type="date"/>
          </UFormField>

          <UFormField label="Address" size='xl' name="address">
            <UInput class="w-full" v-model="state.address" />
          </UFormField>

          <UFormField label="Country" size='xl' name="country">
            <UInput class="w-full" v-model="state.country" />
          </UFormField>

          <UFormField label="Gender" size='xl' name="gender">
            <UInput class="w-full" v-model="state.gender" />
          </UFormField>

          <UTooltip text="Feature in Development">
            <Button type="submit" class="w-full text-[18px] mt-[20px]" title="Update Profile"/>
          </UTooltip>
        </UForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';
import { object, string } from 'yup';

import { useProfile } from '../../composables/useProfile';
const toast = useToast()
const { profile } = useProfile()

const schema = object({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().email('Invalid email').required('Email is required'),
  birthDate: string().required('Birth date is required'),
  gender: string().required('Gender is required'),
  address: string().required('Address is required'),
  country: string().required('Country is required')
});

const state = reactive({
  firstName: '',
  lastName: '',
  email: '',
  birthDate: '',
  gender: '',
  address: '',
  country: ''
})

watch(profile, (newProfile) => {
  if (newProfile) {
    state.firstName = newProfile.user?.firstName ?? ''
    state.lastName = newProfile.user?.lastName ?? ''
    state.email = newProfile.user?.email ?? ''
    state.birthDate = newProfile.user?.birthDate ?? ''
    state.gender = newProfile.user?.gender ?? ''
    state.address = newProfile.address?.address ?? ''
    state.country = newProfile.address?.country ?? ''
  }
}, { immediate: true })

async function onSubmit(event) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>