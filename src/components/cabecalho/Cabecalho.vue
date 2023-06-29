<template>
    <header class="cabecalho">
        <router-link to="/"><img class="cabecalho__logo" src="../../assets/imgs/Logo-branco.png" alt="Logo da Code-Chella"></router-link>
        <img class="cabecalho__menu-mobile" @click="mostrarMenu()" src="../../assets/imgs/Tema_Verao/Desktop/icones/pngs/menu.png" alt="">
        <nav :class="[menuAtivo ? 'mostrar__menu' : '']" class="cabecalho__navegacao">
            <ul class="cabecalho__navegacao-lista">
                <li class="cabecalho__navegacao-item"><router-link to="/experiencia">A experiência</router-link> </li>
                <li class="cabecalho__navegacao-item"><router-link to="/setores">Mapa de Setores</router-link></li>
                <li class="cabecalho__navegacao-item"><router-link to="/informacoes"> Informações</router-link></li>
                <li class="cabecalho__navegacao-item" id="ultimo__filho"><router-link to="/ingresso"> Ingresso</router-link></li>
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
.cabecalho__menu-mobile{
  display: none;
}
.cabecalho__navegacao .cabecalho__navegacao-lista{
  list-style: none;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 0;
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
@media screen and (max-width: 768px) {
  .cabecalho{
    flex-direction: column;
  }
  .cabecalho__navegacao {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 540px) {
  .cabecalho{
    flex-direction: row;
    padding: 3rem 2rem;
    justify-content: space-between;
  }
  #ultimo__filho{
    border: none;
  }
  .cabecalho__menu-mobile{
    display: block;
  }
  .cabecalho__navegacao{
    display: none;
  }
  .cabecalho__navegacao-item{
    border-bottom: 1px solid #ffffff;
    display: block;
    font-weight: 700;
    line-height: 40px;
    padding: 1rem 0;
  }
  .cabecalho__logo{
    width: 75%;
  }
  .mostrar__menu{
    display: block;
    position: absolute;
    background-color: var(--azul-escuro-primary);
    padding: 1rem;
    top: 8rem;
    left: 40%;
    transition: all 0.5s;
  }
}

</style>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Cabecalho",
    data(){
      return{
        menuAtivo: false       
      }
    },
    methods: {
    mostrarMenu(){
      this.menuAtivo ? this.menuAtivo = false : this.menuAtivo = true
    }
    }
})
</script>