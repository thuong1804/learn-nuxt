<template>
  <input v class="w-6 h-4 accent-pink-500 cursor-pointer transition-transform duration-200 ease-in-out active:scale-125" type="checkbox" checked />
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  value: String || Number
})

</script>
