<script setup>
const props = defineProps({
  col: {
    type: Number,
    default: 1,
  },
  row: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <div
    :style="[
      `grid-column: span ${col} / span ${col}`,
      `grid-row: span ${row} / span ${row}`,
    ]"
  >
    <slot />
  </div>
</template>

<style scoped></style>
