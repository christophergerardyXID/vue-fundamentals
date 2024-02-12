<script setup>

</script>

<template>
  <div class="w-full">
    <slot name="header"></slot>
  </div>

  <div class="container mx-auto">
    <slot name="content"></slot>
  </div>

  <div>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>

</style>