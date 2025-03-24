<template>
  <div ref="container" class="relative inline-block w-full h-full rounded-[20px] shadow-sm p-2">
    <img
      :src="imageSrc"
      alt="Thumbnail"
      class="w-full h-full object-contain cursor-zoom-in"
      @mouseover="showZoom = true"
      @mouseleave="showZoom = false"
      @mousemove="updateZoomPosition"
    />
    <div
      v-if="showZoom"
      class="absolute top-0 ml-4 w-[800px] h-[600px] overflow-hidden border-2 border-gray-200 shadow-lg bg-white z-50 rounded-[20px]"
      :style="{ left: modalLeft + 'px' }"
    >
      <img
        :src="imageSrc"
        alt="Zoomed"
        class="absolute w-[1000px] h-auto object-contain"
        :style="{ transform: `translate(-${zoomX}px, -${zoomY}px)` }"
      />
    </div>
  </div>
</template>

<script setup>
const showZoom = ref(false);
const zoomX = ref(0);
const zoomY = ref(0);
const modalLeft = ref(320);
const container = ref(null);

const updateZoomPosition = (event) => {
  const rect = event.target.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const width = rect.width;
  const height = rect.height;

  const bigWidth = 350;
  const bigHeight = 800;

  const scaleX = bigWidth / width;
  const scaleY = bigHeight / height;

  zoomX.value = Math.max(0, Math.min(bigWidth - 300, offsetX * scaleX - 150));
  zoomY.value = Math.max(0, Math.min(bigHeight - 300, offsetY * scaleY - 150));
};

onMounted(() => {
  if (container.value) {
    const containerRect = container.value.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    if (containerRect.right + 400 > viewportWidth) {
      modalLeft.value = -420;
    }
  }
});

defineProps({
  imageSrc: {type: String, required: true}
})
</script>