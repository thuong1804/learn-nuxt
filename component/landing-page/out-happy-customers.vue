<script setup>

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
  {
    evaluate: 3,
    owner: 'James L.',
    content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"
  },
]

const currentStep = ref(0)

const orderedItems = computed(() => {
  return items.map((item, index) => {
    return {
      ...item,
      order: (index - currentStep.value + items.length) % items.length
    };
  });
});

const nextStep  = () => {
  currentStep.value = (currentStep.value + 1) % items.length
  console.log(currentStep.value)
}

const prevStep = () => {
  currentStep.value = (currentStep.value - 1 + items.length) % items.length
  console.log(currentStep.value)
}

</script>

<template>
  <div class="pb-[170px]">
    <div class="relative max-w-96 md:max-w-[78rem] my-0 mx-auto ">
      <h1 class="font-bold text-[48px] ">OUR HAPPY CUSTOMERS</h1>
    </div>
    <div class="w-full flex justify-end gap-4 pb-11">
      <button @click="prevStep" class="cursor-pointer">
        <Icon name="ph:arrow-left-bold" style="color: black" class="text-[20px]" />
      </button>
      <button @click="nextStep" class="cursor-pointer">
        <Icon name="ph:arrow-right-bold" style="color: black" class="text-[20px]" />
      </button>
    </div>
    <div class="relative before:absolute before:top-0 before:-left-full before:w-full before:h-full before:z-10 before:backdrop-blur-sm after:absolute after:top-0 after:-right-full after:w-full after:h-full after:z-10 after:backdrop-blur-sm max-w-96 md:max-w-[78rem] my-0 mx-auto">
      <div class="w-[700%] -translate-x-[28.57%] md:w-[300%] md:-translate-x-[22.22%] ">
        <div class="flex flex-row flex-nowrap justify-start gap-5 items-stretch" :style="{ transform: `translateX(${currentStep * 200}px)`, transition: 'transform 0.5s ease-in-out' }">
        <div
          class="w-1/3 md:w-[calc(11.11%-1rem)] flex flex-col rounded-[20px] border border-[#0000001A] py-7 px-8 gap-4 h-[240px]"
          v-for="(item, index) in orderedItems"
          :key="index"
          :style="{ order: item.order }"
        >
          <div class="flex">
            <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" v-for="n in item.evaluate" :key="n"/>
          </div>
          <div class="flex items-center gap-0.5">
            {{ item.owner }}.
            <Icon name="ph:check-circle-fill" style="color: #01AB31" class="text-[20px]" />
          </div>
          <div class="text-[16px] text-[#00000099]">{{ item.content }}</div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>