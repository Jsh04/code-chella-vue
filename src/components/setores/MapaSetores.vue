<template>
    <Banner :banner-titulo="'Mapa de Setores'" id="fundo" />
    <section class="mapa-setores">
        <img src="../../assets/imgs/Tema_Verao/Desktop/Imagens/3-Mapa-setores1.png" alt="Mapa dos setores do espaço do Show"
            class="mapa-setores__img">
        <ul class="mapa-setores__lista">
            <h2 class="mapa-setores__titulo ff-raleway">Legenda:</h2>
            <li class="mapa-setores__item ff-raleway">Pista Premium</li>
            <li id="vermelho" class="mapa-setores__item ff-raleway">Pista Comum</li>
            <li id="verde-claro" class="mapa-setores__item ff-raleway">Cadeiras térreo</li>
            <li id="preto" class="mapa-setores__item ff-raleway">Cadeiras superiores</li>
            <li class="mapa-setores__item ff-raleway">Rampas</li>
        </ul>
    </section>
    <section class="card">
        <article class="card__item">
            <img class="card__item-img" src="" alt="">
            <h2 class="card__item-titulo ff-raleway">Pista</h2>
            <p class="card__item-descricao">Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço
                amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
            <article class="card__item">
                <img class="card__item-img" src="" alt="">
                <h2 class="card__item-titulo ff-raleway">Pista Premium</h2>
                <p class="card__item-descricao">Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
            </article>
            <article class="card__item">
                <img class="card__item-img" src="" alt="">
                <h2 class="card__item-titulo ff-raleway">Cadeiras</h2>
                <p class="card__item-descricao">Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
            </article>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '../banner/Banner.vue'
import CardSetor from '../card/CardSetores.vue'
export default defineComponent({
    name: "MapSetores",
    components: { Banner},
})
</script>

<style>
#fundo {
    background-image: url("../../assets/imgs/Tema_Verao/Desktop/Imagens/3-Mapa-de-setores.png");
}
</style>
<style src="./css/mapa-setores.css"></style>
<style src="./css/setores-detalhes.css"></style>
