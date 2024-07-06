<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const timeToAnimate = 200; // in ms
const timeByLetter = computed(() =>
  Math.floor(timeToAnimate / props.text.length)
);
</script>

<template>
  <span class="group/textWave">
    <span
      v-for="(letter, index) in text"
      :key="letter"
      class="bottom-0 relative group-hover/textWave:bottom-1.5 transition-all duration-300"
      :style="'transition-delay: ' + index * timeByLetter + 'ms'"
    >
      {{ letter }}
    </span>
  </span>
</template>

<style scoped></style>
