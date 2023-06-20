<template>
    <header class="cabecalho">
        <router-link to="/"><img src="../../assets/imgs/Logo-branco.png" alt="Logo da Code-Chella"></router-link>
        <nav class="cabecalho__navegacao">
            <ul class="cabecalho__navegacao-lista">
                <li class="cabecalho__navegacao-item"><router-link to="/experiencia">A experiência</router-link> </li>
                <li class="cabecalho__navegacao-item">Mapa de Setores</li>
                <li class="cabecalho__navegacao-item"><a>Informações</a></li>
                <li class="cabecalho__navegacao-item"><router-link to="/ingresso"> Ingresso</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.cabecalho{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--azul-escuro-primary);
}
.cabecalho img{
  color: #ffffff;
  height: auto;
}


.cabecalho__navegacao .cabecalho__navegacao-lista{
  list-style: none;
  color: #ffffff;
  display: inline-block;
}

.cabecalho__navegacao-item{
  font-size: 1.25rem;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  display: inline-block;
  margin-right: 1.5rem;
}
.cabecalho__navegacao-item a{
  color: #ffffff;
  text-decoration: none;
}

.cabecalho__navegacao-item:hover{
  text-decoration: underline;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Cabecalho",
})
</script>