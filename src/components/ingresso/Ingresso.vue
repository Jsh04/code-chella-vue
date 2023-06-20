
<template>
    <section class="banner">
        <h2 class="banner__titulo ff-calistoga">Garanta seu Ingresso</h2>
    </section>

<section class="formulario">
    <h2 class="formulario__subtitulo ff-calistoga">Preencha o formulário a seguir: </h2>
    <form class="formulario__form" @submit.prevent="enviarDados">
      <div class="formulario__campo">
        <label class="formulario__form-label ff-raleway" for="nome">Nome Completo:</label>
        <input type="text" class="formulario__form-input" name="nome" v-model="nomeCompleto" id="nome" required >
      </div>
      <div class="formulario__campo">
        <label class="formulario__form-label ff-raleway" for="email">Email:</label>
        <input type="email" class="formulario__form-input ff-raleway" v-model="email" name="email" id="email"  required>
      </div>
      <div class="campos__tipo__data">
        <div class="formulario__campo">
          <label class="formulario__form-label ff-raleway" for="tipo">Tipo de ingresso: </label>
          <select v-model="opcaoIngresso" name="tipo" id="tipo" class="formulario__form-input-selecao" required>
            <option value="">Tipo de Ingresso</option>
            <option v-for="(item, index) of listaDeTipos" :key="index" value="index">{{item}}</option>
          </select>
        </div>
        <div class="formulario__campo">
          <label class="formulario__form-label ff-raleway" for="data">Data de nascimento:</label>
        <input  type="date" class="formulario__form-input" v-model="dataNascimento" name="data_nascimento" id="data"  required>
        </div>
      </div>
      <button class="formulario__botao-enviar ff-raleway" type="submit">Avançar!</button>
    </form>
  </section>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from '../banner/Banner.vue'


export default defineComponent({
    name: "IngressoComponent",
    data(){
      return {
        listaDeTipos: ['Pista Premium', 'Pista Premium', 'Cadeiras térreo', 'Cadeiras superiores', 'Rampas'],
        nomeCompleto: '',
        email: '',
        dataNascimento: '',
        opcaoIngresso: ''
      }
    },
    methods: {
      enviarDados(){
        console.log(this.opcaoIngresso)
      }
    }
})
</script>

<style scoped>
.formulario{
    margin-top: 3rem;
    padding: 2rem 4rem;
  }
  
  .formulario__subtitulo{
    font-weight: 400;
    letter-spacing: 0.15rem;
    font-size: 4rem;
  }
  .banner{
    background-image: url('../../assets/imgs/Tema_Verao/Desktop/Imagens/5-ingresso.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 407px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .banner__titulo{
    font-size: 4rem;
    font-weight:bold;
  }

</style>
<style src="./css/ingresso-form.css"></style>