<template>
  <Breadcrumb/>
  <CartContainer/>
</template>

<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import authMiddleware from "@/middleware/auth";
import CartContainer from '~/container/cart/cart-container.vue';

definePageMeta({
  middleware: authMiddleware
});

</script>