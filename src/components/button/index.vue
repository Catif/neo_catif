<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    class="flex items-center justify-center p-4 bg-card text-white pixel-corners transform transition group/textWave"
  >
    <TextWave :text="label" />
  </button>
</template>

<style scoped></style>
