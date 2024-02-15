import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const productsStore = defineStore('productsStore', () => {
    const productSearch = ref('');

    const products = reactive([
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
    ]);

    const productsFiltered = computed(() => products.filter((item) => {
            return item.name.toLowerCase().includes(productSearch.value.toLowerCase());
        })
    );

    const totalToPay = computed(() => {
        let total = 0;

        for (const product of products) {
            total += product.price;
        }

        return total;
    })

    return {
        products,
        productSearch,
        productsFiltered,
        totalToPay,
    }
})