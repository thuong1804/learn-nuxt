<template>
  <div>
    <input :type="type" :placeholder="placeholder"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="inputAttrs" :class="[
      'bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5',
      'focus:ring-blue-500 focus:border-blue-500',
      'dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
      error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 dark:border-gray-600'
    ]"required />
    <div v-if="error" class="text-red-600 text-xs">{{ error }}!</div>
  </div>
</template>


<script setup>
const inputProp = defineProps({
  modelValue: String, // Hỗ trợ v-model
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" },
  customClass: { type: String, default: "" },
  inputAttrs: { type: Object, default: () => ({}) }
});
defineEmits(["update:modelValue"]);
</script>