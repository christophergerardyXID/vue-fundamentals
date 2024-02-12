<script setup>
// Eventos personalizados (Emit)
/**
 * En javascript puro tenemos diferentes tipos de eventos, click, dbclick, mouseover, mouseleave en fin bastantes, pero estos
 * ya están predefinidos con Vue podemos crear nuestros propios eventos o habilitar los eventos tradicionales aún componente
 * personalizado
 *
 * COMO CREAR EVENTOS PERSONALIZADOS:
 * Vue nos da una función llamada defineEmits la cual nos ayuda a definir los eventos que en este caso vamos a exponer desde el
 * componente la sintaxis sería la siguiente
 *
 * crear una constante llamada emit el cual guarde el resultado de llamar a la función defineEmit
 *
 * const emit = defineEmits();
 *
 * Esta función (defineEmits) recibe como parámetro un array de strings los cuales representan el nombre de los eventos que
 * queremos crear por ejemplo
 *
 * const emit = defineEmits(["evento1", "evento2", "evento3"]);
 *
 * en donde podemos ver definimos 3 eventos, pero ¿cómo hacemos uso de ellos? Y más importante como pasamos parámetros a
 * dichos eventos, pues bien para ello haremos lo siguiente
 *
 * tomaremos la constante emit y la usaremos como si se tratase de una función esta función recibe 2 parámetros el primero
 * el nombre del evento (que debe estar dentro del array de strings) y el segundo un payload o datos que queramos insertar
 * como parámetro dentro del evento por ejemplo:
 *
 * emit("evento1", "Hola soy un argumento");
 *
 * Con solo esas pocas líneas hemos creado un evento personalizado dentro del componente, pero ahora como hacemos uso de
 * ese evento o como lo escuchamos igual es muy fácil solo en el componente que emite el evento agregaremos la sintaxis
 *
 * @nombredelevento
 *
 * por ejemplo:
 *
 * <ComponenteCustom @evento1="handler" />
 */
import ButtonWithEvent from "@/components/componentes3/ButtonWithEvent.vue";

const manejador = (event) => {
  console.log('Se ha hecho click', event)
}

const showGoOutMsg = () => alert('Estas saliendo de la app...');
</script>

<template>
  <ButtonWithEvent
      @click="manejador"
      @go-out="showGoOutMsg"
  />
</template>