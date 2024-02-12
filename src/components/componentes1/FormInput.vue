<script setup>
const writeInConsole = (event) => console.log(event.target.value);
</script>

<template>
  <div class="flex flex-col">
    <label class="mb-2">Ingresa un valor</label>

    <input
        class="py-2 px-4 border-2 border-gray-400 rounded-xl outline-0"
        type="text"
        placeholder="Example"
        @input="writeInConsole"
    >
  </div>
</template>
