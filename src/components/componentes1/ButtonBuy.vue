<script setup>
const buy = () => alert('Compra en proceso...');
</script>

<template>
  <button
      class="bg-green-500 px-4 py-2 rounded-b text-white"
      @click="buy"
  >
    Comprar
  </button>
</template>
