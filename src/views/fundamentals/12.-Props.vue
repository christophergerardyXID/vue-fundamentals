<script setup>
// PROPS
/**
 * Hemos visto que los componentes nos sirven para reutilizar elementos visuales de un UI al encapsular todo el elemento
 * junto con su propio JS y CSS
 *
 * En la sección anterior vimos como escribir y hacer uso de un componente pero notamos un problema en el ejemplo que
 * hicimos no tenemos tanta libertad de personalización o de reutilización ya que siempre tenemos el mismo elemento estático
 * y la idea es hacerlos lo mas dinamicos e independientes posibles entonces ¿como llegamos a este punto ? para ello nos
 * apoyaremos de un concepto en vue llamado props o propiedades en español el cual es un mecanismo que nos permite pasar
 * parámetros al componente hijo desde un componente padre o vista lo cual permite la reutilización y configuración de
 * componentes.
 *
 * COMO ESCRIBIR UNA PROP
 * Vue necesita saber de alguna forma de un componente lleva propiedades para habilitarlas y poder hacer uso de ellas por
 * lo que pone a disposición del desarrollador una función llamada defineProps la cual nos sirve para definir las propiedades
 * que utiliza nuestro componente
 *
 * LA SINTAXIS DE DEFINE PROPS
 * para usar esta función tendremos 2 formas de hacerlo por medio de un array o un objeto
 *
 * ARRAY:
 * De esta forma definiremos las propiedades como si de un array de strings se tratase donde el valor de las props podría
 * ser cualquiera desde un mismo string hasta un objeto esta forma la recomiendo cuando estamos trabajando con un componente
 * que maneje datos simples como un string, numero o booleano
 *
 * defineProps(["prop1", "prop2", "prop3"])
 *
 * OBJETO:
 * En esta forma nosotros definiremos las props por medio de un objeto en donde podremos indicar directamente el tipo o en el caso
 * de que lo necesitemos dar ciertas reglas a la propiedad en el caso de que ocupemos validar que el valor de dicha propiedad sea
 * de cierto tipo si es requerida la propiedad o si tiene algún valor por defecto. Esta sintaxis la recomiendo mas cuando estamos
 * trabajando con un componente que es mas complejo, tiene o esta haciendo uso de props mas complejas o en el caso de que estemos
 * creando una biblioteca es la mejor opción.
 *
 * defineProps({
 *   prop1: {
 *     type: String,
 *     default: '',
 *     required: true,
 *   },
 *
 *   prop2: String,
 * })
 *
 * La función defineProps ya viene dentro del runtime de vue no es necesario hacer un import de la función
 *
 * ACCEDER A LAS PROPS DESDE EL SCRIPT O TEMPLATE
 * Para acceder a las props que hemos definido y hacer uso de ellas dentro de la sección script o template debemos de
 * guardar en una constante el resultado de dicha función de esta forma
 *
 * const props = defineProps(["prop1"]);
 *
 * donde ahora la constante props tiene los valores que se pasaron como propiedades al componente y de hecho si lo imprimimos
 * por consola veremos que esto es verdad y ahora podemos entonces usar estos valores dentro del template haciendo uso del objeto
 * props en el template
 *
 * <h1>{{ props.prop1 }}</h1>
 *
 * o ya sea en el script
 *
 * console.log(props.prop1);
 *
 * COMO POBLAR O PASAR LOS DATOS A LAS PROPIEDADES
 * Si has hecho el ejercicio hasta este punto te habrás dado cuenta que el objeto props tiene el objeto y el nombre de
 * las propiedades pero no los valores ¿como hacemos para darle valores?
 *
 * Muy fácil lo haremos desde un componente padre y con respecto a la sintaxis es similar como si se tratase de un atributo
 * HTML
 *
 * <MiComponente prop1="valor1" />
 * <mi-componente prop1="valor1" />
 *
 * OJO asi como a los atributos de HTML podemos hacerles data binding a las propiedades también y es igual la sintaxis
 *
 * const rounds = 10;
 *
 * <mi-componente v-bind:prop1="rounds" />
 * <MiComponente :prop1="rounds" />
 *
 * Nota el nombre de las props debe escribirse igual que como están dentro del componente o como una sintaxis de kept up case
 * <MiComponente :prop-1="rounds" />
 */
import SuperTitle from "@/components/componentes2/SuperTitle.vue";
import SuperInput from "@/components/componentes2/SuperInput.vue";
import SuperButton from "@/components/componentes2/SuperButton.vue";
</script>

<template>
  <div class="container mx-auto">
    <SuperTitle title="Formulario de registro" class="mb-2" />

    <hr class="pb-2">

    <div class="grid grid-cols-2 gap-x-4 gap-y-4">
      <div class="col-start-1 col-end-2">
        <super-input
            label="Nombre"
            placeholder="Pablo example"
        />
      </div>

      <div class="col-start-2 col-end-3">
        <super-input
            label="Apellido"
            placeholder="Marmol example"
        />
      </div>

      <div class="col-start-1 col-end-3">
        <super-input
            label="Email"
            placeholder="pablomarmol@example.com"
            type="email"
        />
      </div>

      <div class="col-start-1 col-end-3">
        <SuperButton
            color="#7310de"
            text="Enviar"
        />
      </div>
    </div>
  </div>
</template>