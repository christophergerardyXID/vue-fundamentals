<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated, ref
} from "vue";

onBeforeMount(() => {
  console.log('Before Mount');
})

onMounted(() => {
  console.log('Mounted')
});

onBeforeUpdate(() => {
  console.log('Before update');
});

onUpdated(() => {
  console.log('Updated')
});

onBeforeUnmount(() => {
  console.log('Before unmount');
})

onUnmounted(() => {
  console.log('Unmounted')
})

const title = ref('');
</script>

<template>
  <h1>{{ title }}</h1>

  <input
      type="text"
      v-model="title"
      class="px-6 py-2 block border-2 border-gray-400 rounded"
  >
</template>