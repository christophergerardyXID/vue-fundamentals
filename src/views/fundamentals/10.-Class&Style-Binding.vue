<script setup>
// Class Binding y Style Binding
/**
 * Ya conocemos lo que es en general el binding y lo hemos visto con elementos y atributos de HTML, pero que pasa con el CSS
 * también este puede hacer binding de clases y estilos en línea esto con el fin de que queremos hacer alguna animación,
 * efecto o mostrar algún estado con CSS para ello haremos uso de la función reactive
 *
 * CLASS BINDING
 * ¿Cómo funciona y que es el class binding?
 * Es una forma en la que tiene vue de agregar clases a un elemento HTML de forma dinamica muy similar a como trabajamos antes
 * con jquery o javascript vanilla donde accedimos a un elemento y cambiábamos sus atributos o agregaba mos clases con base en
 * una acción o condición el class binding tiene el mismo propósito solo que lo hará solo sobre las clases
 *
 * ¿Cómo hacer class binding?
 * Primero debemos de tener la clase definida dentro de nuestro style o en algún archivo externo por ejemplo
 * <style>
 *   .bg-red {
 *     background-color: red;
 *   }
 * </style>
 *
 * Posteriormente, vamos a crear un objeto reactivo con el nombre de la clase como nombre de la propiedad y como valor
 * algún condicional o expresión que nos dé verdadero o falso donde si da verdadero la clase se va a aplicar caso contrario
 * la clase no lo hará
 *
 * const myDivClass = reactive({
 *   'bg-red': 2 => 4
 * })
 *
 * Una vez tengamos esto ahora solo debemos de hacer el binding con la propiedad class del elemento html que queremos usar
 * <div :class="myDivClass">HOLA MUNDO</div>
 *
 * Si la expresión es verdadera esto se obtendría del dom
 * <div class="bg-red">HOLA MUNDO</div>
 *
 * caso contrarió obtendremos esto
 * <div class="">HOLA MUNDO</div>
 *
 * NOTA IMPORTANTE podemos hacer class binding sin la necesidad de crear un objeto reactivé basta con crear un objeto con
 * la misma sintaxis dentro del atributo class de html
 *
 * <div :class="{ 'bg-red': 2 => 4 }">HOLA MUNDO</div>
 *
 * hacer class binding de esta forma no está mal, pero normalmente lo usamos en casos especiales, ya que no es tan limpio
 * como tener un objeto aparte que se encargue de hacer eso
 *
 *
 *
 *
 *
 *
 * Style binding
 * Funciona muy similar que el class binding con la diferencia de que aquí no trabajamos con clases, sino con estilos en línea
 * donde usa la misma sintaxis de objeto con la diferencia de que en la propiedad va el nombre de la propiedad CSS y en el valor
 * la medida, regla o función de css que queremos aplicar por ejemplo supongamos que tenemos esto
 *
 * const myDivClass = reactive({
 *   'background-color': red
 * })
 *
 * podemos ver que tenemos la propiedad background color como propiedad y red como valor y para aplicarlo en un elemento HTML
 * es muy similar al class binding
 *
 * <div :style="myDivClass">Hola mundo</div>
 *
 * donde al renderizar este elemento en el DOM tendremos algo asi
 *
 * <div :style="background-color: red">Hola mundo</div>
 */

import {reactive, ref} from "vue";

const isInputDisabled = ref(true);

const enableEdition = () => isInputDisabled.value = false;

const disableEdition = () => isInputDisabled.value = true;

const inputClass = reactive({
  'input-disabled': isInputDisabled
});

const divHeight = ref('0px');
const divWidth = ref('0px');

const styleDiv = reactive({
  height: divHeight,
  width: divWidth,
});

const todos = reactive([
  {
    title: 'Lavar los platos',
    done: false,
  },
  {
    title: 'Pasear al perro',
    done: false,
  },
  {
    title: 'Estudiar Vue',
    done: true
  }
]);
</script>

<template>
  <h1 class="text-2xl pb-2">
    Class binding
  </h1>

  <hr class="py-2">

  <input
      type="text"
      :class="inputClass"
  >

  <button @click="enableEdition" v-if="isInputDisabled">
    Activar edición
  </button>

  <button @click="disableEdition" v-else>
    Desactivar edición
  </button>

  <h1 class="text-2xl pt-4 pb-2">Style binding</h1>

  <hr class="py-2">

  <input type="text" placeholder="Alto(px)" class="block" v-model="divHeight">
  <input type="text" placeholder="Ancho(px)" v-model="divWidth">

  <div :style="styleDiv" class="bg-green-500"></div>


  <h1 class="text-2xl pt-4 pb-2 pl-4">Todo's</h1>

  <hr class="pt-2">

  <div
      v-for="(todo, index) in todos"
      :key="index"
  >
    <div class="py-2 px-4 flex justify-between">
      <h2 :class="{ 'line-through': todo.done }">
        {{ todo.title }}
      </h2>

      <input
          type="checkbox"
          v-model="todo.done"
      >
    </div>

    <hr class="py-3">
  </div>
</template>

<style>
input {
  border: solid 1px red;
}

.input-disabled {
  pointer-events: none;
}
</style>