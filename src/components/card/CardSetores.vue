<template>
    <article class="card">
        <img class="card__img" v-bind:src="imagem" :alt="altImagem">
        <h2 class="card__titulo ff-raleway">{{ titulo }}</h2>
        <p class="card__descricao ff-raleway">{{ descricao }}</p>
    </article>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CardSetor',
    props: {
        titulo: {
            type: String,
            default: ''
        },
        imagem:{
            required: true,
            type: String
        },
        altImagem:{
            type: String,
            default: ''
        },
        descricao: {
            type: String,
            default: ''
        }
    }
})
</script>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    padding: 1rem;
}
.card__img{
    border-radius: 1rem;
    width: 100%;
    margin-bottom: 1rem;
}

.card__titulo{
    font-size: 2rem;
    margin: 1.5rem 0;
}
.card__descricao{
    font-size: 1.25rem;
    line-height: 2.5rem;
    font-weight: 500;
    text-align: center;
}
</style>