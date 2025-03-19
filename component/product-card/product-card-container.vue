
<template>
  <div class="flex flex-col items-center pt-[72px]">
    <h1 v-if="title" class="font-bold text-[48px] text-center pb-[55px]">{{ title }}</h1>
    <div class="grid grid-cols-4 gap-4 max-w-96 md:max-w-[78rem] w-full pb-[36px]">
      <ProductCart v-if="filterProduct.length" :item-products="filterProduct"/>
    </div>
    <Button v-if="limitInit < lengthData"
      @click="handleLoadMore"
      class="cursor-pointer w-[218px] h-[52px] rounded-[62px] text-[16px]">
      Load More
    </Button>
  </div>
</template>

<script setup>
import ProductCart from '../product-card/product-cart.vue'
import Button from '../button/button.vue'

const props = defineProps({
  title: {type:String, default: ''},
  data: {type: Array, required: true},
  filterData: {type: Object, default: {}},
  sortMaxToMin: {type: Boolean, default: false},
  sortMinToMax: {type: Boolean, default: false},
})

const lengthData = ref(0)
const limitInit = ref(8)

const filterProduct = computed(() => {
  let filteredData = [...props.data];

Object.keys(props.filterData).forEach((key) => {
  filteredData = filteredData.filter(item => item[key] === props.filterData[key]);
});

lengthData.value = filteredData.length;

if (props.sortMaxToMin) {
  return [...filteredData].sort((a, b) => b.price - a.price).slice(0, limitInit.value);
} else if (props.sortMinToMax) {
  return [...filteredData].sort((a, b) => a.price - b.price).slice(0, limitInit.value);
}

return filteredData.slice(0, limitInit.value);
})

const handleLoadMore = () => {
  if (limitInit.value < lengthData.value) {
    limitInit.value += 8
  }
}
</script>