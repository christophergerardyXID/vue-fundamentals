<script setup>
// SLOTS
/**
 * En la clase anterior exploramos las propiedades y las cosas que podemos hacer con ellas, pero muchas veces no vamos a
 * querer trabajar con solo datos u objetos dentro de un componente ¿Qué pasa cuando queremos introducir un elemento o
 * contenido html a un componente? Como para hacer un layout, crear un componente con contenido como un elemento A o P
 * bueno, pues para ello entonces podemos hacer uso de los slots una herramienta bastante sencilla pero poderosa de Vue
 *
 * ¿QUÉ ES UN SLOT?
 * Es una característica especial de Vue la cual nos permite pasar contenido adicional a un componente mediante su componente
 * padre, los slots funcionan como si fueran espacios disponibles dentro del componente en los cuales dinámicamente podemos
 * insertar contenido lo cual nos permite el crear componentes más flexibles y reutilizables
 *
 * ¿CÓMO CREO UN SLOT?
 * Para crear un slot tenemos 2 formas de hacerlo con y sin nombre y dependiendo cuál elijamos la sintaxis para usar dicho
 * slot también puede cambiar
 *
 * Agregar el slot al componente:
 * Para agregar un slot a un componente basta con dentro de elemento al cual queremos designar dicho slot incluyamos la
 * etiqueta slot esto creara un slot sin nombre y solo puede existir uno por componente
 *
 * <template>
 *   <button>
 *     <slot></>slot>
 *   </button>
 * </template>
 *
 * ¿Como usar un slot sin nombre?
 * Para acceder al slot desde un componente padre lo haremos de la siguiente forma
 *
 * <template>
 *   <super-btn>
 *     Hola mundo
 *   </super-btn>
 * </template>
 *
 * CREAR UN SLOT CON NOMBRE
 * Cuando creamos un slot con nombre practica mente le estamos diciendo a Vue que abra más de un slot dentro del componente
 * por lo cual de alguna forma los vamos a etiquetar (con nombres) y a diferencia del slot sin nombre la sintaxis cambia
 * mínimamente
 *
 * Crear el slot
 *
 * <template>
 *   <button>
 *     <slot name="button1"></>slot>
 *   </button>
 *
 *    <button>
 *     <slot name="button2"></>slot>
 *   </button>
 * </template>
 *
 * Usar los slots
 * Para usar los slots que definimos en el componente cambia muy poco la sintaxis solo debemos de agregar una etiqueta
 * template con la propiedad o atributo v-slot y el nombre del slot tambien esta la forma corta donde solo ponemos
 * el simbolo del # y el nombre del slot
 *
 * <template>
 *   <super-botonera>
 *     <template v-slot:button1>
 *       <h1>Hola soy contenido de un slot</h1>
 *     </template>
 *
 *     <template #button2>
 *       <h2>Hola soy contenido de un slot</h2>
 *     </template>
 *   </super-botonera>
 * </template>
 *
 */
import SuperBasicLayout from "@/components/componentes2/SuperBasicLayout.vue";
import SuperNav from "@/components/componentes2/SuperNav.vue";
import CryptoNews from "@/views/fundamentals/13.-Props-2.vue";
import SuperFooter from "@/components/componentes2/SuperFooter.vue";
</script>

<template>
  <super-basic-layout>
    <template #header>
      <SuperNav />
    </template>

    <template v-slot:content>
      <CryptoNews />
    </template>

    <template #footer>
      <SuperFooter />
    </template>
  </super-basic-layout>
</template>