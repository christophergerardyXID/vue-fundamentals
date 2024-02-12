<script setup>
// V-MODEL
import {reactive, ref} from "vue";

/**
 * Ahora que ya entendemos como funciona el concepto de data binding vamos a ponerlo en práctica más a profundidad con
 * una de las directivas más poderosas de vue la cual nos hace el poder controlar las entradas de usuario o trabajar con formularios
 * de una forma muy sencilla darle poder al HTML o controles de HTML de capturar datos del usuario y modificar el estado o valor
 * de nuestras referencias reactivas.
 *
 * v-model
 * Esta directiva está pensada principalmente para trabajar con formularios o controles de HTML que permitan la entrada de datos
 * del usuario por ejemplo un input, un textarea o un select la idea es poder de alguna forma enlazar lo que tiene el input con
 * lo que está dentro de la sección script con alguna referencia reactiva
 *
 * Cuando usamos v-model seguiremos una sintaxis bastante simple donde comenzamos primero escribiendo v-model
 * un signo de igual junto con unas comillas dobles v-model=""
 * y dentro de dichas comillas el nombre de la variable reactiva la cual queremos enlazar y esta cambie conforme
 * los valores dentro del input cambien.
 *
 * const variableDeEnlace = ref('');
 *
 * <input v-model="variableDeEnlace" />
 */

const name = ref('');

const attrs = reactive({
  age: '',
  avatar: '',
})

const pizzas = reactive([]);

const pizzaData = reactive({
  name: '',
  available: false,
  ingredients: [],
});

const addIngredient = () => pizzaData.ingredients.push('');

const emptyPizzaData = () => {
  pizzaData.name = '';
  pizzaData.available = false;
  pizzaData.ingredients = [];
}

const addPizzaToList = () => {
  pizzas.push({ ...pizzaData });
  emptyPizzaData();
};

const order = (pizzaName) => alert(`Has ordenado ${pizzaName} llegaremos en 30 minutos`)
</script>

<template>
  <input
      type="text"
      v-model="name"
      placeholder="nombre"
  >

  <input
      type="text"
      v-model="attrs.age"
      placeholder="edad"
  >

  <input
      type="text"
      v-model="attrs.avatar"
      placeholder="avatar"
  >

  <div>
    <h1>Hola mi nombre es: {{ name }}</h1>

    <h2>Atributos</h2>

    <p>Edad: {{ attrs.age }}</p>

    <img :src="attrs.avatar"/>
  </div>

  <hr>

  <div class="pizza-container">
    <div class="pizza-form">
      <h1>Pizzeria Christopher's</h1>

      <label>
        Nombre de la pizza

        <input
            type="text"
            v-model="pizzaData.name"
        >
      </label>

      <label>
        Disponibilidad

        <input
            type="checkbox"
            v-model="pizzaData.available"
        >
      </label>

      <input
          v-for="(_, index) of pizzaData.ingredients"
          type="text"
          v-model="pizzaData.ingredients[index]"
      >

      <button @click="addIngredient">
        Agregar ingrediente
      </button>

      <button @click="addPizzaToList">
        Agregar pizza al menu
      </button>
    </div>

    <div>
      <h1>Pizzas disponibles</h1>

      <div v-for="(pizza, index) in pizzas" :key="index">
        <h2>{{ pizza.name }}</h2>
        <hr>

        <ul>
          <li v-for="(ingredient, i) in pizza.ingredients" :key="i">
            {{ ingredient }}
          </li>
        </ul>

        <div v-if="pizza.available">
          <button @click="order(pizza.name)">Ordenar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pizza-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pizza-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

</style>