<template>
  <input v class="w-6 h-4 accent-gray-600 cursor-pointer transition-transform duration-200 ease-in-out active:scale-125" type="checkbox" />
</template>

<script setup>

defineProps({
  value: String || Number
})

</script>
