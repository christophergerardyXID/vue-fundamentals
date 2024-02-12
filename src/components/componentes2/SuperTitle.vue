<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <h1 class="text-2xl text-red-400">{{ props.title }}</h1>
</template>
