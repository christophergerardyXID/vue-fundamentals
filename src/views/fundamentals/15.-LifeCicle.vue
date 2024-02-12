<script setup>
// LIFE CICLE
import {ref} from "vue";
import GanchosCicloDeVida from "@/components/componentes3/GanchosCicloDeVida.vue";

/**
 * Cada instancia de un componente de Vue pasa por una serie de procesos para crearse como compilar el template html,
 * montar la instancia dentro del DOM, actualizar el DOM cuando se detecten cambios entre muchas otras cosas asi que vamos
 * a explorar cada uno de estos procesos a los cuales llamamos ganchos del ciclo de vida.
 *
 * Un gancho del ciclo de vida en Vue es básicamente un momento en el tiempo determinado dentro del proceso de compilación
 * de Vue.
 *
 * Para entender mejor esto veamos la siguiente imagen: https://vuejs.org/assets/lifecycle.DLmSwRQE.png
 *
 * Vemos que en la imagen nos explican con un diagrama como funciona este proceso a la hora de trabajar con un componente de Vue,
 * pero vamos a ir paso por paso en cada uno de los puntos para entender que son.
 *
 * SETUP
 * En esta etapa se lee todo lo que tenemos en la sección script
 *
 * Before Create:
 * En esta etapa aun no se crea la instancia de Vue y por lo tanto no tenemos acceso al DOM ni a operaciones que involucren que este
 * exista
 *
 *
 * Created: En esta etapa la instancia se Vue se ha creado y tenemos acceso ahora ya las funciones que sean propias de Vue y del
 * DOM pero no se ha montado el componente dentro del DOM
 *
 *
 * DECISIÓN:
 * Si se tiene un pre-renderizado del componente este se va a utilizar y en el caso de que no sea asi Vue va a pre-compilar el
 * componente durante la ejecución
 *
 *
 * Before mount: Esta etapa se llama antes de que el componente se monte sobre el DOM aquí el estado reactivo del componente
 * ya esta configurado pero aun no tiene efecto sobre el DOM esta etapa es un paso antes de que se haga el render por primera vez
 *
 *
 * Mounted: En este punto ya el template o el componente se ha montado dentro del DOM normalmente usamos este gancho cuando
 * queremos hacer algún side effect como ir por datos a un API, calculo o algo que ocupe hacer el componente adicionalmente
 *
 *
 * Before Update: Cuando sucede un cambio dentro del componente este se detecta y se actualizara el DOM este hook se llama
 * antes de que el render se haga y justo cuando se detecto el cambio
 *
 *
 * Updated: Este hook se llama una vez se haya hecho un cambio dentro del DOM pero OJO se llama justo luego del cambio no
 * durante el mismo
 *
 *
 * Before unmount: El componente sera retirado del DOM este hook se llama antes de que eso suceda
 *
 *
 * Unmounted: Aquí ya el componente fue desmontado del DOM no existe y la instancia de Vue sera destruida posteriormente
 *
 * COMO USAR UN HOOK
 * para usar un hook tendremos que importarlo primero desde vue como lo hemos hecho antes todos los hooks tiene el prefijo
 * on seguido del nombre del hook por ejemplo:
 *
 * import {onMounted} from "vue";
 *
 * onMounted()
 *
 * Dentro del hook podremos pasar un callback en el cual vamos a indicar la acción a ejecutar cuando se llame a dicho hook
 *
 * onMounted(() => {
 *   // CÓDIGO A EJECUTAR
 * })
 */

const isVisible = ref(true);

const switchVisibleState = () => {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div class="container mx-auto">
    <GanchosCicloDeVida v-if="isVisible"/>

    <button
        @click="switchVisibleState"
        class="px-6 py-4 bg-blue-700 text-white mt-4"
    >
      Cambiar visibilidad
    </button>
  </div>
</template>