<template>
  <div class="w-full pb-[170px] flex flex-col  items-center">
    <div class="w-full flex justify-center items-center max-w-96 md:max-w-[78rem]">
      <div class="w-full ">
        <Breadcrumb />
        <div v-if="activeStep === 0">
          <h1 class="font-bold text-[40px] pb-6">YOUR CART</h1>
          <div class="flex gap-5">
            <div class="flex flex-col gap-4  px-2 flex-1 border rounded-[20px] py-5 border-[#0000001A]">
              <div class="max-h-[600px] overflow-y-auto" v-if="cartStore.cart.length > 0">
                <CartItem v-for="(cart, key) in cartStore.cart" :item="cart" :remove-cart="cartStore.removeFromCart"
                  :update-quantity="cartStore.updateQuantity" />
              </div>
              <div v-else class="w-full flex flex-col items-center justify-center h-full gap-4">
                <div class="font-bold text-gray-400 text-4xl">Your cart is empty</div>
                <Icon name="material-symbols:production-quantity-limits" style="color: gray" class="text-[90px]" />
                <Button @click="navigateTo('/sale')" class="bg-gray-700" title="Go shopping now!" />
              </div>
            </div>
            <div class="w-[40%] border rounded-[20px] py-5 px-6 border-[#0000001A] flex flex-col gap-5 h-max">
              <CartOrder v-model:activeStep="activeStep" :cart="cartStore.cart" :total-sub-price="cartStore.totalPrice" />
            </div>
          </div>
        </div>
        <div v-else>
          <Checkout/>
        </div>
      </div>
    </div>
    <div class="max-w-96 md:max-w-[78rem] w-full mt-[50px]">
      <UStepper :items="items" class="w-full" @update:modelValue="handleStepChange" />
    </div>
  </div>
</template>

<script setup>
import CartItem from '~/container/cart/cart-item.vue';
import CartOrder from './cart-order.vue';
import Button from '~/component/button/button.vue';
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import Checkout from './checkout.vue';

const activeStep = ref(0)

const items = ref([
  {
    title: 'Your cart',
    description: 'Your cart here',
    icon: 'material-symbols:garden-cart'
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  },
  {
    title: 'Checkout',
    description: 'Confirm your order'
  }
])

const handleStepChange = (index, value) => {
  activeStep.value = index
};

const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()
})
</script>