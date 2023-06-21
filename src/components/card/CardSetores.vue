<template>
    <article class="card">
        <img class="card__img" :src="urlImagem" :alt="altImagem">
        <h2 class="card__titulo ff-raleway">{{ titulo }}</h2>
        <p class="card__descricao">{{ descricao }}
        </p>
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
        urlImagem:{
            type: String,
            default: ''
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
}
.card__img{
    border-radius: 1rem;
    width: 20%;
}


</style>