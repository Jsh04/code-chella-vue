<template>
    <Banner :banner-titulo="'A Experiência'" :banner-image="urlImage"/>
    <section class="experiencia">
        <article class="experiencia__card">
            <img src="../../assets/imgs/Tema_Verao/Desktop/Imagens/2-experiencia1.png" alt="">
            <div class="experiencia__card-conteudo">
                <h2 class="experiencia__card-titulo ff-raleway">Acessibilidade e Inclusão</h2>
                <p class="experiencia__card-texto ff-raleway">Nosso evento tenta abraçar um público mais amplo em todos os
                    sentidos, de todas as idades, corpos, gostos
                    e pensamentos! Isso está presente no espaço físico, na sinalização, no treinamento da equipe de apoio,
                    na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para
                    pessoas com deficiência e acompanhantes, pessoas idosas e crianças!</p>
            </div>
        </article>
        <article class="experiencia__card desc-2">
            <div class="experiencia__card-conteudo">
                <h2 class="experiencia__card-titulo setor__2 ff-raleway">Sustentabilidade</h2>
                <p class="experiencia__card-texto setor__2 ff-raleway">Queremos estar aqui celebrando daqui a 50, 100 anos!
                    Por isso,
                    levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos
                    retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.</p>
                </div>
                <img src="../../assets/imgs/Tema_Verao/Desktop/Imagens/2-Experiencia2.png" alt="">
                
        </article>
        <article class="experiencia__card">
            <img src="../../assets/imgs/Tema_Verao/Desktop/Imagens/2-Experiencia3.png" alt="">
            <div class="experiencia__card-conteudo">
                <h2 class="experiencia__card-titulo ff-raleway">Atrações</h2>
                <p class="experiencia__card-texto ff-raleway">Intervenções artísticas e culturais para todos os gostos!
                    Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de
                    cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda
                    gigante e outros brinquedos!</p>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '../banner/Banner.vue'
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Experiencia",
    components: {Banner},
    data(){
        return {
            urlImage: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/2-Experiencia.png')
        }
    }
})
</script>
<style src="./css/experiencia.css"></style>
<style src="./css/experiencia-card.css"></style>