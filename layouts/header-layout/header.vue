<template>
  <div class="bg-white md:py-9 z-40">
    <div class="flex flex-row justify-between items-center md:gap-10 max-w-96 md:max-w-[78rem] my-0 mx-auto">
      <NuxtLink to="/" class="text-[32px] font-bold">GO MART</NuxtLink>
      <Navbar />
      <Searchbar @handle-submit="submitSearch"/>
      <div class="flex gap-[14px]">
        <NuxtLink to="/cart" class="relative">
          <span v-if="cartStore.totalCart() > 0" class="font-bold z-50 absolute bg-red-500 text-white px-2 rounded-[50%] -top-3.5 -right-3">
            {{ cartStore.totalCart() }}
          </span>
          <Icon name="ph:shopping-cart" style="color: black" class="text-[25px]" />
        </NuxtLink>
        <NuxtLink v-if="userToken" to="/profile">
          <Icon name="ph:user-bold" style="color: black" class="text-[25px]" />
        </NuxtLink>
        <button class="cursor-pointer" @click="handelLogout">
          <Icon :name="userIcon" style="color: black" class="text-[25px]" />
        </button>
      </div>
    </div>
    <div class="max-w-96 md:max-w-[78rem] my-0 mx-auto pt-6" v-if="!homePage">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from '#components';
import { NuxtLink } from '#components';
import Navbar from './navbar.vue';
import { useCookie } from '#app'
import Searchbar from '~/component/search-bar/searchbar.vue';

const route = useRoute()
const router = useRouter()
const homePage = computed(() => route.path === '/');

const userToken = useCookie('userToken')
const userIcon = computed(() => {
  return userToken.value
    ? 'ic:baseline-log-out'
    :'tabler:login'
})

const cart = ref([])
const countItem = ref(0)
const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()
})

const submitSearch = (value) => {
  if (value) {
    router.push({
      path: '/shop',
      query: { search: value }
    });
  } else {
    router.push('/shop')
  }
}

watch(cart, (newCart) => {
  countItem.value = newCart.length
}, { deep: true })

const handelLogout = () => {
  userToken.value = null
  const assetsToken = useCookie('userToken')
  const refreshToken = useCookie('refreshToken')

  assetsToken.value = null
  refreshToken.value = null
  localStorage.removeItem('cart')
  cartStore.loadCart()
  navigateTo('/auth/signin')
}
</script>