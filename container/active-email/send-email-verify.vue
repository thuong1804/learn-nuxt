<template>
  <div class="w-full flex items-center justify-center h-full mt-[20px] pb-[150px]">
    <div
      class="flex flex-col max-w-[600px] w-full gap-7 py-8 px-6 rounded-[20px] border-[#00000066] shadow-2xl bg-[#f4f9ff]">
      <h1 class="text-[30px] font-bold text-center">Thank you!</h1>
      <h1 class="text-[25px] font-bold text-center">Please check your email box</h1>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
      <div class="w-full flex justify-center font-medium text-[13px] ">A confirmation link has been sent to your
        email. To log in, check your inbox.</div>
      <div class="w-full flex justify-center">
        <ButtonSendEmail/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonSendEmail from './button-send-email.vue';
</script>