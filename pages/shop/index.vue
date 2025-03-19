<template>
  <div class="flex flex-col items-center pb-[150px]">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
      <ul class="flex gap-5 list-none">
        <li v-for="(item, key) in itemFilter" :class="['rounded-[30px] py-2 px-6  cursor-pointer font-bold',
          activeKey === key ? 'bg-[#3f3f46] text-white' : 'bg-[#fb86861a]']" @click="handleActive(key, item)">{{ item }}
        </li>
      </ul>
      <ProductCardContainer :data="data" :filterData="{...valueFilter}" :sortMaxToMin="maxFilter"
        :sortMinToMax="minFilter" />
    </div>
  </div>

</template>

<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import ProductCardContainer from '~/component/product-card/product-card-container.vue';

const data = ref([])
const itemFilter = ['All', 'Sale', 'Popular', 'Expensive', 'Cheap']
const activeKey = ref(0)
const valueFilter = ref({})
const maxFilter = ref(false)
const minFilter = ref(false)

onMounted(async () => {
  const response = await $fetch(`https://fakestoreapi.in/api/products`, {
    method: 'GET',
  })
  data.value = response.products
})

const handleActive = (key, item) => {
  const formatLowCase = item.toLowerCase()
  activeKey.value = key

  const filters = {
    sale: () => ({ onSale: true }),
    popular: () => ({ popular: true }),
    expensive: () => (maxFilter.value = true),
    cheap: () => (minFilter.value = true),
  };

  minFilter.value = false;
  maxFilter.value = false;

  valueFilter.value = filters[formatLowCase] ? filters[formatLowCase]() : {};
}


</script>