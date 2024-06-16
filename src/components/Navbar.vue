<script setup>
import logo from '@/assets/pictures/logo.png'
import NavItems from './NavItems.vue';

const leftItems = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Projects',
    url: '/projects'
  },
]

const rightItems = [
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'About',
    url: '/about'
  },
]
</script>





<template>
  <nav class="flex justify-center items-center gap-12 mt-12">
    <NavItems :items="leftItems" />

    <RouterLink
      to="/"
      class="flex items-center justify-center"
    >
      <img :src="logo" alt="logo" class="w-24" />
    </RouterLink>

    <NavItems :items="rightItems" />
  </nav>
</template>





<style scoped>
img {
  image-rendering: pixelated;
}
</style>
