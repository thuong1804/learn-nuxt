<template>
  <Carousel class="pb-[150px]" :itemsToShow="3" :wrapAround="true" :breakpoints="breakpoints" gap="20">
    <template #slides>
      <Slide v-for="(item, index) in data.comments" :key="index">
        <div class="flex flex-col rounded-[20px] border border-[#0000001A] py-7 px-8 gap-4 h-[200px] w-full">
          <div class="flex gap-2">
            <Icon name="solar:like-broken" class="text-[20px] text-yellow-400"/> 
            <span class="text-blue-400 font-bold">{{ item.likes }}</span>
          </div>
          <div class="flex items-center gap-1 text-lg font-semibold">
            {{ item.user.fullName }}
            <Icon name="ph:check-circle-fill" class="text-green-600 text-[20px]" />
          </div>
          <div class="text-[16px] text-gray-600">{{ item.body }}</div>
        </div>
      </Slide>
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'

const {data} = useFetch('https://dummyjson.com/comments?limit=10&skip=10&select=body,postId')

const itemsReivew = ref([])

onMounted(async() => {
 console.log(data.value)
})

const breakpoints = {
  640: { itemsToShow: 1 },
  1024: { itemsToShow: 2 },
  1280: { itemsToShow: 3 }
}
</script>
