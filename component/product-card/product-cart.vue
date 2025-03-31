<template>
  <transition name="fade">
    <NuxtLink :to="formatProductSlugDetail(itemProduct.title, itemProduct.id)" v-if="showCard"
      class="flex flex-col items-start gap-2 w-full">
      <div class="border border-[#f0eeed]  rounded-[20px] px-4 py-4 w-full max-w-[300px] shadow-sm">
        <NuxtImg :src="itemProduct.thumbnail"
          class="w-full h-[300px] min-h-[300px] transition-all  hover:scale-105 object-contain" loading="lazy"
          v-slot="{ src, isLoaded, imgAttrs }" :custom="true" alt="item cart">
          <img v-if="isLoaded" v-bind="imgAttrs" :src="src">
          <div v-else class="w-full h-[300px] min-h-[300px] flex justify-center items-center">
            <Icon name="line-md:loading-twotone-loop" class="text-[36px]" />
          </div>
        </NuxtImg>
      </div>
      <div class="font-bold text-[16px]">{{ itemProduct.title }}</div>
      <div class="font-bold text-[16px]">{{ itemProduct.brand }}</div>
      <div class="flex">
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" v-for="value in itemProduct.evaluate"
          :key="value" />
      </div>
      <div class="font-bold text-2xl flex items-center gap-2.5 pb-5 ">
        <div v-if="itemProduct.discountPercentage && itemProduct.discountPercentage > 1"
          class="flex gap-2 items-center flex-wrap">
          <div class="text-[25px]">${{ calculateTotalDiscount(itemProduct).toFixed(2) }}</div>
          <div class="justify-center text-black/30 text-[25px] font-bold line-through">
            {{ formatCurrency(itemProduct.price) }}
          </div>
          <div
            class="px-3.5 py-1.5 w-[58px] bg-[#FF33331A] text-red-500 flex items-center justify-center rounded-2xl text-[12px]">
            -{{ Math.round(itemProduct.discountPercentage) }}%
          </div>
        </div>
        <div v-else class="justify-center text-black text-[25px] font-bold">
          {{ formatCurrency(itemProduct.price) }}
        </div>
      </div>
    </NuxtLink>
  </transition>

</template>

<script setup>
import { formatCurrency } from '#imports'
const props = defineProps({
  itemProduct: { type: Object, required: true }
})

const route = useRoute()
const showCard = ref(false);
const pageRef = ref(0)

watch(() => route.query.page, (newPage, oldPage) => {
  if (newPage !== oldPage) {
    showCard.value = false;
    setTimeout(() => {
      pageRef.value = newPage;
      showCard.value = true;
    }, 200);
  }
});

onMounted(() => {
  showCard.value = true;
});
const calculateTotalDiscount = ((item) => {
  const calculatePercentage = item.price * (item.discountPercentage / 100)
  return item.price - calculatePercentage
})
</script>


<style scoped>
.fade-enter-active {
  transition: opacity 1s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.7)
}


.fade-enter-to {
  opacity: 1;
  transform: scale(1)
}
</style>