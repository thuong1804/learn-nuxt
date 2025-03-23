<template>
  <div class="w-full">
    <div class="flex justify-between max-w-96 md:max-w-[78rem] w-full pt-8 pb-6">
      <div class="text-black text-2xl font-bold">All Reviews <span
          class="text-black/60 text-sm font-normal">({{ items.length }})</span></div>
      <div>
        <div class="flex justify-start items-start gap-2.5">
          <div class="w-12 h-12 bg-[#efefef] rounded-[62px] flex justify-center items-center">
            <Icon name="mage:filter" style="color: black" class="text-[20px]" />
          </div>
          <div class="w-[120px] h-12 px-5 py-4 bg-[#efefef] rounded-[62px] flex justify-between items-center">
            <div class="justify-start text-black text-base font-medium">Latest</div>
            <Icon name="material-symbols:arrow-downward" style="color: black" class="text-[20px]" />
          </div>
          <div class="w-[166px] h-12 px-5 py-4 bg-black rounded-[62px] flex justify-center items-center text-white">
            Write a Review
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-96 md:max-w-[78rem] w-full pb-[36px] border border-[#0000001A] rounded-[20px] py-5 px-5">
      <div class="flex flex-col gap-5">
        <div class="w-full flex flex-col h-max gap-2" v-for="(item, index) in items" :key="index">
          <div class="flex gap-2 align-center"><vue3starRatings v-model="item.rating" disableClick /> {{ item.rating }}/ 5</div>
          <NuxtTime :datetime="item.date"/>
          <div>
            {{ item.reviewerEmail }}
          </div>
          <div>
            {{ item.reviewerName }}
          </div>
          <div class="flex items-center gap-0.5">
          </div>
          <div class="text-[16px] text-[#00000099]">{{ item.comment }}</div>
          <Divider/>
        </div>
      </div>
    </div>
    <div class="pb-10 pt-10">
      <div class="w-full flex justify-center items-center">
        <Button title="Load more review"/>
      </div>
    </div>
    <Divider/>
  </div>
</template>

<script setup>
import Divider from '~/component/divider/divider.vue';
import vue3starRatings from "vue3-star-ratings";
import Button from '~/component/button/button.vue';

defineProps({
  items: {type: Array, required:true}
})

</script>