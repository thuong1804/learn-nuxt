<template>
  <h4 class="font-bold text-2xl">Order Summary</h4>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between text-[20px] text-[#00000099]">
      Subtotal
      <b class="text-black">{{formatCurrency(subTotal)}}</b>
    </div>
    <div class="flex justify-between text-[20px] text-[#00000099]">
      Discount (-20%)
      <b class="text-[#FF3333]">-{{ formatCurrency(totalDiscount) }}</b>
    </div>
    <div class="flex justify-between text-[20px] text-[#00000099]">
      Delivery Fee
      <b class="text-black">${{deliveryRef}}</b>
    </div>
    <div v-if="promoCodeValue.length > 0" class="flex flex-col">Promo code:
      <div v-for="promo in promoCodeValue" class="flex justify-between items-center pt-2">
        <div>
          Code: <b>{{ promo.title }}</b>
        </div>
        <div>
          Discount (<b>- {{ promo.value }}</b>%)
        </div>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
  </div>
  <div class="flex justify-between text-[20px] text-[#00000099]">
    Total
    <b class="text-black">{{ formatCurrency(totalOrder) }}</b>
  </div>
  <div class="flex gap-3">
    <div class="relative w-[349px]">
      <Icon name="mdi:tag-outline"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[20px] text-black/60" />
      <input :disabled="promoCodeValue.length >= 3" type="email" placeholder="Add promo code" v-model="codeRef" :class="['w-full pl-12 pr-4 py-3 bg-[#F0F0F0] rounded-[62px] text-black/40 text-base font-normal  focus:outline-none focus:ring-2 focus:ring-blue-500',
        promoCodeValue.length >= 3 && 'cursor-not-allowed']" />
    </div>
    <Button :loading="loadingButton" class="w-1/3 rounded-[62px]" :disabled="!codeRef || promoCodeValue.length >= 3"
      title="Apply" @click="handleApplyCode" />
  </div>
  <button class="w-full py-3 px-4 bg-[#000000] text-white rounded-[62px] flex gap-2.5 items-end justify-center">Go to
    Checkout
    <Icon name="material-symbols:arrow-right-alt" class="text-[20px]" />
  </button>
</template>

<script setup>
import Button from '~/component/button/button.vue'

const props = defineProps({
  cart: Array,
  keyItem: Number,
  totalSubPrice: Function,
})
const toast = useToast()

const loadingButton = ref(false)
const promoCodeValue = ref([])
const deliveryRef = ref(0)
const subTotal = ref(0)
const codeRef = ref('')

watch(props.totalSubPrice, (newPrice) => {
  subTotal.value = newPrice
})

const handleApplyCode = () => {
  loadingButton.value = true
  setTimeout(() => {
    loadingButton.value = false
    checkExitPromo(promoCodeValue.value, codeRef.value)
  }, 2000)
}

const checkExitPromo = (itemPromoCode, promoCode) => {
  const mappingItemPromo = itemPromoCode.map(item => item.title)

  if (!mappingItemPromo.includes(promoCode)) {
    const initRandom = [10, 15, 20, 25, 30];
    const randomNumber = initRandom[Math.floor(Math.random() * initRandom.length)]

    itemPromoCode.push({ title: promoCode, value: randomNumber })

    toast.show({
      position: 'topCenter',
      backgroundColor: "#20cd2b",
      color: 'white',
      title: 'Success!',
      message: 'Apply promo success!'
    })
  } else {
    toast.show({
      position: 'topCenter',
      backgroundColor: "red",
      color: 'white',
      title: 'Error!',
      message: 'Promo already exists!',
    })
  }
  codeRef.value = ''
  loadingButton.value = false
}

const totalDiscount = computed(() => {
  return subTotal.value * (20 / 100)
})

const totalOrder = computed(() => {
  if (promoCodeValue.value.length > 0) {
    const initSubTotal = (subTotal.value - totalDiscount.value) + deliveryRef.value
    const total = promoCodeValue.value.reduce((cur, item) => {
      return cur += item.value
    }, 0)
    const totalResult = initSubTotal * (total / 100)
    return initSubTotal - totalResult
  }
  return (subTotal.value - totalDiscount.value) + deliveryRef.value
})

watch(subTotal, (newSub) => {
  if (newSub > 0) {
    deliveryRef.value = 15
  }
})
</script>