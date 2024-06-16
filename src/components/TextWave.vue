<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  alreadyGrouped: {
    type: Boolean,
    default: false
  }
})


</script>





<template>
  <span v-if="!alreadyGrouped" class="group">
    <span
      v-for="(letter, index) in text"
      :key="letter"
      class="bottom-0 relative group-hover:bottom-1 transition-all duration-300 "
      :style="'transition-delay: ' + (index * 50) + 'ms'"
    >
      {{ letter }}
    </span>
  </span>
  <template v-else>
    <span
      v-for="(letter, index) in text"
      :key="letter"
      class="bottom-0 relative group-hover:bottom-1 transition-all duration-300 "
      :style="'transition-delay: ' + (index * 50) + 'ms'"
    >
      {{ letter }}
    </span>
  </template>
</template>





<style scoped></style>
