<template>
  <form @submit="handelSubmit" class="flex-1 flex items-center bg-[#F0F0F0] h-[48px] rounded-[62px] py-3 px-3 gap-3">
    <button type="submit" class="cursor-pointer px-2 py-2">
      <Icon name="ph:magnifying-glass-light" style="color: black"  class="w-[25px]"/>
    </button>
    <input v-model="inputRef" placeholder="Search for products..." class="text-[#00000066] flex-1 border-0 border-none focus:ring-0 focus:outline-none"/>
  </form>
</template>

<script setup>

const inputRef = ref('')
const router = useRouter()

const handelSubmit = (e) => {
  e.preventDefault();
  emit('handleSubmit', inputRef.value)
}
const emit = defineEmits(['handleSubmit'])


</script>