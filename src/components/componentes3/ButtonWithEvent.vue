<script setup>
const emit = defineEmits(["click", "goOut"]);

const handler = (event) => {
  emit('click', event);
}

const goOut = () => emit("goOut");
</script>

<template>
  <button @click="handler">
    Presioname
  </button>

  <br>

  <button @click="goOut">
    Salir
  </button>
</template>

<style scoped>

</style>