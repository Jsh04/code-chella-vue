<template>
<article class="informacao__drop" @click="mostrarResposta()">
    <div class="informacao__drop-cabecalho">
        <p class="informacao__drop-titulo">{{ titulo }}</p>
        <i class="bi bi-caret-down-fill" :class="[ isActive ? 'icon-active' : 'icon' ]"></i>
    </div>
    <div class="informacao__drop-corpo" :class="[isActive ? '.informacao__drop-corpo' : 'informacao__drop-corpo-desactive' ]">
        <slot></slot>
    </div>
</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: "InformacaoComponent",
    props: { 
            titulo: {
                type: String,
                default: '',
                required: true
            }
    },
    data(){
        return{
            isActive: false
        }
    },
    methods: {
        mostrarResposta(){
            this.isActive ? this.isActive = false : this.isActive = true;
            
        }
    }

})
</script>

<style scoped src="./css/informacao.css"></style>