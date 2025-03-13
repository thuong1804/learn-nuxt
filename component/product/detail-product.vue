<script setup>
import ImgShirt4 from "~/assets/images/shirt4.png"
import ImgShirt2 from "~/assets/images/shirt2.png"
import ImgShirt3 from "~/assets/images/shirt3.png"
import ImgShirt1 from "~/assets/images/shirt.png"
</script>

<template>
  <div class="flex max-w-96 md:max-w-[78rem] w-full items-start">
    <div class="flex flex-col gap-3.5 pr-3.5">
      <div>
        <img :src="ImgShirt1" class="w-full" />
      </div>
      <div>
        <img :src="ImgShirt2" class="w-full" />
      </div>
      <div>
        <img :src="ImgShirt3" class="w-full" />
      </div>
    </div>
    <div class="pr-10">
      <img :src="ImgShirt4" class="w-full h-[530px]" />
    </div>
    <div class="flex flex-col -mt-5 max-w-[600px]">
      <h1 class="font-bold text-[40px] uppercase">One Life Graphic T-shirt</h1>
      <div class="flex gap-[7px]">
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" />
        4.5/<span class="text-[#00000066] -ml-1">5</span>
      </div>
      <div class="font-bold text-[32px] flex items-center gap-2.5 pb-5">$120
        <div class="justify-center text-black/30 text-[32px] font-bold line-through">$300</div>
        <div
          class="px-3.5  py-1.5 w-[58px] bg-[#FF33331A] text-red-500 flex items-center justify-center rounded-2xl text-[12px]">
          -20%</div>
      </div>
      <div class="w-full justify-start text-black/60 text-base font-normal leading-snug pb-6">This graphic t-shirt which
        is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
      </div>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
      <div class="flex flex-col py-6">
        <div class=" text-black/60 text-base font-normal pb-4">Select Colors</div>
        <div class="flex gap-4">
          <div class="w-[37px] h-[37px] bg-[#31344F] rounded-full flex items-center justify-center">
            <Icon name="material-symbols:check" style="color: white" class="text-[20px]" />
          </div>
          <div class="w-[37px] h-[37px] bg-[#31344F] rounded-full flex items-center justify-center">
            <Icon name="material-symbols:check" style="color: white" class="text-[20px]" />
          </div>
          <div class="w-[37px] h-[37px] bg-[#31344F] rounded-full flex items-center justify-center">
            <Icon name="material-symbols:check" style="color: white" class="text-[20px]" />
          </div>
        </div>
      </div>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
      <div class="flex flex-col py-6">
        <div class="text-base font-normal text-[#00000066] pb-4">Choose size</div>
        <div class="flex gap-4">
          <div class="w-[86px] h-[37px] bg-[#F0F0F0] text-[#00000066] rounded-[62px] flex items-center justify-center">
            Small
          </div>
          <div class="w-[86px] h-[37px] bg-[#F0F0F0] text-[#00000066] rounded-[62px] flex items-center justify-center">
            Medium
          </div>
          <div class="w-[86px] h-[37px] bg-[#F0F0F0]  text-[#00000066] rounded-[62px] flex items-center justify-center">
            Large
          </div>
          <div class="w-[86px] h-[37px] bg-[#F0F0F0]  text-[#00000066] rounded-[62px] flex items-center justify-center">
            X-Large
          </div>
        </div>
      </div>
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
      <div class="flex gap-5 pt-6">
        <div
          class="bg-[#F0F0F0]  text-[#00000066] rounded-[62px] flex items-center justify-between w-[170px] py-3.5 px-5 ">
          <button class="flex items-center">
            <Icon name="icon-park-outline:minus" style="color: #00000066" class="text-[20px]" />
          </button>
          <button class="text-[20px] text-[#00000066] flex items-center">1</button>
          <button class="flex items-center">
            <Icon name="material-symbols:add-2" style="color: #00000066" class="text-[20px]" />
          </button>
        </div>
        <div
          class="flex-1 max-w-[400px] h-[52px] px-[54px] py-4 bg-black rounded-[62px] inline-flex justify-center items-center gap-3 overflow-hidden">
          <div class="justify-start text-white text-base font-medium">Add to Cart</div>
        </div>
      </div>
    </div>
  </div>
</template>