<script setup>

import {reactive} from "vue";

const props = defineProps({
  text: String,
  color: {
    type: String,
    default: 'green',
  }
});

const colorStyle = reactive({
  backgroundColor: props.color,
})
</script>

<template>
  <button
      class="py-2 px-4 text-white rounded w-full"
      :style="colorStyle"
  >
    {{ props.text }}
  </button>
</template>

<style scoped>

</style>