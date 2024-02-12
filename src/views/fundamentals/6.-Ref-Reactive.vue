<script setup>
// REACTIVIDAD
/**
 * En vue está muy presente el paradigma de la programación reactiva, pero hasta este momento no hemos visto nada de dicho
 * paradigma, la programación reactiva está compuesta mayormente por datos, observables y acciones donde nosotros debemos
 * de crear un observable el cual básicamente es un stream de datos mientras que también creamos un observer para reaccionar
 * a dichos cambios del observable. En la programación reactiva es asi como trabajamos, pero vue nos hace la vida más sencilla
 *
 * al proveernos una serie de funciones y mecanismos internos para trabajar con programación reactiva sin tener que implementar
 * todo esto desde cero en vue para que un dato sea cambiante y se vuelva reactivo en la vista (HTML) como en el código del script
 * haremos uso de 2 funciones importantes
 *
 * REF(param)
 * Es una función especial que provee vue que nos permite crear referencias reactivas a un valor, donde vue va a encapsular
 * dicho valor para poder ser observado y reaccionar a sus cambios. Por ejemplo cuando vimos en la primera lección teníamos
 * una variable llamada nombre a la cual le cambiamos el valor pero este no se actualizo en el UI.
 *
 * Cuando queremos que un valor dentro del script afecte o se refleje dentro del UI o template haremos uso de REF para que
 * conforme se hagan cambios sobre dicho valor el UI igualmente se actualize.
 *
 * SINTAXIS DE REF
 * para crear una referencia reactiva basta con importar 'ref' de vue
 *
 * import {ref} from "vue";
 *
 * seguido de crear una variable o constante (yo recomiendo constante) llamando a la función ref con el valor que queremos
 * se vuelva reactivo
 *
 * const miNombre = ref('Christopher Andrade');
 *
 * Nota importante: Cuando creamos una referencia reactiva a un valor este si se esta usando dentro del UI (la sección template)
 * si este valor se llega a actualizar el UI asi mismo lo ara de forma automatica, para mostrar el valor de una referencia reactiva
 * en el template basta con usar las dobles llaves seguido solo del nombre de la variable que contiene la referencia reactiva
 *
 * Ejemplo:
 * <h1>{{ name }}</h1>
 *
 * Si queremos cambiar el valor de nuestra referencia reactiva no podemos hacerlo de la siguiente forma
 * name = 'Albero Gunter'; ❌
 *
 * Esto se debe a que al ser una referencia reactiva lo que estamos haciendo en la linea anterior es cambiar todo
 * el valor de la variable perdiendo la reactividad
 *
 * Entonces para hacer esto de la forma correcta lo haremos de la siguiente forma
 *
 * name.value = 'Alberto Gunter'; ✅
 *
 * Ya que al hacerlo de esta forma estamos cambiando el valor que guarda la referencia reactiva asi conservando
 * la reactividad
 *
 *
 *
 *
 * REACTIVE(object)
 * Es otra función que nos proporciona Vue para poder trabajar con reactividad pero esta es especial y esta orientada a
 * trabajar con objetos ya vimos que con REF podemos crear referencias reactivas a diferentes valores, strings, numeros,
 * valores booleanos, arrays pero el manejo de objetos no es tan bueno con ref por lo que Vue creo la función reactive
 * para poder trabajar con objetos reactivos y en el caso de que el objeto o alguna de sus propiedades cambie este cambio
 * se vea reflejado dentro del template
 *
 * REACTIVE principalmente lo vamos a utilizar cuando necesitemos trabajar con reactividad profunda o en este caso cuando
 * tengas estructuras mas complejas por ejemplo un array de objetos, un array de strings, mapas o sets
 *
 * la sintaxis de reactive es muy similar a REF salvo con algunos usos igualmente primero debes importar la función reactive
 * desde vue
 *
 * import { reactive } from "vue";
 *
 * posteriormente a esto podremos crear una variable o constante con el valor en este caso que nos interesa hacer reactivo
 *
 * const ejemplo1 = reactive(["Uno", "Dos", "Tres"]);
 *
 * const ejemplo2 = reactive([{ a:1, b:2 }, { a:2, b:3 }, { a:4, b:5 }]);
 *
 * Nota importante: para mostrar dicho valor reactivo en el template haremos igual que como con ref solo poniendo el nombre
 * de la variable que nos interesa imprimir
 *
 * <pre>{{ ejemplo1 }}</pre>
 *
 * Nota importante: Cuando usamos reactive si podemos acceder directamente a el valor del objeto u array sin tener que poner
 * un .value como ref aquí no tenemos tanto riesgo de perder la reactividad
 */

import {ref, reactive} from "vue";

const name = ref('Christopher Andrade');

const adminUser = reactive({
  name: 'Chris',
  lastname: 'Andrade',
  age: 23
})

setTimeout(() => {

  name.value = 'Alberto Gunter';
  adminUser.age = 25;

}, 3000);
</script>

<template>
  <h1>{{ name }}</h1>

  <h1>Array con ref</h1>

  <pre>{{ adminUser }}</pre>
</template>
