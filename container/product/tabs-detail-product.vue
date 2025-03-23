<template>
  <div class="max-w-96 md:max-w-[78rem] w-full flex pt-[80px] justify-between">
    <div class="flex flex-col gap-6 w-full" v-for="(tab, index) in tabs" @click="handleActiveTab(index)">
      <div :class="['text-center justify-start  text-xl font-medium leading-snug', activeTab === index ? 'text-black' : 'text-black/60']">{{ tab }}</div>
      <transition name="slide-fade" mode="out-in" type="transition">
        <div
          v-if="activeTab === index"
          :key="activeTab"
          :class="['outline-1 outline-offset-[-0.50px] transition-all duration-300 outline-black']">
        </div>
      </transition>
    </div>
  </div>
  <div v-if="activeTab === 0" class="max-w-96 md:max-w-[78rem] w-full pt-8">
    <ProductDescription :item="item"/>
  </div>
  <div v-else class="max-w-96 md:max-w-[78rem] w-full pt-8">
    <ReviewProduct :items="item.reviews"/>
  </div>

</template>

<script setup>
import ProductDescription from './product-description.vue';
import ReviewProduct from './review-product.vue';
const tabs = ['Product Details', 'Rating & Reviews']
const activeTab = ref(0)

defineProps({
  item: {type: Object, required: true}
})

const handleActiveTab = (key) => {
  activeTab.value = key
}

</script>

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s;
}
.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>