<template>
    <Banner :banner-titulo="banner.titulo" :banner-image="banner.imagem"/>
      <section class="principal">
        <img class="principal__img" src="../../assets/imgs/Tema_Verao/Desktop/Imagens/homepage1.png" alt="">
        <article class="principal__card">
          <div class="principal__card-cabecalho ff-raleway">
            &lt;11 e 12 de Março&gt;<br>
              Aluródromo de São Paulo
          </div>
          <div class="principal__card-descricao">
            <p class="principal__card-texto ff-raleway">Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro,
              tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
          </div>
          <button class="principal__card-ingresso"><router-link style="color: white; text-decoration:none;" to="/ingresso"><span>Garantir Ingresso!</span><img src="../../assets/imgs/Tema_Verao/Desktop/icones/pngs/ícone_ingresso.png" alt=""></router-link></button>
        </article>
      </section>
      
      <section class="artistas">
        <div class="artistas__cabecalho">
          <h2 class="artistas__cabecalho-titulo ff-calistoga">/Line-Up/</h2>
        </div>
        <div class="artistas__data">
        <span class="artistas__data-linha1"></span>
          <h2 class="artistas__data-subtitulo ff-calistoga">SÁBADO &lt;11/03&gt; </h2>
        <span class="artistas__data-linha2"></span>
      </div>
        <article class="atracoes__descricao">
          <p class="atracoes__descricao-texto ff-raleway">System of a DOM</p>
          <ul class="atracoes__lista-linha1 ff-raleway">
            <li class="atracoes__texto-linha1">Python Maiden</li>
            <li class="atracoes__texto-linha1">Apollo Client 2001</li>
            <li class="atracoes__texto-linha1">Bon Java</li>
            <li class="atracoes__texto-linha1">NickCallback</li>
          </ul>
          <ul class="atracoes__lista-linha2 ff-raleway">
            <li class="atracoes__texto-linha2">Linkin Promises</li>
            <li class="atracoes__texto-linha2">Fullstack Fighters</li>
            <li class="atracoes__texto-linha2">Papa React</li>
            <li class="atracoes__texto-linha2">Angular in Chains</li>
          </ul>
          <ul class="atracoes__lista-linha3 ff-raleway">
            <li class="atracoes__texto-linha3">Agnostic Front-end</li>
            <li class="atracoes__texto-linha3">SlipkNode Pink</li>
            <li class="atracoes__texto-linha3">Pink Flutter</li>
            <li class="atracoes__texto-linha3">Kiss</li>
          </ul>
        </article>
      </section>
      <section class="artistas">
        <div class="artistas__data">
        <span class="artistas__data-linha1"></span>
          <h2 class="artistas__data-subtitulo ff-calistoga">DOMINGO &lt;12/03&gt; </h2>
        <span class="artistas__data-linha2"></span>
      </div>
        <article class="atracoes__descricao">
          <p class="atracoes__descricao-texto ff-raleway">Lana Del Ploy</p>
          <ul class="atracoes__lista-linha1 ff-raleway">
            <li class="atracoes__texto-linha1">Dua Lib</li>
            <li class="atracoes__texto-linha1">The Backnd</li>
            <li class="atracoes__texto-linha1">CSS Styles</li>
            <li class="atracoes__texto-linha1">DJ Query</li>
            <li class="atracoes__texto-linha1">ArrayAna Grande</li>
          </ul>
          <ul class="atracoes__lista-linha2 ff-raleway">
            <li class="atracoes__texto-linha2  ">Miley Cypress</li>
            <li class="atracoes__texto-linha2">The Bootstrap Boys</li>
            <li class="atracoes__texto-linha2">Json Derulo</li>
            <li class="atracoes__texto-linha2">CloudPlay</li>
            <li class="atracoes__texto-linha2">Dev Lovato</li>
          </ul>
          <ul class="atracoes__lista-linha3 ff-raleway">
            <li class="atracoes__texto-linha3">Kylie MiLOG</li>
            <li class="atracoes__texto-linha3">Jenkins Brothers</li>
            <li class="atracoes__texto-linha3">Rubycat Dolls</li>
          </ul>
        </article>
      </section>
      <article class="banner__footer"></article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '../banner/Banner.vue'

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Principal",
    components: {Banner},
    data(){
      return{ 
        banner: {
          titulo: 'Boas-vindas ao #CodeChella2023!',
          imagem: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/Homepage.png')
        }
      }
    },
    methods: {
        paginaIngresso(){
            return ''
        }
    }
})
</script>

<style scoped src="./css/principal.css"></style>
<style scoped src="./css/artistas.css"></style>
<style scoped src="./css/banner.css"> </style>


  


  
    
