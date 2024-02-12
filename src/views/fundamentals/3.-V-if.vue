<script setup>
// DIRECTIVAS

/**
 * En vue JS existe un concepto bastante importante que debemos entender, ya que es una de las caracteristicas más
 * poderosas del framework y estoy hablando sobre las directivas
 *
 * Una directiva es como un modificador dentro de Vue para hacer modificaciones dentro del DOM
 * las directivas de Vue normalmente empiezan con la letra V seguido de un guion v-
 *
 * El uso en general de las directivas de vue son modificar atributos, gestionar eventos y realizar otras
 * operaciones en respuesta a cambios en los datos del componente.
 *
 * Vamos a explorar algunas de estas directivas para entender mejor como funcionan y cuál es su proposito o uso
 *
 *
 *
 * V-IF: Es una directiva la cual vamos a utilizar para mostrar o remover elementos con base en una condición, imaginemos
 * este caso estamos creando una aplicación con base a roles donde los administradores pueden ver todo pero un usuario de
 * menor rango solo puede ver ciertas secciones entonces de alguna forma tenemos que hacer esa validación la cual
 * es perfecta para demostrar como funciona la directiva v-if
 *
 * la sintaxis de esta directiva es la siguiente v-if="condición"
 *
 *
 * V-ELSE-IF: Asi como en cualquier lenguaje de programación tenemos estructuras de control como if, else if y else aquí
 * en vue podemos hacer exactamente lo mismo pero claro aplicado al DOM donde vimos que la directiva anterior (v-if)
 * iba a mostrar o remover un elemento del DOM en base a una condición pero que pasa si quiero agregar un segundo
 * condicional donde si el usuario es un Editor le muestre un botón que le permita editar la base de datos
 *
 * la sintaxis de esta directiva es la siguiente v-else-if="condición"
 * NOTA: para utilizar v-else if asi como en lenguaje de programación normal debe existir antes un v-if
 *
 * v-if="condición"
 * v-else-if="condición"
 *
 *
 * V-ELSE: Como comentamos hace un momento existen las directivas v-if, v-else-if y no es sorpresa para nadie que tambien
 * existan las directiva v-else la cual funciona exactamente igual como funciona un else un lenguaje de programación como
 * una estructura de control donde si la condición dentro del if o else if no se cumplieron terminara entrando en la
 * instrucción else
 *
 * la sintaxis de un v-else es bastante simple ya que a diferencia de v-if y v-else-if con v-else no evaluamos ninguna
 * condición por lo que basta con escribir la directiva. Ojo que aquí necesitamos de un v-if antes de un v-else
 *
 * v-if="condición"
 * v-else
 *
 * v-if="condición"
 * v-else-if="condición"
 * v-else
 *
 * v-if="condición"
 * v-else-if="condición"
 * v-else-if="condición"
 * v-else
 */

const user = {
  nombre: 'Christopher Gerardy',
  role: 'Admin', // Admin | Editor | User
};

const deleteDatabase = () => alert('Base de datos eliminada');

const editDatabase = (msg) => alert(`Editando DB: ${msg}`);
</script>

<template>
  <button
      v-if="user.role === 'Admin'"
      @click="deleteDatabase"
  >
    Click para borrar toda la base de datos
  </button>


  <button
      v-else-if="user.role === 'Editor'"
      @click="editDatabase('Editor desconocido')"
  >
    Click para editar la base de datos
  </button>


  <button v-else>
    Click para hacer cosas de usuarios
  </button>
</template>

<style>

</style>
