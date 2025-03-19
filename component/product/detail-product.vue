<template>
  <div class="flex max-w-96 md:max-w-[78rem] w-full items-start">
    <div class="pr-10">
      <img :src="item.image" class="w-full h-[530px]" />
    </div>
    <div class="flex flex-col -mt-5 max-w-[600px]">
      <h1 class="font-bold text-[40px] uppercase">{{ item.title }}</h1>
      <div class="flex gap-[7px]">
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        4.5/<span class="text-[#00000066] -ml-1">5</span>
      </div>
      <div class="font-bold text-2xl flex items-center gap-2.5 pb-5">
        <div v-if="item.discount" class="flex gap-2 items-center">
          <div class="text-[25px]">${{ calculateTotalDiscount(item).toFixed(2) }}</div>
          <div class="justify-center text-black/30 text-[25px] font-bold line-through">
            ${{ item.price }}
          </div>
          <div
            class="px-3.5 py-1.5 w-[58px] bg-[#FF33331A] text-red-500 flex items-center justify-center rounded-2xl text-[12px]">
            -{{ item.discount }}%
          </div>
        </div>
        <div v-else class="justify-center text-black text-[25px] font-bold">
          ${{ item.price }}
        </div>
      </div>
      <div class="w-full justify-start text-black/60 text-base font-normal leading-snug pb-6">{{ item.description }}
      </div>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
      <div class="text-base font-normal text-[#00000066] pt-4">Color: <b>{{ item.color }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4 pt-4">Model: <b>{{ item.model }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">Brand: <b>{{ item.brand }}</b> </div>
      <div class="text-base font-normal text-[#00000066] pb-4">Category: <b> {{ item.category }}</b></div>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
      <div class="flex gap-5 pt-6">
        <div
          class="bg-[#F0F0F0]  text-[#00000066] rounded-[62px] flex items-center justify-between w-[170px] py-2.5 px-5 ">
          <button class="flex items-center cursor-pointer" @click="quantity = Math.max(0, quantity - 1)">
            <Icon name="icon-park-outline:minus" style="color: #00000066" class="text-[20px]" />
          </button>
          <button class="text-[20px] text-[#00000066] flex items-center">{{ quantity }}</button>
          <button class="flex items-center cursor-pointer" @click="quantity++">
            <Icon name="material-symbols:add-2" style="color: #00000066" class="text-[20px]" />
          </button>
        </div>
        <Button custom-class="flex-1 max-w-[400px] h-[52px] rounded-[60px]" title="Add to cart" @click="handleAddToCart(item)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../button/button.vue'
const props = defineProps({
  item: { type: Object, required: true }
})

const quantity = ref(1)

const calculateTotalDiscount = ((item) => {
  const calculatePercentage = item.price * (item.discount / 100)
  return item.price - calculatePercentage
})

const handleAddToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  let existingItem = cart.find(value => value.id === item.id)

  if (existingItem) {
    existingItem.quantity = quantity.value;
  } else {
    cart.push({ ...item, quantity: quantity.value });
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}

</script>