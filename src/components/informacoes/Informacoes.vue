<template>
    <Banner :banner-image="bannerUrl" :banner-titulo="bannerTitulo"/>
    <section class="perguntas">
        <h2 class="perguntas__subtitulo ff-calistoga">Perguntas Frequentes:</h2>
            <Informacao v-for="(pergunta, index) of perguntas" :key="index" :titulo="pergunta.titulo"> 
                <p class="resposta__descricao ff-raleway">Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. <a href="#">Confira o line-up em detalhes clicando neste link!</a></p> 
            </Informacao>
    </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../banner/Banner.vue'
import Informacao from '../informacao/Informacao.vue'
export default defineComponent({
    name: "InformacoesComponent",
    components: {
        Banner,
        Informacao
    },
    data(){
        return{
            bannerUrl: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/4-Banner-infos-gerais.png'),
            bannerTitulo: 'Informações Gerais',
            perguntas: [
                {
                    titulo: 'Quais serão as atrações?',
                },
                {
                    titulo: 'Qual é a classificação etária?'
                },
                {
                    titulo: 'Quais são os setores disponíveis?'
                },
                {
                    titulo: 'Quais são os itens proibidos?'
                },
            ]
        }
    }
})
</script>

<style src="./css/informacoes-component.css"></style>