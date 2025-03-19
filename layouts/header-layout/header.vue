<script setup>
import { Icon } from '#components';
import { NuxtLink } from '#components';
import Navbar from './navbar.vue';
import SearchBar from '~/component/searchbar.vue';
import { useCookie } from '#app'

const router = useRoute()
const homePage = computed(() => router.path === '/');

const userToken = useCookie('userToken')
const userIcon = computed(() => {
  return userToken.value
    ? 'ic:baseline-log-out'
    :'ph:user-bold'
})

const handelLogout = () => {
  userToken.value = null
  navigateTo('/auth/signin')
}
</script>

<template>
  <div class="bg-white md:py-9 z-40">
    <div class="flex flex-row justify-between items-center md:gap-10 max-w-96 md:max-w-[78rem] my-0 mx-auto">
      <NuxtLink to="/" class="text-[32px] font-bold">SHOP.CO</NuxtLink>
      <Navbar />
      <SearchBar />
      <div class="flex gap-[14px]">
        <NuxtLink to="/cart">
          <Icon name="ph:shopping-cart" style="color: black" class="text-[20px]" />
        </NuxtLink>
        <button class="cursor-pointer" @click="handelLogout">
          <Icon :name="userIcon" style="color: black" class="text-[20px]" />
        </button>
      </div>
    </div>
    <div class="max-w-96 md:max-w-[78rem] my-0 mx-auto pt-6" v-if="!homePage">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
  </div>
</template>