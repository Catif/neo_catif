<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="to" class="group">
    <TextWave :text="text" :alreadyGrouped="true" />
  </RouterLink>
</template>

<style scoped></style>
