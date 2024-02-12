<script setup>
// EVENTOS

import {onMounted} from "vue";

/**
 * En Vue tenemos la capacidad de manejar eventos tal cual como lo hacemos en JS puro
 * Normalmente cuando queremos que un control de HTML llame a una función o reaccione a una interacción del usuario
 * Manejábamos dicho evento de diferentes maneras
 */

const showAlert = () => {
  alert('Se ha hecho click');
}

const showAlertMouseOver = () => {
  alert('Se ha hecho mouse over');
}

/**
 * onMounted es un Hook del ciclo de vida de Vue que veremos más adelante de momento no le tomemos mucha importancia
 */
onMounted(() => {
  /**
   * Anteriormente, nosotros también en HTML y JS podamos hacer esto mediante un ID acceder al elemento que nos interesa
   * y agregar un listener para llamar a alguna function o hacer alguna action basándonos en el evento
   */
  document.getElementById('button_show_alert')
      .addEventListener('click', showAlert);
})
</script>

<template>
  <!--FORMA 1-->
  <!--NO FUNCIONA VUE PREVIENE USAR ESTE TIPO DE MANEJO DE EVENTOS-->
  <button onclick="showAlert">
    Manejo de eventos forma 1
  </button>

  <!--FORMA 2-->
  <button id="button_show_alert">
    Manejo de eventos forma 2
  </button>

  <!--FORMA 3-->
  <!--
    Vue tiene su propia forma de manejar los eventos muy similar a la forma 1 la cual se asemeja al HTML nativo donde
    solo basta con poner un v-on esta directiva lo que ara es crear un listener de forma interna al elemento que nos
    interesa con el tipo de listener que queremos agregar la sintaxis seria algo asi
    v-on:NOMBREDELLISTENER="funcionAllmar"

    Mas adelante profundizaremos sobre lo que son las directivas pero por el momento quedémonos con que una directiva es
    un atributo especial que vue Agrega a todos los elementos HTML para poder hacer operaciones sobre el DOM (en este caso
    agregar un listener)
  -->
  <button v-on:click="showAlert">
    Manejo de eventos forma Vue
  </button>


  <!--
    Vue tiene una forma para casi todas las cosas que nos ofrece y en este caso la directiva v-on: es una de ellas ya que
    a la vista no es muy bonito de ver ni limpio tener un v-on cada que querríamos agregar un evento por lo que nos provee
    una forma corta de hacer esto remplazando el v-on por un @ seguido del nombre del evento que quereos agregar lo cual hace
    mas facil de leer el codigo

    la sintaxis seria la siguiente @NOMBREDELEVENTO

    v-on:click="event" = @click="event"
  -->
  <button
      @click="showAlert"
      @mouseover="showAlertMouseOver"
  >
    Manejo de eventos forma Vue (corta)
  </button>
</template>

<style>
button {
  display: block;
  padding: 16px 10px;
  margin-bottom: 10px;
}
</style>
