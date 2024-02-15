<script setup>
// MANEJO DEL ESTADO - PINIA
import {productsStore} from "@/store/ProductsStore.js";
import InputSearcher from "@/components/componentes4/InputSearcher.vue";
import CartItem from "@/components/componentes4/CartItem.vue";
import {toRefs} from "vue";
import TotaInShoppingCart from "@/components/componentes4/TotaInShoppingCart.vue";

/**
 * https://www.figma.com/proto/dY0Yvg7oBzj13VoPYxaP2w/Untitled?type=design&node-id=102-29&t=9O4xvlP6FmaYLhiy-0&scaling=scale-down&page-id=0%3A1
 *
 * En Vue existe algo llamado el manejo de estado, ya que desde las aplicaciones más pequeñas hasta las más grandes nos vamos
 * a ver en la necesidad de trabajar con conjuntos de datos donde estos se pueden compartir entre las diferentes vistas o usarlos
 * de forma independiente
 *
 * Cuando hablamos de manejo de estado usualmente tendremos 2 herramientas muy poderosas para manejar el estado ya sea
 * Vuex o Pinia
 *
 * Donde para este curso usaremos Pinia debido a su veloz aceptación y curva de aprendizaje en los recientes años desde la salida
 * de Vue 3
 *
 * En Pinia existen 3 conceptos importantes a entender
 *
 * STATE
 * Es una representación de los datos que contienen nuestra aplicación ya sea en cuestión de estructura y valor este estado
 * es reactivo y puede ser accedido de manera global desde cualquier punto de nuestra aplicación en vue.
 *
 * ACTIONS
 * Son muy parecidas a un método o una función dentro de Vue una acción tiene como objetivo el realizar cambios sobre el estado
 * hacer operaciones como llamadas a API's o cualquier otro tipo de operación la cual nuestros componentes pudieran compartir
 *
 * GETTERS
 * Son un concepto muy parecido a las propiedades computadas, ya que un getter tiene como objetivo el transformar o regresar
 * un resultado o cálculo con base a las propiedades que tenemos del estado por ejemplo si tenemos 2 elementos en el estado
 * y los queremos sumar podemos crear un getter que nos dé dicho resultado
 */
const { productsFiltered, productSearch } = toRefs(productsStore());
</script>

<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl">
      Carrito de compras
    </h1>

    <hr class="my-4">

    <InputSearcher
        v-model="productSearch"
    />

    <CartItem
        v-for="(products, index) in productsFiltered"
        :index="index"
        :product="products"
    />

    <TotaInShoppingCart />
  </div>
</template>
