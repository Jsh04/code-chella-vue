<template>
    <Banner :banner-image="bannerUrl" :banner-titulo="bannerTitulo"/>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../banner/Banner.vue'
export default defineComponent({
    name: "InformacoesComponent",
    components: {
        Banner
    },
    data(){
        return{
            bannerUrl: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/4-Banner-infos-gerais.png'),
            bannerTitulo: 'Informações Gerais'
        }
    }
})
</script>