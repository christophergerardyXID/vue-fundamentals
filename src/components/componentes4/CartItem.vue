<script setup>
import {computed} from "vue";

const props = defineProps(["product"]);

const productPrice = computed(() => `$${props.product.price}`);
</script>

<template>
  <div class="flex justify-between p-4 border-2 border-gray-400 rounded my-4">
    <b>{{ props.product.id }}</b>
    <h3>{{ props.product.name }}</h3>
    <i>{{ productPrice }}</i>
  </div>
</template>

<style scoped>

</style>