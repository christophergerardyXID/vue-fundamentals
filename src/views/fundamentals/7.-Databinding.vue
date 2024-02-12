<script setup>
// DATA BINDING
import {reactive, ref} from "vue";

/**
 * DATA BINDING
 * Es un proceso mediante el cual conectamos nuestro UI el script hasta ahora hemos visto algunos temas como
 * mostrar elementos o variables del script en él, témplate con la interpolación
 * render condicional con v-if y v-show
 * bucles con v-for
 * eventos con v-on o @evento
 * como funciona o hacer variables o elementos reactivos con ref y reactive
 *
 * pero aún no hemos visto como conectar la UI o los elementos HTML de forma que los podamos controlar mediante el script
 * y que los elementos html de cierta forma también controlen elementos del script a este concepto se le conoce como data binding
 *
 * ya que lo que estamos haciendo es enlazar los datos que se encuentran en el script ala vista o controles de HTML para que estos
 * puedan cambiar o reaccionar a dichos datos asi como también el modificarlos
 *
 * Para lograr un enlace de datos entre el script y el HTML vue nos da una directiva especial llamada v-bind donde recibe como
 * argumento el nombre o referencia de la variable que queremos enlazar por ejemplo
 *
 * supongamos que tenemos una variable con el valor de una URL dentro de nuestro script
 *
 * const url = 'https://christophergerardy.com';
 *
 * esta url la queremos enlazar a la propiedad href de un elemento <a href="">
 *
 * para lograr dicho enlace haremos uso de una directiva llamada v-bind la cual precisamente funciona como un puente de comunicación
 * entre el script el UI
 *
 * la sintaxis de esta directiva es la siguiente
 *
 * v-bind:propiedad-html-a-enlazar="variableDentroDelScript"
 *
 * sabiendo la forma de en este caso hacer el enlace de una variable del script a un elemento HTML para resolver lo anterior hariamos esto
 *
 * <a v-bind:href="url">El mejor sitio web</>a>
 *
 * si bien esta sintaxis no es muy complicada asi como vimos que v-on tiene su forma corta también lo tiene v-bind donde en lugar de escribir
 * toda la sentencia v-bind para poder hacer este atajo bastara con agregar 2 puntos delante de la propiedad que queremos enlazar por ejemplo
 * el caso anterior quedara de la siguiente forma
 *
 * <a :href="url">El mejor sitio web</>a>
 *
 * Donde ahora es más fácil de leer, más corto y se siente más natural al momento de escribir código
 */

const url = 'https://christophergerardy.com';

const bigBirdAlt = ref('Es una foto de big bird');
const bigBirdUrl = ref('https://cdn.milenio.com/uploads/media/2021/11/06/big-bird-se-vacuno-contra.jpg');

const changeAlt = () => {
  bigBirdAlt.value = 'Big Bird es mejor que abelardo';
}

const pokemons = reactive([
  {
    name: "bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  }
]);
</script>

<template>
  <a v-bind:href="url">El mejor sitio web</a>
  <a :href="url">El mejor sitio web</a>

  <img
      :src="bigBirdUrl"
      :alt="bigBirdAlt"
  />

  <button @click="changeAlt">
    Cambiar ALT
  </button>

  <h1>
    Listado de pokemons
  </h1>

  <hr>

  <ul>
    <li v-for="(item, index) in pokemons" :key="index">
      {{ item.name }}
      <img :src="item.image" >
    </li>
  </ul>
</template>

<style>
a {
  display: block;
  margin-bottom: 20px;
}

li {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

li img {
  max-width: 100px;
}
</style>