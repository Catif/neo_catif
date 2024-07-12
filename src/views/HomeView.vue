<script setup></script>

<template>
  <section class="mt-12 container mx-auto flex items-center flex-col gap-6">
    <div class="container grid grid-cols-8 auto-rows-fr gap-10">
      <!-- Title -->
      <CardGrid :col="4" :row="1" :empty-left="2" :empty-right="2">
        <div class="flex items-center justify-center">
          <h1 class="text-4xl"> Welcome</h1>
        </div>
      </CardGrid>

      <!-- Presentation -->
      <PageHomePresentation />

      <!-- RightElement -->
      <CardGrid :col="2" :row="12"> Hi </CardGrid>
      <CardGrid :col="6" :row="4"> Hi </CardGrid>
      <CardGrid :col="6" :row="3"> Hi </CardGrid>
    </div>
  </section>
</template>
