<template>
  <h4 class="font-bold text-2xl">Checkout</h4>
  <div class="flex gap-5 mt-4">
    <div class="flex flex-col gap-4 px-4 flex-1 border rounded-[20px] py-5 border-[#0000001A]">
      <div class="max-h-[600px] overflow-y-auto w-full">
        <h1 class="text-center font-bold text-4xl pb-2">Express checkout</h1>
        <h1 class="font-bold text-[20px] pb-2">Contact Information</h1>
        <UForm class="space-y-4 w-full pb-4">
          <UFormField name="email">
            <UInput class="w-full" placeholder="Email" size="xl" />
          </UFormField>
        </UForm>
        <h1 class="font-bold text-[20px] pb-2">Shipping address</h1>
        <UForm class="space-y-4 w-full">
          <UFormField name="email">
            <UInput class="w-full" placeholder="Address" size="xl" />
          </UFormField>
          <UFormField name="email">
            <UInput class="w-full" placeholder="Apartment" size="xl" />
          </UFormField>
          <UFormField name="email">
            <UInput class="w-full" placeholder="City" size="xl" />
          </UFormField>
          <UFormField name="email">
            <UInput class="w-full" placeholder="Country" size="xl" />
          </UFormField>
          <UFormField name="email">
            <UInput class="w-full" placeholder="Phone" size="xl" />
          </UFormField>
        </UForm>
      </div>

    </div>
    <div class="w-[40%] border rounded-[20px] py-5 px-6 border-[#0000001A] flex flex-col gap-5 max-h-[600px] overflow-y-auto">
      <CartItem v-for="(cart, key) in cartStore.cart" :item="cart" />
    </div>
  </div>
</template>

<script setup>
import CartItem from '~/container/cart/cart-item.vue';
const cartStore = useCartStore()
</script>