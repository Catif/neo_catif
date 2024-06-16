<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <article class="min-h-full w-full">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
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