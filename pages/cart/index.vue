<template>
  <div class="w-full flex justify-center">
    <div class="max-w-96 md:max-w-[78rem] w-full pb-[170px]">
      <Breadcrumb />
      <h1 class="font-bold text-[40px] pb-6">YOUR CART</h1>
      <div class="flex gap-5">
        <div class="flex flex-col w-full">
          <CartItem v-for="cart in cartStore.cart" :item="cart" :remove-cart="cartStore.removeFromCart"/>
        </div>
        <div class="flex-1 border rounded-[20px] py-5 px-6 border-[#0000001A] w-2/3 flex flex-col gap-5 h-max">
          <h4 class="font-bold text-2xl">Order Summary</h4>
          <div class="flex flex-col gap-5">
            <div class="flex justify-between text-[20px] text-[#00000099]">
              Subtotal
              <b class="text-black">$565</b>
            </div>
            <div class="flex justify-between text-[20px] text-[#00000099]">
              Discount (-20%)
              <b class="text-[#FF3333]">-$113</b>
            </div>
            <div class="flex justify-between text-[20px] text-[#00000099]">
              Delivery Fee
              <b class="text-black">$15</b>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
          </div>
          <div class="flex justify-between text-[20px] text-[#00000099]">
            Total
            <b class="text-black">$467</b>
          </div>
          <div class="flex gap-3">
            <div class="relative w-[349px]">
              <Icon name="mdi:tag-outline"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[20px] text-black/60" />
              <input type="email" placeholder="Add promo code"
                class="w-full pl-12 pr-4 py-3 bg-[#F0F0F0] rounded-[62px] text-black/40 text-base font-normal  focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button class="w-1/3 py-3 px-4 bg-[#000000] text-white rounded-[62px]">Apply</button>
          </div>
          <button
            class="w-full py-3 px-4 bg-[#000000] text-white rounded-[62px] flex gap-2.5 items-end justify-center">Go to
            Checkout
            <Icon name="material-symbols:arrow-right-alt" class="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import CartItem from '~/container/cart/cart-item.vue';


const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()

})
</script>