<script setup>
// Computed Properties
import {computed, reactive, ref} from "vue";

/**
 *  Son una característica de Vue la cual nos permite calcular un valor basado en uno más datos reactivos lo cual permite
 *  crear optimizaciones como guardar el resultado en caché lo cual permite solo hacer el cálculo cuando alguno de los
 *  valores reactivos cambia
 *
 *  COMO CREAR UNA PROPIEDAD COMPUTADA
 *
 *  primero debemos importar la función computed de Vue
 *
 *  import {computed} from "vue";
 *
 *  posteriormente, vamos a crear una constante donde vamos a guardar el valor del resultado de dicha función computed
 *
 *  const miComputedProperty = computed();
 *
 *  esta función computed recibe un callback como argumento y debe tener un valor de retorno
 *
 *  const numero1 = ref(1);
 *
 *  const numero2 = ref(2);
 *
 *  const total = computed(() => {
 *    return numero1.value + numero2.value;
 *  });
 *
 *  donde tenemos 2 referencias reactivas de números y cuando alguno de estos cambie el total se actualizara de forma
 *  automática
 */

const numero1 = ref(0);
const numero2 = ref(0);

const nuevoNumero = ref(0);

const total = computed(() => {
  return numero1.value + numero2.value;
});

const arrayElements = reactive([2, 4, 5, 9]);

const totalInArray = computed(() => arrayElements.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0)
)

const addElementToArray = () => {
  arrayElements.push(nuevoNumero.value);
  nuevoNumero.value = 0;
};
</script>

<template>
  <input
      placeholder="Numero 1"
      type="number"
      v-model="numero1"
  >

  <input
      placeholder="Numero 2"
      type="number"
      v-model="numero2"
  />

  <p>Total: {{ total }}</p>


  <hr>

  <h1>Numeros en array</h1>
  <ul>
    <li v-for="(element, index) in arrayElements" :key="index">
      {{ element }}
    </li>
  </ul>

  <input
      v-model="nuevoNumero"
      type="number"
      placeholder="Agregar nuevo numero"
  >

  <button @click="addElementToArray">
    Agregar elemento al array
  </button>

  <h1>Total al sumar en array: {{ totalInArray }}</h1>
</template>