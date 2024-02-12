<script setup>
// DIRECTIVA V-FOR
/**
 * En Vue js y en cuando trabajamos en el frontend muchas veces trabajamos con arreglos ya sean simples o de objetos
 * la directiva v-for nos permite iterar sobre un array y renderizar dinámicamente contenido sobre el DOM
 *
 * Esta directiva nos permite repetir con base a un array fragmentos de código html o componentes (lo veremos más adelante)
 *
 * Podemos ver a la directiva v-for como un bucle for de cualquier lenguaje de programación el cual recorre cada elemento
 * de un array y ejecuta el código correspondiente que en este caso son los fragmentos de código html
 *
 * La sintaxis de la directiva v-for es algo diferente a las que hemos visto con anterioridad pero nada demasiado complejo
 *
 * Sintaxis:
 *
 * v-for="(item, index) in array"
 *
 * donde
 * Item es el elemento actual sobre el que se está iterando
 * Index este es opcional, pero representa el índice o el número de iteración actual (empieza desde 0)
 * Array es la colección o arreglo el cual se va a iterar
 *
 * Nota por cuestiones de performance muchas veces se agrega el atributo key cuando se usa un v-for,
 * ya que internamente Vue usa este atributo para gestionar los elementos del DOM
 */

const fruits = ["Banana", "Uva", "Manzana", "Pera", "Sandia"];

const animals = [
  {
    name: 'Mono',
    status: 'Libre',
    age: 12,
  },
  {
    name: 'Perro',
    status: 'Capturado',
    age: 3,
  },
  {
    name: 'Gato',
    status: 'Libre',
    age: 1,
  }
];
</script>

<template>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }}
    </li>
  </ul>

  <table border="1">
    <thead>
    <tr>
      <th>Nombre</th>
      <th>Estatus</th>
      <th>Edad</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(animal, index) of animals" :key="index">
      <td>
        {{ animal.name }}
      </td>

      <td>
        {{ animal.status }}
      </td>

      <td>
        {{ animal.age }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style>

</style>
