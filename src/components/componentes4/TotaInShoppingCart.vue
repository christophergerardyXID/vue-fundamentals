<script setup>
import {toRefs} from "vue";
import {productsStore} from "@/store/ProductsStore.js";

const { totalToPay } = toRefs(productsStore());
</script>

<template>
  <h3 class="text-right text-2xl">
    Total a pagar: <b>${{ totalToPay }}</b>
  </h3>
</template>
