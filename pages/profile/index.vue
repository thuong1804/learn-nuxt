<template>
<Profile/>
</template>

<script setup>

useHead({
  title: 'profile' ,
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon-shop.png' }
  ]
})

import Profile from '~/container/profile/profile.vue';
</script>