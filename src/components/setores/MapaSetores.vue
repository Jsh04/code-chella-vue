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
    <section class="card ff-raleway">
        <h2 class="card__titulo">Mais detalhes sobre os setores: </h2>
        <div class="card__detalhes">
            <CardSetor :titulo="primeiroCard.titulo" :imagem="primeiroCard.imagem" :descricao="primeiroCard.descricao"
            :alt-imagem="primeiroCard.alt" />
            <CardSetor id="card__meio" :titulo="segundoCard.titulo" :imagem="segundoCard.imagem" :descricao="segundoCard.descricao" :alt-imagem="segundoCard.imagem"/>
            <CardSetor :titulo="terceiroCard.titulo" :alt-imagem="terceiroCard.alt" :imagem="terceiroCard.imagem" :descricao="terceiroCard.descricao"/>
        </div>
        
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '../banner/Banner.vue'
import CardSetor from '../card/CardSetores.vue'
import ICard from '@/interfaces/ICard'
export default defineComponent({
    name: "MapSetores",
    components: { Banner, CardSetor },
    data() {
        return {
            primeiroCard: {
                imagem: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/3-Mapa-de-setores2.png'),
                titulo: 'Pista' as string,
                descricao: 'Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.' as string,
                alt: 'Muitas pessoas em um espaço de show'
            } as ICard,
            segundoCard: {
                titulo: 'Pista Premium',
                imagem: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/3-Mapa-de-setores3.png'),
                alt: 'Espaço de show com bastante fumaça',
                descricao: 'Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.'
            } as ICard,
            terceiroCard: {
                imagem: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/3-Mapa-de-setores4.png'),
                alt: 'Arquibancada com muitas cadeiras',
                descricao: 'Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.',
                titulo: 'Cadeiras'
            } as ICard

        }
    }
})
</script>

<style>
#fundo {
    background-image: url("../../assets/imgs/Tema_Verao/Desktop/Imagens/3-Mapa-de-setores.png");
}
</style>
<style src="./css/mapa-setores.css"></style>
<style src="./css/setores-detalhes.css" scoped></style>
