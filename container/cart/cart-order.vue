<template>
  <h4 class="font-bold text-2xl">Order Summary</h4>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between text-[20px] text-[#00000099]">
      Subtotal
      <b class="text-black">{{formatCurrency(subTotal)}}</b>
    </div>
    <div class="flex justify-between text-[20px] text-[#00000099]">
      Discount (-10%)
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
        <div >
          Discount (<b class="text-red-500">- {{ promo.value }}%</b>)
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
  <Button
    @click="handleClickStep"
    :disabled="subTotal === 0"
    class="w-full py-3 px-5 bg-[#000000] text-white rounded-[62px] flex gap-2.5 items-end justify-center" title="Go shipping">
    <Icon name="material-symbols:arrow-right-alt" class="text-[20px]" />
  </Button>
</template>

<script setup>
import { watch } from 'vue'
import Button from '~/component/button/button.vue'

const toast = useToast()
const props = defineProps({
  cart: Array,
  keyItem: Number,
  totalSubPrice: Function,
  activeStep: Number
})

const loadingButton = ref(false)
const promoCodeValue = ref([])
const deliveryRef = ref(0)
const subTotal = ref(0)
const codeRef = ref('')
const codeRegex = /^[a-zA-Z0-9]+$/

const emit = defineEmits(['update:activeStep', 'update:totalOrder']);

const handleClickStep =() => {
  emit('update:activeStep', 1);
}

onMounted(() => {
  subTotal.value = props.totalSubPrice()
})

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
  if (!codeRegex.test(promoCode)) {
    toast.add({
      title: 'An Error Has Occurred',
      description: 'Promo code does not exist!',
      color: 'error',
    })
    codeRef.value = ''
    return;
  }

  const mappingItemPromo = itemPromoCode.map(item => item.title)

  if (!mappingItemPromo.includes(promoCode)) {
    const initRandom = [10, 15, 20, 25, 30];
    const randomNumber = initRandom[Math.floor(Math.random() * initRandom.length)]

    itemPromoCode.push({ title: promoCode, value: randomNumber })

    toast.add({
      title: 'Add Promo Code',
      description: 'Add Promo Code Success!',
      color: 'primary',
    })
  } else {
    toast.add({
      title: 'An Error Has Occurred',
      description: 'Promo Code Already Exists!',
      color: 'error',
    })
  }
  codeRef.value = ''
  loadingButton.value = false
}

const totalDiscount = computed(() => {
  return subTotal.value * (10 / 100)
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

watch(totalOrder, (newTotalOrder) => {
  if (newTotalOrder) {
    emit('update:totalOrder', newTotalOrder)
  }
})
</script>