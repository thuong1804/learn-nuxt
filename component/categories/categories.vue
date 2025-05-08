<template>
  <div class="w-full border rounded-[20px] py-[20px] px-[24px] h-max">
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Price</div>
    </div>
    <RangeSlider v-model="valueRange" />
    <div class="w-full pt-14 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Colors</div>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <div
        class="w-[37px] h-[37px] rounded-full flex items-center justify-center border border-[#00000033] cursor-pointer"
        v-for="(item, index) in itemsColor" :key="index" :style="{ backgroundColor: item.color }"
        @click="handelClickColor(index, item.name)">
        <Icon name="typcn:tick" :style="{ color: item.color === '#FFFFFF' ? '#000' : '#FFFFFF' }"
          class="text-[22px] font-bold" v-if="keyColorRef.includes(item.name)" />
      </div>
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Size</div>
    </div>
    <div class="grid grid-cols-2 gap-2 w-max gap-x-1">
      <div v-for="size in itemsSize" :key="size" :class="[
        'w-max px-5 py-2.5 text-[#00000066] rounded-[62px] flex items-center justify-center cursor-pointer transition-all hover:text-white',
        keySizeRef.includes(size) ? 'bg-amber-600 text-white' : 'bg-[#F0F0F0]'
      ]" @click="handelActiveSize(size)">
        {{ size }}
      </div>
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex flex-col gap-5">
      <div class="w-full pt-6 pb-2.5 flex flex-col gap-3">
        <Button class="w-full rounded-[62px]" title="Apply filter" @click="handleClickFilter"/>
        <Button class="w-full rounded-[62px] bg-gray-400" title="Clear filter" @click="handleClearFilter"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import Button from '../button/button.vue';
import { ref, watchEffect } from 'vue';
import RangeSlider from '../range-slider/range-slider.vue';
import { itemsColor, itemsSize } from '../../constants';

const router = useRouter()
const route = useRoute()
const hasQueryParams = ref(false)
const keySizeRef = ref([])
const keyColorRef = ref([])

const valueRange = ref([50, 200]);

const handelClickColor = (index, name) => {
  const idx = keyColorRef.value.indexOf(name);
  if (idx === -1) {
    keyColorRef.value.push(name);
  } else {
    keyColorRef.value.splice(idx, 1);
  }
};

const handelActiveSize = (size) => {
  const idx = keySizeRef.value.indexOf(size);
  if (idx === -1) {
    keySizeRef.value.push(size);
  } else {
    keySizeRef.value.splice(idx, 1);
  }
};

const handleClickFilter = () => {
  const querySlug = {
    minPrice: valueRange.value[0],
    maxPrice: valueRange.value[1],
    color: keyColorRef.value,
    size: keySizeRef.value,
  };

  router.push({
    path: route.path,
    query: {
      ...route.query,
      ...querySlug,
      page: 1,
      skip:0
    }
  });
};

const handleClearFilter = () => {
  router.push({
    path: route.path,
    query: {},
  })

  keyColorRef.value = []
  keySizeRef.value = []
}

watchEffect(() => {
  if (Object.keys(route.query).length > 0) {
    hasQueryParams.value = true
  } else {
    hasQueryParams.value = false
  }
})

</script>