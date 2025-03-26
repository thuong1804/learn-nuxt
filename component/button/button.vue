<template>
  <button :type="type" :class="computedClass" :disabled="loading || disabled" @click="handleClick">
    <span v-if="loading" class="flex items-center justify-center gap-2">
      <Icon name="line-md:loading-twotone-loop" class="text-[16px]" />
      Loading...
    </span>
    <span v-else>{{ title }}</span>
  </button>
</template>

<script setup>
import { Icon } from "#components";
import { computed } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  type: { type: String, default: "button" },
  customClass: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["click"]);

const computedClass = computed(() => {
  return `bg-black text-white py-[10px] px-2 font-bold rounded-[5px] transition active:scale-95 flex items-center justify-center ${
    props.disabled || props.loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800 cursor-pointer"
  } ${props.customClass}`;
});

const handleClick = (event) => {
  if (!props.loading && !props.disabled) {
    emit("click", event);
  }
};
</script>

<style scoped>
.loader {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
