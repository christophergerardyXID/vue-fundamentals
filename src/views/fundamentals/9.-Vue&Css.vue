<script setup>
// ESTILOS CSS
/**
 * Cuando trabajamos del lado del frontend muchas veces algo de lo que nos preocupamos es de los estilos CSS o el look
 * and feel del UI que vamos a construir, normalmente cuando abordamos este tipo de cuestiones pensamos en usar una biblioteca
 * como bootstrap, material design entre otras que nos dan una serie de clases y estilos ya predefinidos que nos permiten crear
 * un UI de forma sencilla y cuando trabajamos con Vue tenemos este tipo de herramientas disponibles y algunas veces más potente
 *
 * Cuando queremos trabajar con CSS tendremos 3 formas de integrarlo
 *
 * Con la forma tradicional
 * Escribiendo las reglas de los estilos HTML a mano lo cual nos da total control de esta parte pero puede ser tardado
 *
 * Usar una biblioteca de CSS
 * La que normalmente ya conocemos donde importamos un link de CSS que contiene estilos y reglas de CSS que nos permiten
 * crear una seria de elementos predefinidos (material design, bootstrap, etc)
 *
 * Usar una biblioteca de componentes
 * Cuando veamos que son los componentes entenderemos un poco mejor esto, pero básicamente en este tipo de librerías en lugar de
 * tener clases para usar tenemos componentes completos partes pequeñas de un sistema de diseño ya construido las cuales no son
 * tan personalizables y están listas para usar lo que permite crear UI más rápido que con las opciones anteriores
 *
 *
 * En este caso vamos a instalar una librería de CSS muy popular y que es muy similar a un bootstrap Tailwind CSS
 *
 * Visitar
 * https://tailwindcss.com/docs/guides/vite#vue
 *
 * Instalar las dependencias
 * npm install -D tailwindcss postcss autoprefixer
 *
 * Crear el archivo de configuración de tailwindcss
 * npx tailwindcss init -p
 *
 * Crear el archivo de configuración de postcss
 * export default {
 *     plugins: {
 *         tailwindcss: {},
 *         autoprefixer: {},
 *     },
 * }
 *
 * Crear un archivo llamado main.css dentro de src/assets/css
 * Colocar este contenido dentro de main.css
 * @tailwind base;
 * @tailwind components;
 * @tailwind utilities;
 *
 *
 * importar main.css dentro de main.js
 * import './assets/css/main.css';
 *
 * TEMAS Y CONFIGURACIONES DE TAILWIND
 * https://tailwindcss.com/docs/configuration
 *
 * OTRAS LIBRERÍAS A CONSIDERAR
 * https://vuetifyjs.com/en/getting-started/installation/
 * https://primevue.org/vite/
 * https://bootstrap-vue.org/docs/components/carousel
 * https://www.creative-tim.com/vuematerial/
 */
</script>

<template>

</template>