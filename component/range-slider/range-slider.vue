<template>
  <ClientOnly>
    <VueSlider
      v-model="localValue"
      :minRange="100" :min="0"
      :max="1000"
      :dotStyle="{ backgroundColor: 'black' }"
      tooltip="always"
      tooltipPlacement="bottom"
      :processStyle="{ backgroundColor: 'black' }"
      @change="emitValue"
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

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [50, 200],
  },
});

const localValue = ref([...props.modelValue]);

const emit = defineEmits(["update:modelValue"]);

const emitValue = (value) => {
  emit("update:modelValue", value);
}

watch(() => props.modelValue, (newVal) => {
  localValue.value = [...newVal];
});

</script>
