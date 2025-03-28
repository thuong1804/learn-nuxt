<template>
  <div class="flex max-w-96 md:max-w-[78rem] w-full items-start h-[540px] max-h-max">
    <div class="flex flex-col pr-3.5 w-1/5 h-full justify-between gap-3">
      <div v-for="(img, index) in (item?.images?.length > 3 ? item?.images?.slice(0,3) : item?.images)"
        :class="['rounded-[20px] shadow-sm cursor-pointer transition-all  hover:scale-105 p-1.5', imgActive.key === index ? 'border-gray-500 border' : 'border-gray-200 border']"
        @click="handleClickImg(img, index)">
        <NuxtImg :src="img" class="w-full h-[150px] object-contain" />
      </div>
    </div>
    <div class="pr-10 w-[444px] h-full">
      <ImageZoom :image-src="imgActive.value"/>
    </div>
    <div class="flex flex-col max-w-[600px] h-full justify-between">
      <h1 class="font-bold text-[40px] uppercase leading-[40px]">{{ item.title }}</h1>
      <div class="flex gap-2 pt-2 pb-2">
        <vue3starRatings v-model="item.rating" disableClick />
        {{ item.rating }}/<span class="text-[#00000066] -ml-1">5</span>
      </div>
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
      <div class="w-full justify-start text-black/60 text-base font-normal leading-snug pb-2 pt-2">{{ item.description }}
      </div>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
      <div class="text-base font-normal text-[#00000066] pt-4">Category:
        <NuxtLink :to="`/${item.category}`">
          <b>{{ item.category }}</b>
        </NuxtLink>
      </div>
      <div class="text-base font-normal text-[#00000066] pb-4 pt-4">Availability status: <b>{{ item.availabilityStatus}}</b>, Stock: <b>{{ item.stock }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">
        <div class="flex">
          Depth:<b class="ml-2"> {{ item.dimensions.depth }} in</b>,
          Height:<b class="ml-2"> {{ item.dimensions.height }} in</b>,
          Width:<b class="ml-2"> {{ item.dimensions.width }} in</b>
        </div>
      </div>
      <div class="text-base font-normal text-[#00000066] pb-4">Return Policy: <b> {{ item.returnPolicy }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">Shipping Information: <b> {{ item.shippingInformation }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">Warranty Information: <b> {{ item.warrantyInformation }}</b></div>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
      <div class="flex gap-5 pt-4">
        <div
          class="bg-[#F0F0F0]  text-[#00000066] rounded-[62px] flex items-center justify-between w-[170px] py-2.5 px-5 ">
          <button class="flex items-center cursor-pointer" @click="quantity = Math.max(1, quantity - 1)">
            <Icon name="icon-park-outline:minus" style="color: #00000066" class="text-[20px]" />
          </button>
          <button class="text-[20px] text-[#00000066] flex items-center">{{ quantity }}</button>
          <button class="flex items-center cursor-pointer" @click="quantity++">
            <Icon name="material-symbols:add-2" style="color: #00000066" class="text-[20px]" />
          </button>
        </div>
        <Button custom-class="flex-1 max-w-[400px] h-[52px] rounded-[60px]" title="Add to cart"
          @click="handleAddToCart(item, quantity)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue'
import vue3starRatings from "vue3-star-ratings";
import ImageZoom from '~/component/image-zoom/image-zoom.vue';

const props = defineProps({
  item: { type: Object, required: true }
})

const imgActive = reactive({
  value: '',
  key: 0,
})

const cartStore = useCartStore()
const quantity = ref(1)

onMounted(() => {
  cartStore.loadCart()
})

onMounted(() => {
  if (props.item?.images?.length > 0) {
    imgActive.value = props.item.images[0]
  }
})

const handleClickImg = (img, index) => {
  imgActive.value = img
  imgActive.key = index
}

const calculateTotalDiscount = ((item) => {
  const calculatePercentage = item.price * (item.discountPercentage / 100)
  return item.price - calculatePercentage
})

// const handleAddToCart = async (item) => {
//   await $fetch('/api/cart/add-cart', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       userId: profile.value.id,
//       products: [{ id: item.id, quantity: quantity.value }]
//     })
//   })
// }

const handleAddToCart = (item, quantity) => {
  cartStore.addToCart(item, quantity)
}

defineComponent({
  components: {
    vue3starRatings,
  },
});

</script>