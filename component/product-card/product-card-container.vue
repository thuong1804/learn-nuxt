
<template>
  <div :class="['flex flex-col items-center', title ? 'pt-[64px]' : 'pt-[30px]']">
    <h1 v-if="title" class="font-bold text-[48px] text-center pb-[55px]">{{ title }}</h1>
    <div v-if="dataProducts.length"
      :class="['grid gap-4 max-w-96 md:max-w-[78rem] w-full pb-[36px] grid-cols-3', column ? `grid-cols-${column}` : 'grid-cols-4' ]">
      <div v-for="item in dataProducts">
        <ProductCart :item-product="item" />
      </div>
    </div>
    <div v-else
      :class="['grid gap-4 max-w-96 md:max-w-[78rem] w-full pb-[36px] grid-cols-3', column ? `grid-cols-${column}` : 'grid-cols-4']">
      <div class="animate-pulse bg-gray-200 border border-[#f0eeed] rounded-[20px] px-4 py-4 w-full min-w-[300px] max-w-[300px] h-[300px]"
      v-for="item in itemLoading" :key="item"/>
    </div>
    <Button v-if="onLoadMore && dataProducts?.length < 24" @click="onLoadMore" class="cursor-pointer w-[218px] h-[52px] rounded-[62px] text-[16px]" title="Load More"/>
    <Button v-if="isShowShopNow" class="cursor-pointer w-[218px] h-[52px] rounded-[62px] text-[16px] bg-orange-400" title="Shop now" @click="navigateTo(path)"/>
  </div>
</template>

<script setup>
import ProductCart from '../product-card/product-cart.vue'
import Button from '../button/button.vue'
import { watchEffect } from 'vue'
import { navigateTo } from 'nuxt/app'

const props = defineProps({
  title: {type:String, default: ''},
  data: {type: Object, required: true},
  column: String,
  onLoadMore: Function,
  isShowShopNow: {type: Boolean, default: false},
  path: String,
})

const itemLoading = new Array(props.column ? 9 : 12)
const dataProducts = ref([])

const emit = defineEmits(['handleLoadMore'])

watchEffect(() => {
  const newData = props.data
  dataProducts.value = newData.data || newData.products || []
})

</script>