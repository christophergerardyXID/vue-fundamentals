<script setup>
const props = defineProps(["title", "description", "image"]);
</script>

<template>
  <div class="grid grid-cols-12 gap-x-4 mb-8">
    <img
        class="col-start-1 col-end-4 w-full h-[100px]"
        :src="props.image"
        alt
    />

    <div class="col-start-4 col-end-13">
      <h2 class="font-bold text-2xl">{{ props.title }}</h2>
      <p class="text-gray-700 text-sm">{{ props.description }}</p>
      <a :href="props.image" class="text-violet-500">Leer mas</a>
    </div>
  </div>
</template>

<style scoped>

</style>