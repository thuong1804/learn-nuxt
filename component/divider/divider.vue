<template>
  <div :class="['w-full outline-1 outline-offset-[-0.5px] outline-black/10', customClass]"/>
</template>

<script setup>
defineProps({
  customClass: String,
})
</script>