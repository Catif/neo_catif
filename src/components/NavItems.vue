<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["onHover"]);
</script>

<template>
  <RouterLink
    v-for="item in items"
    :key="item.title"
    :to="item.url"
    class="flex items-center justify-center p-4 bg-card text-white pixel-corners transform transition group/textWave"
    :class="{
      'scale-125': item.isHovering,
      'scale-75 opacity-75': !item.isHovering,
    }"
    @mouseover="
      $emit('onHover', {
        item,
        isHovering: true,
      })
    "
    @mouseleave="
      $emit('onHover', {
        item,
        isHovering: false,
      })
    "
  >
    <TextWave :text="item.title" />
  </RouterLink>
</template>

<style scoped></style>
