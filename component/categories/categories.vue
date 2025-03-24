<template>
  <div class="w-full border rounded-[20px] py-[20px] px-[24px] h-max">
    <div class="flex justify-between items-center pb-6">
      <div class="text-black text-xl font-bold ">Filters</div>
    </div>
    <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
    <div class="flex flex-col gap-3 pt-6">
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">T-shirts</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Sneakers</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Sofa</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">MacBook</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Jogger</div>
        <Checkbox/>
      </div>
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"/>
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Price</div>
    </div>
    <RangeSlider />
    <div class="w-full pt-14 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Colors</div>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <div class="w-[37px] h-[37px] rounded-full flex items-center justify-center border border-[#00000033] cursor-pointer"
        v-for="(color, index) in itemsColor" :key="index" :style="{ backgroundColor: color }" @click="handelClickColor(index)">
        <Icon name="typcn:tick" :style="{color: color === '#FFFFFF' ? '#000' : '#FFFFFF'}" class="text-[22px] font-bold" v-if="keyColorRef === index"/>
      </div>
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Size</div>
    </div>
    <div class="grid grid-cols-2 gap-2 w-max gap-x-1">
      <div :class="['w-max px-5 py-2.5  text-[#00000066] rounded-[62px] flex items-center justify-center cursor-pointer transition-all hover:text-white',
       keyRef.includes(key) ? 'bg-amber-600 text-white' : 'bg-[#F0F0F0]']"
      @click="handelActiveSize(key)"
        v-for="(size, key) in itemsSize">
        {{ size }}
      </div>
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Fashion Style</div>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Men shirts</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Men shoes</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Women bags</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Women watches</div>
        <Checkbox/>
      </div>
      <div class="w-full pt-6 pb-2.5">
        <Button class="w-full rounded-[62px]" title="Apply filter"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import RangeSlider from '../../../component/range-slider/range-slider.vue';
import Checkbox from '../checkbox/checkbox.vue';
import Button from '../button/button.vue';

const keyRef = ref([])
const keyColorRef = ref()

const handelClickColor = (index) => {
  keyColorRef.value = index
}

const handelActiveSize = (key) => {
  if (!keyRef.value.includes(key)) {
    keyRef.value.push(key)
  } else {
    keyRef.value.splice(keyRef.value.indexOf(key), 1);
  }
}

const itemsColor = ["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", " #7D06F5", "#F506A4", "#FFFFFF", "#000000"]
const itemsSize = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]
</script>