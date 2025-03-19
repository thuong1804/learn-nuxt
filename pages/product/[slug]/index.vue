<template>
  <div class="flex flex-col items-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <!-- <Breadcrumb /> -->
    </div>
    <DetailProduct :item="data"/>
    <TabsDetailProduct />
    <YouMightAlsoLike />
  </div>
</template>

<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import DetailProduct from '~/component/product/detail-product.vue';
import TabsDetailProduct from '~/component/product/tabs-detail-product.vue';
import YouMightAlsoLike from '~/component/product/you-might-also-like.vue';
const router = useRouter()

const data = ref([])

onMounted(async () => {
  const idParams = router.currentRoute.value.params.slug
  const idMatch = idParams.match(/-p-(\d+)$/)
  const productId = idMatch[1]
  const response = await $fetch(`https://fakestoreapi.in/api/products/${productId}`, {
    method: 'GET',
  })
  data.value = response.product
  console.log(data.value)
})

</script>