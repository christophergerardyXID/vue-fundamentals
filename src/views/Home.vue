<script setup>
import SuperBtn from "@/components/componentes2/SuperBtn.vue";
import SuperInput from "@/components/componentes2/SuperInput.vue";

</script>

<template>
  <img
      src="https://placehold.co/600x400"
      alt="img placeholder"
      class="w-full"
  >

  <h1 class="my-4 text-3xl">
    Lorem Ipsum - Home
  </h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem corporis cumque dicta ipsa molestias
    nisi ratione repellat veniam! Ad, facere facilis laborum natus nobis qui quidem quo quod sit!
  </p>

  <h2 class="mt-2 text-xl">Formulario del home</h2>

  <super-input placeholder="Nombre"/>
  <super-input placeholder="Apellidos"/>
  <super-input placeholder="Correo"/>

  <super-btn class="mt-3">
    Enviar
  </super-btn>
</template>

<style scoped>

</style>