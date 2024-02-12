<script setup>
// WATCH
/**
 * Ya vimos en la sección anterior una propiedad computada es un cálculo que se hace con base en elementos reactivos, pero
 * muchas veces no vamos a necesitar hacer un cálculo, sino hacer alguna acción en cuanto un valor cambio por ejemplo reaccionar
 * al cambio de estado de una variable reactiva u objeto para esto las propiedades computadas nos quedan cortas por lo que vue
 * nos provee de un mecanismo diferente el cual está enfocado en ejecutar efectos secundarios cuando una variable cambie
 * estamos hablando de los observadores o watcher's
 *
 * COMO CREAR UN WATCHER
 * Lo primero que debemos entender es que un watcher ocupa una variable reactiva u objeto reactivo para observar por lo que primero
 * debemos crear dicha variable.
 *
 * const miVariableReactiva = ref(10);
 *
 * Cuando tengamos ya creado la variable a observar vamos a llamar a la función watch de Vue(la cual también debemos importar
 * de vue)
 *
 * import {watch} from "vue";
 *
 * watch()
 *
 * esta función recibe 3 argumentos
 *
 * El primero es la variable a observar o un array de variables a observar
 *
 * watch(miVariableReactiva)
 *
 * watch([miVariableReactiva, otraVariableReactiva, etc..])
 *
 * segundo es un callback con 2 argumentos los cuales el primero es el valor nuevo de la variable que se está observando
 * mientras que el segundo es el valor anterior después del cambio
 *
 * const miVariableReactiva = ref(10);
 * miVariableReactiva.value = 11;
 *
 * watch(miVariableReactiva, (valorActual, valorAnterior) => {
 *   // valor actual 11
 *   // valor anterior 10
 * })
 *
 * Nota: poner los argumentos es opcional si no los ocupamos no es necesario colocarlos
 *
 * El último argumento es un objeto de configuración el cual contiene una serie de modificadores los cuales sirven para
 * cambiar el comportamiento o como es que observa las propiedades el watcher
 *
 * watch(miVariableReactiva, () => {
 *   // CODE
 * }, {
 *   deep: true,
 *   immediate: true
 * })
 *
 * DEEP: cuando trabajamos con un objeto y queremos observar todas sus propiedades y sub propiedades
 * IMMEDIATE: cuando queremos que el watcher se ejecute al menos 1 vez al cargar el componente
 */

import {reactive, ref, watch} from "vue";
import TaskItem from "@/components/componentes3/TaskItem.vue";

const age = ref(18);

const increment = () => age.value += 1;
const decrement = () => age.value -= 1;

watch(age, () => {
  if (age.value > 24) {
    alert('Ya eres mayor de edad debes trabajar ):');
  }

  if (age.value < 10) {
    alert('Eres un bebe :3');
  }
});

const tasks = reactive([
  {
    title: 'Pasear al perro',
    completed: false,
  },
  {
    title: 'Tomar agua',
    completed: false,
  },
  {
    title: 'Hacer ejercicio',
    completed: false,
  },
])

watch(tasks, () => {
  const allTaskCompleted = tasks.every((task) => task.completed);

  if (allTaskCompleted) {
    alert('Felicidades por completar todas las tareas');
  }
})

const onTaskCompleted = (task) => {
  console.log('Se ha completado la tarea: ', task.title);
}
</script>

<template>
  <!--<div class="container mx-auto flex justify-between items-center">
    <button
        class="px-6 py-2 bg-blue-700 text-white rounded"
        @click="decrement"
    >
      Decrementar
    </button>

    <h1 class="text-2xl">
      Edad actual: {{ age }}
    </h1>

    <button
        class="px-6 py-2 bg-blue-700 text-white rounded"
        @click="increment"
    >
      Incrementar
    </button>
  </div>-->

  <div class="container mx-auto mt-4">
    <h1 class="text-3xl">Tareas para hoy</h1>
    <hr class="mt-4">

    <div>
      <TaskItem
          v-for="(task, index) of tasks"
          :key="index"
          :task="task"
          @task-completed="onTaskCompleted"
      />
    </div>
  </div>
</template>
