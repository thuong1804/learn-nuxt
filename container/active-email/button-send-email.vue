<template>
  <button :disabled="isCountingRef" class="flex justify-center items-center font-medium text-[13px] border px-4 py-2 rounded-[5px] cursor-pointer 
          transition-all duration-300 ease-in-out
         border-gray-400 text-gray-700 hover:border-amber-800 hover:text-amber-800
         disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed"
    @click="onClickButtonResendLink">
    {{ isCountingRef === true ? `Resend in ${timeLeftRef}s` : 'Resend link' }}
  </button>
</template>


<script setup>

const timeLeftRef = ref(60)
const isCountingRef = ref(false)

onMounted(() => {
  const savedTimeLeft = localStorage.getItem('timeLeft');
  const savedIsCounting = localStorage.getItem('isCounting');

  if (savedTimeLeft && savedIsCounting === 'true') {
    timeLeftRef.value = Number(savedTimeLeft);
    isCountingRef.value = true;
    handleTimeLeft();
  }
});

const handleTimeLeft = () => {
  let timer;
  if (isCountingRef.value && timeLeftRef.value > 0) {
    timer = setInterval(() => {
      if (timeLeftRef.value > 0) {
        timeLeftRef.value = timeLeftRef.value - 1;
        localStorage.setItem('timeLeft', timeLeftRef.value);
        localStorage.setItem('isCounting', isCountingRef.value.toString());
      } else {
        clearInterval(timer);
        isCountingRef.value = false;
        localStorage.setItem('timeLeft', 60);
        localStorage.setItem('isCounting', 'false');
      }
    }, 1000);
  }

  return () => clearInterval(timer);
};

const onClickButtonResendLink = () => {
  if (!isCountingRef.value) {
    isCountingRef.value = true;
    timeLeftRef.value = 60;
    handleTimeLeft();
  }
};

</script>