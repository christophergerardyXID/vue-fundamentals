<script setup>
// VUE ROUTER
/**
 * Hasta ahora lo que hemos visto durante el curso hemos aprendido los elementales de Vue
 * Props
 * Componentes
 * Propiedades computadas
 * Watchers
 * Data binding
 * Style y class Binding
 * directivas
 *
 * entre muchos otros temas más, pero ya ha llegado la hora de hacer aplicaciones un poco más serias y entrar a un concepto
 * que si bien no es totalmente de Vue lo vamos a usar en forma de librería para hacer que nuestros proyectos de vue tengan
 * una navegación
 *
 * Hablo del concepto de routing o rutas donde vamos a definir diferentes puntos de entrada a nuestro proyecto desde los cuales
 * podremos acceder a cierta vista por ejemplo
 *
 * /home
 * /app/id
 *
 * etc
 *
 * la idea es tener un mecanismo que administre todo esto y nos permita el tener control sobre dichos puntos de acceso}
 *
 * para ello vamos a instalar una librería llamada vue-router lo cual haremos con
 * npm install vue-router
 *
 * posterior a este paso vamos a crear un archivo llamado router.js o routes.js como mejor nos venga para crear nuestro
 * enrutador
 *
 * Dentro de este archivo que creamos vamos a definir nuestro router y las rutas que va a contener para ello primero debemos
 * importar una función llamada createRouter la cual viene de vue-router
 *
 *
 * import { createRouter } from 'vue-router';
 *
 * esta función la vamos a llamar y le pasaremos un objeto como argumento para hacer unas configuraciones en 2 propiedades
 * llamadas routes y history
 *
 * const router = createRouter({
 *    routes
 *    history
 * });
 *
 * donde routes son las rutas que existen dentro de nuestro proyecto Vue js
 * y history es la forma en la que vamos a manejar el historia de navegación que conocemos ya sea por solo un / o un /#/
 *
 * Nota: Normalmente se usa el de solo un /
 *
 * /esto-es-una-ruta/esta-es-otra
 * /#/esto-es-una-ruta/esta-es-otra
 *
 *
 * para usar una u otra estrategia de historial importaremos 2 diferentes funciones una llamada createWebHashHistory y la otra
 * createWebHistory
 * import { createWebHistory, createWebHashHistory } from 'vue-router';
 *
 * donde createWebHistory es igual a usar /
 * mientras que createWebHashHistory es /#/
 *
 * cualquiera de estas 2 opciones que elijamos la pasaremos como valor al objeto de configuración del router en la propiedad
 * history
 *
 * const router = createRouter({
 *    history: createWebHistory(),
 *    routes
 * });
 *
 * ahora con respecto a lo que viene en el campo de routes son las rutas que en este caso queremos exponer y controlar
 * para declararlas vamos a usar un array de objetos los cuales van a tener de momento 2 propiedades
 *
 * path: la ruta
 * componente: el componente a renderizar cuando se visite la ruta que esta en path por ejemplo
 *
 * const router = createRouter({
 *    history: createWebHistory(),
 *    routes: [
 *      {
 *        path: '/home',
 *        component: Home, <--- No olvidar importar el componente
 *      }
 *    ]
 * });
 *
 * una vez tengamos esto que es lo mínimo indispensable debemos exportar la constante que contiene al router de la siguiente
 * forma
 *
 * export default router;
 *
 *
 * ya teniendo nuestro router configurado vamos a importarlo dentro de nuestro archivo main.js
 *
 * import router from "@/routes/router.js"
 *
 * y en la instancia de Vue vamos a agregarlo con la función use
 *
 *
 * const app = createApp(App).use(router)
 *
 * y con esto tenemos un sistema de enrutamiento pero aun no le hemos dicho a vue donde es que este debe montarse para esto
 * vamos a usar un componente interno que se crea cuando incluimos vue-router en el proyecto este componente se llama
 * <router-view></router-view>
 *
 * y lo que hace es que le indica a Vue donde se van a cargar las rutas de nuestro proyecto
 *
 * Nota normalmente cuando trabajamos con vue-router se acostumbra poner el router-view en el componente de
 * app o en algún layout
 */
import SuperBasicLayout from "@/components/componentes2/SuperBasicLayout.vue";
import SuperFooter from "@/components/componentes2/SuperFooter.vue";
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template>
  <SuperBasicLayout>
    <template #header>
      <AppNavbar />
    </template>

    <template #content>
      <router-view />
    </template>

    <template #footer>
      <SuperFooter />
    </template>
  </SuperBasicLayout>
</template>
