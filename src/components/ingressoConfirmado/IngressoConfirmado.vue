<template>
  <Banner :banner-titulo="banner.titulo" :banner-image="banner.imagem" />
  <section class="ingresso-confirmado">
    <div class="ingresso-confirmado__subtítulo">
      <h2 class="ingresso-confirmado__subtitulo-texto ff-raleway">
        Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
      </h2>
    </div>
    <article class="ingresso-confirmado__dados">
      <div class="ingresso-confirmado__dados-cabecalho">
        <img src="../../assets/imgs/Tema_Verao/Desktop/Logos/Logo-ingresso.png" alt="">
        <img src="../../assets/imgs/Tema_Verao/Desktop/Logos/Simbolo-ingresso.png" alt="">
      </div>
      <div class="ingresso-confirmado__dados-corpo">
        <img src="../../assets/imgs/Tema_Verao/Desktop/icones/pngs/Qr-code-1.png" alt="" >
        <ul class="ingresso-confirmado__dados-lista">
          <li class="ingresso-confirmado__dados-corpo-nome id ff-raleway" id="nome">{{ ingresso?.nome  }}</li>
          <li class="ingresso-confirmado__dados-corpo-item ff-raleway">Ingresso Costesia</li>
          <li class="ingresso-confirmado__dados-corpo-item ff-raleway">{{ pegarTipoIngreso() }}</li>
          <li class="ingresso-confirmado__dados-corpo-item ff-raleway">Data: 11/03</li>
          <li class="ingresso-confirmado__dados-corpo-item ff-raleway">Local: São Paulo-SP</li>
        </ul>
      </div>
    </article>
  </section>
  

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Banner from '../banner/Banner.vue'
import { useStore } from '@/store/index'
import { OBTER_INGRESSO } from '@/store/tipo-actions'
export default defineComponent({
    name: "IngressoConfirmado",
    components: {Banner},
    data(){
      return {
        banner: {
          titulo: 'Seu ingresso está aqui!',
          imagem: require('@/assets/imgs/Tema_Verao/Desktop/Imagens/6-Banner-seu-ingresso-esta-aqui.png')
        }         
      }
    },
    mounted() {
        const { id } = this.$route.params
        this.store.dispatch(OBTER_INGRESSO, id);
    },
    methods: {
      pegarTipoIngreso(){
        return this.tipos.find(tipo => tipo.id == this.ingresso?.tipo_ingresso)?.descricao 
      }
    },
    setup(){
      const store = useStore()

      return{
        ingresso: computed(() => store.state.ingresso),
        tipos: computed(() => store.state.tipos),
        store
      }
    }
})
</script>

<style scoped src="./css/ingresso-confirmado.css"></style>