<template>
  <CartContainer/>
</template>

<script setup>
import authMiddleware from "@/middleware/auth";
import CartContainer from '~/container/cart/cart-container.vue';

definePageMeta({
  middleware: authMiddleware
});

</script>