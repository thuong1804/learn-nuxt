<template>
  <form @submit="handelSubmit"
    class="relative flex-1 flex items-center bg-[#F0F0F0] h-[48px] rounded-[62px] py-3 px-3 gap-3">
    <button type="submit" class="cursor-pointer px-2 py-2 flex items-center">
      <Icon name="ph:magnifying-glass-light" style="color: black" class="text-[20px]" />
    </button>
    <input v-model="inputRef" placeholder="Search for products..."
      class="text-[#00000066] flex-1 border-0 border-none focus:ring-0 focus:outline-none" />
    <button @click="handleClearInput" v-if="inputRef" type="button" class="cursor-pointer px-2 py-2 flex items-center">
      <Icon name="ic:outline-clear" style="color: black" class="text-[20px]" />
    </button>
    <div v-show="inputShowModalFilter" v-if="filterInput.length > 0 && inputShowModalFilter" class="menu-container z-50 max-h-[500px] overflow-x-hidden overflow-y-scroll absolute w-[95%]  shadow-sm border-gray-300  mt-0 top-full border rounded-[2px]  bg-white transition-all">
      <div class="flex flex-col text-black">
        <NuxtLink :to="item"  v-for="item in filterInput" :key="item" class=" transition-all hover:bg-gray-200 px-5 py-2 hover:scale-105">
          {{ item }}
        </NuxtLink>
      </div>
    </div>
  </form>
</template>

<script setup>
const data = ref([])
const inputRef = ref('')
const inputShowModalFilter = ref('')

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})

const closeMenu = (event) => {
  if (!event.target.closest('.menu-container')) {
    inputShowModalFilter.value = ''
  }
}

const handelSubmit = (e) => {
  e.preventDefault();
  emit('handleSubmit', inputRef.value)
}

const handleClearInput = () => {
  inputRef.value = ''
}

onMounted(async () => {
  try {
    const response = await $fetch('/api/category-list')
    data.value = response
  } catch (error) {
    console.error("Fetch error:", error)
  }
})

const filterInput = computed(() => {
  return data.value.filter(item => item.toLowerCase().includes(inputRef.value.toLowerCase()))
})

watch(inputRef, (newInput) => {
  if (newInput) {
    inputShowModalFilter.value = newInput
  }
})
const emit = defineEmits(['handleSubmit'])
</script>