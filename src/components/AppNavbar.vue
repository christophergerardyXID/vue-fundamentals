<script setup>

</script>

<template>
  <div class="bg-purple-700 w-full py-2">
    <div class="container mx-auto flex justify-between">
      <h2 class="text-2xl text-white">App de rutas</h2>

      <div class="flex gap-x-8 items-center">
        <router-link to="/" class="text-white">
          Inicio
        </router-link>

        <router-link to="/contact" class="text-white">
          Contacto
        </router-link>

        <router-link to="/about" class="text-white">
          Acerca de
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>