<template>
  <CartContainer/>
</template>

<script setup>
import authMiddleware from "@/middleware/auth";
import CartContainer from '~/container/cart/cart-container.vue';

useHead({
  title: 'cart' ,
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon-shop.png' }
  ]
})

definePageMeta({
  middleware: authMiddleware
});

</script>