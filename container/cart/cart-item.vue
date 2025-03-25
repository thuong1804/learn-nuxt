<template>
  <div class=" w-full border rounded-[20px] py-5 px-6 border-[#0000001A]  flex flex-col gap-5 max-h-[600px] overflow-y-scroll">
    <div class="flex flex-col gap-6 ">
      <div class="flex gap-[16px]">
        <img :src="item.images[0]" class="w-[125px] rounded-[20px]" />
        <div class="flex flex-col flex-1">
          <h4 class="font-bold text-[20px]">{{ item.title }}</h4>
          <div class="text-base font-normal">
            <div class="flex">
              Depth:<b class="ml-2"> {{ item.dimensions.depth }} in</b>,
              Height:<b class="ml-2"> {{ item.dimensions.height }} in</b>,
              Width:<b class="ml-2"> {{ item.dimensions.width }} in</b>
            </div>
          </div>
          <div>Quantity: <span class="text-[18px]">{{ item.quantity }}</span></div>
          <div class="font-bold text-2xl flex items-center gap-2">
            <div v-if="item.discountPercentage && item.discountPercentage > 1" class="flex gap-2 items-center">
              <div class="text-[25px]">${{ calculateTotalDiscount(item).toFixed(2) }}</div>
              <div class="justify-center text-black/30 text-[25px] font-bold line-through">
                ${{ formatCurrency(item.price) }}
              </div>
              <div
                class="px-3.5 py-1.5 w-[58px] bg-[#FF33331A] text-red-500 flex items-center justify-center rounded-2xl text-[12px]">
                -{{ Math.round(item.discountPercentage) }}%
              </div>
            </div>
            <div v-else class="justify-center text-black text-[25px] font-bold">
              ${{ formatCurrency(item.price) }}
            </div>
          </div>
        </div>
        <div class="flex flex-col items-end justify-between ">
          <div class="cursor-pointer" @click="removeCart(item.id)">
            <Icon name="streamline:recycle-bin-2-solid" style="color: #FF3333" class="text-[20px]" />
          </div>
          <div
            class="bg-[#F0F0F0]  text-[#00000066] rounded-[62px] flex items-center justify-between w-[140px] py-2 px-5 ">
            <button class="flex items-center cursor-pointer" @click="quantity = Math.max(0, quantity - 1)">
              <Icon name="icon-park-outline:minus" style="color: #00000066" class="text-[20px]" />
            </button>
            <button class="text-[20px] text-[#00000066] flex items-center">{{ item.quantity }}</button>
            <button class="flex items-center cursor-pointer" @click="quantity++">
              <Icon name="material-symbols:add-2" style="color: #00000066" class="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      </div>
    </div>
  </div>
</template>

<script setup>

const calculateTotalDiscount = ((item) => {
  const calculatePercentage = item.price * (item.discountPercentage / 100)
  return item.price - calculatePercentage
})


defineProps({
  item: { type: Object, required: true },
  removeCart: Function,
})

// const quantity = ref(item.quantity)

// watch(quantity, (newVal) => {
//   cartStore.updateQuantity(item.id, newVal)
// })
</script>