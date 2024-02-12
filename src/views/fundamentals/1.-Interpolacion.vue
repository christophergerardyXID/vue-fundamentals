<script setup>
// https://codepen.io/nrupuld/pen/pXbOee
// NO LO HAGAN SOLO OBSERVEN
let nombre = 'Christopher Gerardy';

// LA FORMA TRADICIONAL DE HACER LAS COSAS, ACCEDER POR ID Y MODIFICAR LA DATA DEL DOM
// const elementP = document.getElementById('nombre_alumno');
// elementP.innerText = nombre;
// ESTE CODE NO FUNCIONA Y COMO HACERLO A LA MANERA DE VUE

// La variable del nombre no es reactiva
setTimeout(() => {
  nombre = 'Mario Perez';
  // Comprobemos
  console.log('Ahora es', nombre);
}, 2000);
/**
 * Vue tiene su concepto de interpolacion como vimos para poder agregar o insertar el valor de una variable dentro de
 * la seccion del template vamos a usar los dobles corchetes pero como es que exactamente esto funciona
 * Vue por debajo va a tomar el contenido que se tiene dentro del script y si encuentra alguna referencia a dicho valor
 * por ejemplo el nombre de la variable va a remplazar en el html esa referencia a la variable por el valor dentro del
 * script
 *
 * En el caso de que no encuentre dicho valor dentro del script ejecutara el codigo JS que se encuentre dentro en su lugar
 */
</script>

<template>
  <h1>Bienvenidos al curso de Vuejs</h1>
  <!--FORMA MODERNA CON VUE-->
  <p>Alumno estrella: {{ nombre }} </p>

  <!--DENTRO DE LAS DOS LLAVES PODEMOS INCLUIR CODE JS-->
  <p>
    {{ [1,2,3,4].reverse() }}
  </p>
</template>

<style>
body {
  background: red;
}
</style>
