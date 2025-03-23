
<template>
  <div :class="['flex flex-col items-center', title ? 'pt-[64px]' : 'pt-[30px]']">
    <h1 v-if="title" class="font-bold text-[48px] text-center pb-[55px]">{{ title }}</h1>
    <div v-if="dataProducts.length"
      :class="['grid gap-4 max-w-96 md:max-w-[78rem] w-full pb-[36px]', column ? `grid-cols-${column}` : 'grid-cols-4' ]">
      <div v-for="item in dataProducts">
        <ProductCart :item-product="item" />
      </div>
    </div>
    <div v-else
      :class="['grid gap-4 max-w-96 md:max-w-[78rem] w-full pb-[36px] ', column ? `grid-cols-${column}` : 'grid-cols-4']">
      <div class="animate-pulse bg-gray-200 border border-[#f0eeed] rounded-[20px] px-4 py-4 w-full min-w-[300px] max-w-[300px] h-[300px]"
      v-for="item in itemLoading" :key="item"/>
    </div>
    <Button v-if="onLoadMore" @click="onLoadMore" class="cursor-pointer w-[218px] h-[52px] rounded-[62px] text-[16px]" title="Load More"/>
  </div>
</template>

<script setup>
import ProductCart from '../product-card/product-cart.vue'
import Button from '../button/button.vue'

const props = defineProps({
  title: {type:String, default: ''},
  data: {type: Object, required: true},
  column: Number || String,
  onLoadMore: Function,
})
const itemLoading = new Array(props.column ? 6 : 8)
const dataProducts = ref([])
const emit = defineEmits(['handleLoadMore'])

watch(() => props.data, (newData) => {
  dataProducts.value = newData.products
}, { deep: true })

</script>