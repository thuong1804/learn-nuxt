<template>
  <div
    class="z-40 t- absolute w-full max-w-96 md:max-w-[78rem] bg-black flex items-center justify-between px-16 py-9 rounded-[20px] transform left-1/2 -translate-x-1/2  -translate-y-1/2 ">
    <div class="text-white font-bold text-[40px] w-1/2">
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </div>
    <div class="flex flex-col gap-3.5">
      <div class="relative w-[349px]">
        <Icon name="material-symbols-light:mail"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[20px] text-black/60" />
        <input type="email" placeholder="Enter your email address"
          class="w-full pl-12 pr-4 py-3 bg-[#F0F0F0] rounded-[62px] text-black/40 text-base font-normal  focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div
        class="w-[349px] px-4 py-3 bg-white rounded-[62px] inline-flex justify-center items-center gap-3 overflow-hidden">
        <div class="justify-start text-black text-base font-medium ">Subscribe to Newsletter</div>
      </div>
    </div>
  </div>
</template>