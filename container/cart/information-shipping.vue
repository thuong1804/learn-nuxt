<template>
  <h4 class="font-bold text-2xl">Checkout</h4>
  <div class="flex gap-5 mt-4 h-max">
    <div class="flex flex-col gap-4 px-4 flex-1 border rounded-[20px] py-5 border-[#0000001A]">
      <div class="max-h-max overflow-y-auto w-full">
        <UTooltip text="Return your cart">
          <Icon name="streamline:computer-keyboard-return-2-keyboard-arrow-return-enter" style="color: gray"
          class="text-[20px] cursor-pointer hover:bg-gray-700" @click="handleClickStep" />
        </UTooltip>
        <h1 class="text-center font-bold text-4xl pb-5">Express checkout</h1>
        <div class="bg-gray-200 rounded-[5px] p-5">
          <div class="flex gap-1.5 justify-around items-center">
            <div v-for="item in itemsPayment">
              <UTooltip text="Feature in Development">
                <Icon :name="item.src" class="text-[30px] cursor-pointer" @click="navigateTo('/cart')" />
              </UTooltip>
            </div>
          </div>
        </div>
        <div class="mt-10 pb-4 relative">
          <Divider />
          <span
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xl text-gray-500">OR</span>
        </div>
        <h1 class="font-bold text-[20px] pb-2">Contact Information</h1>
        <UForm class="space-y-4 w-full " :schema="schema" :state="state" @submit="onSubmit">
          <UFormField name="email" required label="Email">
            <UInput class="w-full" v-model="state.email" placeholder="Email" size="xl" />
          </UFormField>
          <h1 class="font-bold text-[20px]">Shipping address</h1>
          <div class="flex w-full gap-4 ">
            <div class="w-full">
              <UFormField name="firstName" required label="First name">
                <UInput class="w-full" v-model="state.firstName" placeholder="First name" size="xl" />
              </UFormField>
            </div>
            <div class="w-full">
              <UFormField name="lastName" required label="Last name">
                <UInput class="w-full" placeholder="Last name" size="xl" v-model="state.lastName" />
              </UFormField>
            </div>
          </div>
          <div class="flex w-full gap-4 ">
            <div class="w-full">
              <UFormField name="country" required label="Country">
                <USelect :items="data.map(item => item.country)" size="xl" class="w-full" v-model="state.country"
                  placeholder="Select country" />
              </UFormField>
            </div>
            <div class="w-full">
              <UFormField name="city" required label="City">
                <USelect :items="dataCity" class="w-full" size="xl" :disabled="!state.country" placeholder="Select city"
                  v-model="state.city" />
              </UFormField>
            </div>
          </div>
          <UFormField name="address" required label="Address">
            <UInput class="w-full " placeholder="Address" size="xl" :disabled="!state.city" v-model="state.address" />
          </UFormField>
          <UFormField name="apartment" label="Apartment">
            <UInput class="w-full" placeholder="Apartment" size="xl" v-model="state.apartment" />
          </UFormField>
          <UFormField name="phone" required label="Phone number">
            <UButtonGroup class="w-full">
              <USelectMenu v-model="valueNumberPhone" :items="mappingPhoneCode" class="w-1/3" size="xl"
                placeholder="Select country code">
                <template #leading="{ modelValue, ui }">
                  <UAvatar v-if="modelValue" v-bind="modelValue.avatar" :size="(ui.leadingAvatarSize())"
                    :class="ui.leadingAvatar()" />
                </template>
              </USelectMenu>
              <UInput placeholder="Phone number..." class="w-full" size="xl" :disabled="!valueNumberPhone"
                v-model="state.phone" />
            </UButtonGroup>
          </UFormField>
          <div class="flex items-center justify-end mt-5">
            <Button type="submit" class="cursor-pointer p-4">Go Checkout</Button>
          </div>
        </UForm>
      </div>
    </div>
    <div class="w-[40%] border rounded-[20px] py-5 px-6 border-[#0000001A] flex flex-col gap-5 h-auto">
      <div class="flex justify-between items-center">
        <div class="text-3xl font-bold">{{ cartStore.totalCart() }} ITEM</div>
        <NuxtLink to="/sale" class=" font-bold flex gap-2 items-center hover:text-gray-600">Go shopping <Icon name="material-symbols:shopping-cart-outline" style="color: gray" class="text-[20px]" /> </NuxtLink>
      </div>
      <div class="max-h-[700px] overflow-y-auto flex flex-col">
        <CartItem v-for="(cart, key) in cartStore.cart" :item="cart" />
      </div>
      <div class="flex justify-between font-bold text-2xl mt-auto">
        <div>
          TOTAL TO PAY:
        </div>
        <div>
          {{ formatCurrency(totalPrice) }}
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { navigateTo } from 'nuxt/app';
import { computed, onMounted, ref } from 'vue';
import Divider from '~/component/divider/divider.vue';
import CartItem from '~/container/cart/cart-item.vue';
import { phoneCode } from '../../constants/phone-code';
import Button from '@nuxt/ui/runtime/components/Button.vue';
import { number, object, string } from 'yup';
import { formatCurrency } from '../../utils';

const cartStore = useCartStore()
const data = ref([])
const valueNumberPhone = ref('')
const toast = useToast()

const mappingPhoneCode = phoneCode.map(item => {
  return ({
    label: `${item.name} (${item.dialCodes?.[0]})`,
    value: item.code,
    avatar: {
      src: item.image
    }
  })
})

const schema = object({
  email: string().email('Invalid email').required('Email required'),
  firstName: string().required('First name required'),
  lastName: string().required('Last name required'),
  country: string().required('Country required'),
  city: string().required('City required'),
  address: string().required('Address required'),
  phone: number().required('Phone number required'),
})

const state = reactive({
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  country: undefined,
  city: undefined,
  address: undefined,
  phone: undefined,
})

const dataCity = computed(() => {
  if (state.country) {
    console.log(state)
    const valueCity = data.value.filter(item => item.country === state.country).map(value => value.cities)
    return valueCity
  }
})

const itemsPayment = [
  {
    src: "logos:visa"
  },
  {
    src: "logos:mastercard"
  },
  {
    src: "logos:apple-pay"
  },
  {
    src: "logos:paypal"
  },
]

async function onSubmit(event) {
  console.log(event)
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}

onMounted(async () => {
  try {
    const fetchData = await $fetch('https://countriesnow.space/api/v0.1/countries', {
      method: 'GET',
    });
    data.value = fetchData.data
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
});

const emit = defineEmits(['update:activeStep']);

const handleClickStep =() => {
  emit('update:activeStep', 0);
}

defineProps({
  activeStep: Number,
  subtotal: Number,
  totalPrice: Number,
})



</script>