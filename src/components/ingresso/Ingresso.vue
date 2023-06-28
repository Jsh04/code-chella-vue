
<template>
   <Banner :banner-image="banner.imagem" :banner-titulo="banner.titulo"/>

<section class="formulario">
    <h2 class="formulario__subtitulo ff-calistoga">Preencha o formulário a seguir: </h2>
    <form class="formulario__form" @submit.prevent="enviarDados()" >
      <div class="formulario__campo">
        <label class="formulario__form-label ff-raleway" for="nome">Nome Completo:</label>
        <input type="text" class="formulario__form-input" @blur="v$.nomeCompleto.$touch" :class="[v$.nomeCompleto.$errors.length != 0 ? 'campo__erro' : '']" name="nome" v-model="nomeCompleto" id="nome" >
        <span class="mensagem_de_erro" v-for="(error, index) in v$.nomeCompleto.$errors" :key="index">
          {{ error.$message }}
        </span>
      </div>
      <div class="formulario__campo">
        <label class="formulario__form-label ff-raleway" for="email">Email:</label>
        <input type="email" class="formulario__form-input ff-raleway" @blur="v$.email.$touch" :class="[v$.email.$errors.length != 0 ? 'campo__erro' : '']" v-model="email" name="email" id="email" >
        <span class="mensagem_de_erro" v-for="(error, index) in v$.email.$errors" :key="index">
          {{ error.$message }}
        </span>
      </div>
      <div class="campos__tipo__data">
        <div class="formulario__campo">
          <label class="formulario__form-label ff-raleway" for="tipo">Tipo de ingresso: </label>
          <select v-model="opcaoIngresso" @blur="v$.opcaoIngresso.$touch" :class="[v$.opcaoIngresso.$errors.length != 0 ? 'campo__erro' : '']" name="tipo" id="tipo" class="formulario__form-input-selecao">
            <option value="">Tipo de Ingresso</option>
            <option v-for="(item) of tipos" :key="item.id" :value="item.id">{{item.descricao}}</option>
          </select>
          <span class="mensagem_de_erro" v-for="(error, index) in v$.opcaoIngresso.$errors" :key="index">
            {{ error.$message }}
          </span>
        </div>
        <div class="formulario__campo">
          <label class="formulario__form-label ff-raleway" for="data">Data de nascimento:</label>
        <input  type="date" class="formulario__form-input" @blur="v$.dataNascimento.$touch" v-model="dataNascimento" :class="[v$.dataNascimento.$errors.length != 0 ? 'campo__erro' : '']" name="data_nascimento" id="data">
        <span class="mensagem_de_erro" v-for="(error, index) in v$.dataNascimento.$errors" :key="index">
          {{ error.$message }}
        </span>
        </div>
      </div>
      <button class="formulario__botao-enviar ff-raleway" type="submit">Avançar!</button>
    </form>
  </section>
  
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Banner from '../banner/Banner.vue'
import {useVuelidate} from '@vuelidate/core'
import { required, email, minLength,helpers } from '@vuelidate/validators'
import { useStore } from "@/store";
import IIngresso from "@/interfaces/IIngresso";
import { CADASTRAR_INGRESSO } from "@/store/tipo-mutacoes";

const maiorQue18 = (value: string) => {
  if(value != ''){
    const dataAtual: Date = new Date();
    const dataEntrada = new Date(value);
    const dataMais18 = new Date(dataEntrada.getUTCFullYear() + 18, dataEntrada.getUTCMonth(), dataEntrada.getUTCDate())
    return dataAtual >=  dataMais18;
  }
    return true;
} 

export default defineComponent({
    name: "IngressoComponent",
    components: {Banner},
    data(){
      return {
        nomeCompleto: '',
        email: '',
        dataNascimento: '',
        opcaoIngresso: '',
        banner: {
          titulo: 'Garanta seu Ingresso',
          imagem: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/5-ingresso.png')
        }
      }
    },
    validations() {
      return {
        nomeCompleto: { 
          required: helpers.withMessage("O campo não poderá ser nulo", required),
          minLength: helpers.withMessage("O campo deverá ter no mínimo 3 caracteres", minLength(3)) 
        },
        email: { 
          email: helpers.withMessage("O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com", email), 
          required: helpers.withMessage("O campo deverá ser obrigatório", required)  
      },
        opcaoIngresso:{
        required: helpers.withMessage("Opção de tipo de ingresso obrigatória", required)
      },
        dataNascimento:{
          maiorQue18: helpers.withMessage("Deve ser de maior de 18 anos para se inscrever", maiorQue18),
          required: helpers.withMessage("Campo data de nascimento obrigatório", required)
        }
      }
      
    },
    methods: {
      async enviarDados(){
        const isFormCorrect = await this.v$.$validate;
        if(!isFormCorrect) return;
        const dados = {
          nome: this.nomeCompleto,
          email: this.email,
          tipo_ingresso: this.opcaoIngresso,
          dataNascimento: new Date(this.dataNascimento)
        } as IIngresso
        const dadosResposta = await this.store.dispatch(CADASTRAR_INGRESSO, dados)
        const dadosRespostaConvertida = await dadosResposta
        const id = await dadosRespostaConvertida.data.id
        this.$router.push(`/ingressoConfirmado/${id}`)
      }
    },
    setup(){
      const store = useStore();
      return { 
        v$: useVuelidate(),
        store, 
        tipos: computed(()=> store.state.tipos) }
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
    color: var(--cinza);
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