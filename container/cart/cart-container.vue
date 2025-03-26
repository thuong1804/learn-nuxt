<template>
  <div class="w-full flex justify-center">
    <div class="max-w-96 md:max-w-[78rem] w-full pb-[170px]">
      <h1 class="font-bold text-[40px] pb-6">YOUR CART</h1>
      <div class="flex gap-5">
        <div class="flex flex-col gap-4  px-2 flex-1 border rounded-[20px] py-5 border-[#0000001A]">
          <div class="max-h-[600px] overflow-y-auto">
            <CartItem v-for="cart in cartStore.cart" :item="cart" :remove-cart="cartStore.removeFromCart" :update-quantity="cartStore.updateQuantity"/>
          </div>
        </div>
        <div class="w-[40%] border rounded-[20px] py-5 px-6 border-[#0000001A] flex flex-col gap-5 h-max">
          <CartOrder :cart ="cartStore.cart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import CartItem from '~/container/cart/cart-item.vue';
import CartOrder from './cart-order.vue';

const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()
})
</script>