<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="group/textWave">
    <span
      v-for="(letter, index) in text"
      :key="letter"
      class="bottom-0 relative group-hover/textWave:bottom-1 transition-all duration-300"
      :style="'transition-delay: ' + index * 50 + 'ms'"
    >
      {{ letter }}
    </span>
  </span>
</template>

<style scoped></style>
