<script setup>
import {computed, reactive, ref} from "vue";
import InputSearcher from "@/components/componentes4/InputSearcher.vue";
import CartItem from "@/components/componentes4/CartItem.vue";

const searchValue = ref('');

const productsInShoppingCart = reactive([
  {
    id: 1,
    name: 'Patineta',
    price: 200,
  },
  {
    id: 2,
    name: 'Iphone 12',
    price: 400,
  },
  {
    id: 3,
    name: 'TV Samsung 5k 120fps',
    price: 500,
  },
  {
    id: 4,
    name: 'Xbox',
    price: 400,
  },
  {
    id: 5,
    name: 'Libro sobre programación',
    price: 25,
  }
])

const productsInSearch = computed(() => productsInShoppingCart.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.value.toLowerCase());
    })
);

const totalInShoppingCart = computed(() => {
  let total = 0;

  for (const product of productsInShoppingCart) {
    total += product.price;
  }

  return `Total a pagar: $${total}`;
});
</script>

<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl">
      Carrito de compras
    </h1>

    <hr class="my-4">

    <InputSearcher
        v-model="searchValue"
    />

    <CartItem
        v-for="(products, index) in productsInSearch"
        :index="index"
        :product="products"
    />

    <h3 class="text-right text-2xl">
      {{ totalInShoppingCart }}
    </h3>
  </div>
</template>