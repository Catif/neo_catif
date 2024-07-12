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
  emptyLeft: {
    type: Number,
    default: 0,
  },
  emptyRight: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <CardGridEmpty v-if="emptyLeft" :col="emptyLeft" :row="row" />

  <div
    class="bg-card p-5 pixel-corners"
    :style="[
      `grid-column: span ${col} / span ${col}`,
      `grid-row: span ${row} / span ${row}`,
    ]"
  >
    <slot />
  </div>

  <CardGridEmpty v-if="emptyRight" :col="emptyRight" :row="row" />
</template>

<style scoped></style>
