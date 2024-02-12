<script setup>
// COMPONENTES
/**
 * Hemos visto hasta este punto muchos de los elementos fundamentales de Vue, directivas, eventos, data binding y class
 * o style binding, pero toca ahora ver uno de los temas donde vue está bastante fuerte dada las herramientas y lo que nos
 * permite hacer con ello y estoy hablando de los componentes.
 *
 * Ya anteriormente en la clase de teoría vimos que eran los componentes a grandes rasgos que básicamente son pequeñas partes
 * del UI de nuestro sitio o aplicación los cuales podemos reutilizar y estos tienen comportamiento propio.
 *
 * Podemos imaginar a un componente como un control HTML reutilizable el cual ya tiene comportamiento, eventos y
 * estilos ya definidos que pueden ser reutilizables.
 *
 * En vue para trabajar y escribir un componente es realmente sencillo casi no hay que tener que cambiar algo o escribir mucho
 * código como en otros frameworks
 *
 *
 * COMO CREAR UN COMPONENTE:
 * Lo primero que debemos hacer es crear un archivo con extension .vue y colocar las 3 secciones con las que normalmente
 * hemos estado trabajando
 *
 * SCRIPT
 * TEMPLATE
 * STYLE
 *
 * Donde vamos a definir el marcado HTML, los estilos de CSS y los eventos o comportamiento con javascript
 *
 * Nota importante: Todo el código que se encuentre dentro de un componente solo estará disponible dentro del mismo y este
 * no afectara o podrá ser accedido desde fuera del mismo como hacíamos antes en javascript donde definíamos una función
 * dentro de un script y la usábamos en otro lado
 *
 *
 * COMO USAR UN COMPONENTE
 * Para poder hacer uso de un componente y reutilizarlos las N veces que queramos en los N archivos que los necesitemos
 * es también realmente muy simple solo ocupamos importar el archivo de Vue dentro del archivo donde queramos usar el
 * componente por ejemplo:
 *
 * import MiComponente from 'ruta/del/componente/que/queremos/usar'
 *
 * una vez tengamos la importación del archivo de vue podemos ya hacer uso de nuestro componente dentro de la sección
 * template y tendremos 4 diferentes formas de hacerlo
 *
 * ya que al nosotros crear un componente imaginemos que hicimos un elemento HTML personalizado el cual podemos usar como
 * una etiqueta común y corriente y para hacerlo podremos hacerlo de la siguientes formas
 *
 * # FORMA 1
 * <NombreDeMiComponente></NombreDeMiComponente>
 *
 * # FORMA 2
 * <NombreDeMiComponente />
 *
 * # FORMA 3
 * <nombre-de-mi-componente></nombre-de-mi-componente>
 *
 * # FORMA 4
 * <nombre-de-mi-componente />
 *
 * ¿CUAL DE LAS 4 FORMAS ES MEJOR?
 * La que nosotros como equipo consideremos es mas cómoda y trabajemos mejor con esa forma ya que realmente no es que
 * ninguna de las 4 formas nos de exactamente una diferencia en performance o algo que nos haga considerarla mejor a las otras
 *
 * Nota poco relevante: a mi me gusta esta la forma 3 y 4
 *
 */

import ButtonBuy from "@/components/componentes1/ButtonBuy.vue";
import FormInput from "@/components/componentes1/FormInput.vue";
</script>

<template>
  <div class="flex flex-col gap-y-2 items-center">
    <ButtonBuy></ButtonBuy>

    <ButtonBuy />

    <button-buy></button-buy>
  </div>

  <div class="container mx-auto flex gap-y-2 flex-col">
    <FormInput />
    <FormInput />
  </div>
</template>