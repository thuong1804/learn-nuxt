<template>
  <ClientOnly>
    <VueSlider
      v-model="value"
      :minRange="100" min="0"
      max="300"
      :dotStyle="{ backgroundColor: 'black' }"
      tooltip="always"
      tooltipPlacement="bottom"
      :processStyle="{ backgroundColor: 'black' }"
    >
      <template #tooltip="{ pos, index, value, focus, disabled }">
        <div class="-bottom-6">${{ value }}</div>
      </template>
    </VueSlider>
  </ClientOnly>
</template>

<script setup>
import { ref } from "vue";
import VueSlider from "vue-3-slider-component";

const value = ref([50, 200]);
</script>
