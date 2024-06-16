<script setup>
import TextWave from './TextWave.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})


</script>





<template>
  <RouterLink 
    v-for="item in items" 
    :key="item.title" 
    :to="item.url"
    class="
      flex items-center justify-center p-4 bg-card text-text pixel-corners
      group
    "
  >
    <TextWave 
      :text="item.title"
      :alreadyGrouped="true" 
    />
  </RouterLink>
</template>





<style scoped></style>
