<template>
    <section class="erro">
        <h2 class="erro__titulo">Ops... Não encontramos o que você queria</h2>
        <img class="erro_imagem" src="../../assets/imgs/Tema_Verao/3819740.jpg" alt="">
        <div class="erro__botoes">
            <buttom class="erro__botao"><router-link to="/principal">Tela Inicial</router-link></buttom>
            <buttom class="erro__botao"><router-link to="/ingresso">Garanta seu ingresso</router-link></buttom>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ErroComponent"
})

</script>
<style scoped src="./css/erro.css"></style>