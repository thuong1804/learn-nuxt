<script setup lang="ts">
import { Icon } from '#components';
const items = [
  {
    evaluate: 5,
    owner: 'Sarah M.',
    content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
  },
  {
    evaluate: 4,
    owner: 'Alex K.',
    content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
  },
  {
    evaluate: 3,
    owner: 'James L.',
    content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"
  },
  {
    evaluate: 5,
    owner: 'Sarah M.',
    content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"
  },
  {
    evaluate: 4,
    owner: 'Sarah M.',
    content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
  },
  {
    evaluate: 4,
    owner: 'Sarah M.',
    content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
  },
]

</script>

<template>
  <div class="max-w-96 md:max-w-[78rem] w-full flex pt-[80px]">
    <div class="flex flex-col gap-6 w-1/3">
      <div class="text-center justify-start text-black/60 text-xl font-medium leading-snug">Product Details</div>
      <div class="outline-1 outline-offset-[-0.50px] outline-black/10"></div>
    </div>
    <div class="flex flex-col gap-6 w-1/3">
      <div class="text-center justify-start text-black text-xl font-medium leading-snug">Rating &
        Reviews</div>
      <div class="outline-2 outline-offset-[-1px] outline-black"></div>
    </div>
    <div class="flex flex-col gap-6 w-1/3">
      <div class="text-center justify-start text-black/60 text-xl font-medium leading-snug">FAQs</div>
      <div class=" outline-1 outline-offset-[-0.50px] outline-black/10"></div>
    </div>
  </div>
  <div class="flex justify-between max-w-96 md:max-w-[78rem] w-full pt-8 pb-6">
    <div class="text-black text-2xl font-bold">All Reviews <span class="text-black/60 text-sm font-normal">(451)</span></div>
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
  <div class="flex justify-between max-w-96 md:max-w-[78rem] w-full pb-[36px]">
    <div class="grid grid-cols-2 gap-[20px]">
      <div class="w-full flex flex-col rounded-[20px] border border-[#0000001A] py-7 px-8 gap-4 h-[240px]"
        v-for="(item, index) in items" :key="index">
        <div class="flex">
          <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" v-for="n in item.evaluate" :key="n" />
        </div>
        <div class="flex items-center gap-0.5">
          {{ item.owner }}.
          <Icon name="ph:check-circle-fill" style="color: #01AB31" class="text-[20px]" />
        </div>
        <div class="text-[16px] text-[#00000099]">{{ item.content }}</div>
      </div>
    </div>
  </div>
  <div class="pb-[64px]">
    <div class="px-[54px] py-4 rounded-[62px] outline-1 outline-offset-[-1px] outline-black/10 flex justify-center items-center gap-3">
    <div class="text-black text-base font-medium">Load More Reviews</div>
  </div>
  </div>
</template>