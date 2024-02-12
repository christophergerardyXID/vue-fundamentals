<script setup>
// DIRECTIVA V-SHOW
/**
 * Esta directiva tiene un uso un parecido a v-if, ya que esta también nos ayuda a mostrar y OCULTAR elementos y ojo
 * que aquí está la gran diferencia con v-if, porque v-if lo que hace es que no oculta el elemento, sino que lo remueve
 * totalmente del DOM mientras que, por otro lado, v-show lo que haces es ocultarlo agregando la propiedad display none
 * al elemento para dar una sensación de que este ya no está
 *
 * v-show no puede manejar multiples condiciones como v-if
 *
 * la sintaxis de v-show es la siguiente: v-show="condición"
 */

const age = 17;
</script>

<template>
  <div v-if="age >= 18">
    Eres mayor de edad (v-if)
  </div>

  <div v-show="age >= 18">
    Eres mayor de edad (v-show)
  </div>
</template>

<style>

</style>
