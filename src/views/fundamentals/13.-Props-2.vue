<script setup>
import SuperTitle from "@/components/componentes2/SuperTitle.vue";
import {reactive} from "vue";
import SuperBlogItem from "@/components/componentes2/SuperBlogItem.vue";
import SuperButton from "@/components/componentes2/SuperButton.vue";

const cryptoNews = reactive([
  {
    titulo: "Bitcoin Alcanza un Nuevo Máximo Histórico",
    descripcion: "En un movimiento alcista impresionante, el precio de Bitcoin superó los $60,000 USD, marcando un nuevo récord en la historia de la criptomoneda.",
    imagen: "https://braindex.academy/app/uploads/2022/05/Bitcoin-y-sus-ciclos-Braindex-Academy.jpg"
  },
  {
    titulo: "Ethereum Lanza la Actualización London",
    descripcion: "La red Ethereum implementó la tan esperada actualización London, que trajo consigo mejoras en tarifas y cambios en el modelo de tarifas para los usuarios.",
    imagen: "https://imageio.forbes.com/specials-images/imageserve/63e5179bc38273483b361abf/Ethereum-coin-token-with-candlestick-chart-background--Digital-currency-/0x0.jpg?format=jpg&width=960"
  },
  {
    titulo: "NFTs Continúan Ganando Popularidad",
    descripcion: "Los NFTs (Tokens No Fungibles) están en auge, con artistas y celebridades participando activamente en el mercado. Se vendió un NFT de arte digital por millones de dólares.",
    imagen: "https://news.america-digital.com/wp-content/uploads/2022/11/Bored_Ape_NFT_sells_for_115_is_the_NFT_hype_coming_to_a_close.jpg"
  },
  {
    titulo: "Banco Central Anuncia Investigación sobre CBDC",
    descripcion: "El banco central de un país importante anunció que está explorando la posibilidad de lanzar una moneda digital respaldada por el gobierno (CBDC) para modernizar el sistema financiero.",
    imagen: "https://media.ambito.com/p/faf527abd9d958bb4599b712e98a05de/adjuntos/239/imagenes/041/024/0041024295/1200x675/smart/cbdcjpg.jpg"
  },
  {
    titulo: "Ransomware Exige Pago en Bitcoin",
    descripcion: "Un ataque de ransomware afectó a una empresa importante, exigiendo el pago de un rescate en Bitcoin. Este incidente destaca los riesgos de seguridad asociados con las criptomonedas.",
    imagen: "https://image.cnbcfm.com/api/v1/image/106895238-1623342422134-GettyImages-1017702832.jpg?v=1623342455&w=1600&h=900"
  }
])
</script>

<template>
  <div class="container mx-auto mt-4">
    <SuperTitle title="CRYPTO NEWS" />

    <hr class="my-4">

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore expedita hic iusto laudantium minima nihil
      officia omnis qui repellendus tempora ullam veniam, voluptate. Asperiores impedit molestiae placeat soluta ullam.
    </p>

    <hr class="my-4">

    <div>
      <SuperBlogItem
          v-for="(item, index) of cryptoNews"
          :key="index"
          :title="item.titulo"
          :description="item.descripcion"
          :image="item.imagen"
      />
    </div>

    <div>
      <SuperButton text="Leer mas en blog" color="#8b5cf6"/>
    </div>
  </div>
</template>