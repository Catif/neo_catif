<script setup>
import Link from '@/components/Link.vue';
</script>

<template>
  <section class="mt-12 container mx-auto flex items-center flex-col gap-6">
    <h1 class="text-4xl">
      Welcome to my neo page
    </h1>

    <p class="text-paragraph">
      To see my real portfolio, 
      <Link to="https://catif.dev" text="click here" />
    </p>
  </section>
</template>
