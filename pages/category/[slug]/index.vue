<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
      <div class="flex gap-5">
        <div class="w-1/3 border rounded-[20px] py-[20px] px-[24px]">
          <div class="flex justify-between items-center pb-6">
            <div class="text-black text-xl font-bold ">Filters</div>
            <Icon name="mage:filter" style="color: #000000" class="text-[20px]" />
          </div>
          <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
          <div class="flex flex-col gap-5 pt-6">
            <div class="flex justify-between items-center">
              <div class="text-black/60 text-base font-normal">T-shirts</div>
              <Icon name="material-symbols:arrow-forward" style="color: #000000" class="text-[20px]" />
            </div>
            <div class="flex justify-between items-center">
              <div class="text-black/60 text-base font-normal">T-shirts</div>
              <Icon name="material-symbols:arrow-forward" style="color: #000000" class="text-[20px]" />
            </div>
            <div class="flex justify-between items-center">
              <div class="text-black/60 text-base font-normal">T-shirts</div>
              <Icon name="material-symbols:arrow-forward" style="color: #000000" class="text-[20px]" />
            </div>
            <div class="flex justify-between items-center">
              <div class="text-black/60 text-base font-normal">T-shirts</div>
              <Icon name="material-symbols:arrow-forward" style="color: #000000" class="text-[20px]" />
            </div>
            <div class="flex justify-between items-center">
              <div class="text-black/60 text-base font-normal">T-shirts</div>
              <Icon name="material-symbols:arrow-forward" style="color: #000000" class="text-[20px]" />
            </div>
          </div>
        </div>
        <div class="flex-1">
          Casual
        </div>
      </div>
    </div>
  </div>
</template>