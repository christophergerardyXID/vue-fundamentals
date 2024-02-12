<script setup>
import {reactive} from "vue";

const links = reactive(["Inicio", "Components", "Acerca de"]);
</script>

<template>
  <div class="bg-blue-700 py-4">
    <div class="container mx-auto flex justify-between">
      <span class="text-white font-bold">Crypto App</span>

      <div class="flex flex-row gap-x-8">
        <a
            v-for="(link, index) in links"
            href="/"
            :key="index"
            class="text-white/80"
        >
          {{ link }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>