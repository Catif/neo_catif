<script setup>
import { RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />

  <article class="min-h-full w-full">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </article>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
