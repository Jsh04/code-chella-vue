<template>
    <footer class="rodape ff-raleway">
        <div class="rodape__info">
          <div class="rodape__info-redes">
            <img src="../../assets/imgs/Logo-cinza.png" alt="" srcset="">
            <div class="rodape__info-redes-container">
              <p class="rodape__info-redes-texto">Acesse nossas redes: </p>
            <ul class="rodape__info-redes-lista">
              <li class="rodape__info-redes-item"><img src="../../assets/imgs/Tema_Verao/Desktop/icones/pngs/Ícone_whatsapp.png" alt="" ></li>
              <li class="rodape__info-redes-item"><img src="../../assets/imgs/Tema_Verao/Desktop/icones/pngs/Ícone_Twitch.png" alt="" ></li>
              <li class="rodape__info-redes-item"><img src="../../assets/imgs/Tema_Verao/Desktop/icones/pngs/Ícone_twitter.png" alt="" ></li>
              <li class="rodape__info-redes-item"><img src="../../assets/imgs/Tema_Verao/Desktop/icones/pngs/Ícone_instagram.png" alt=""></li>
            </ul>
            </div>
          </div>
          <div class="rodape__info-direitos">
            <p class="rodape__info-direitos-texto">Desenvolvido por Alura</p>
            <p class="rodape__info-direitos-texto">Projeto fictício sem fins comerciais</p>
          </div>
        </div>
      </footer> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Rodape",
})
</script>

<style scoped>
.rodape{
    padding: 3rem 4rem;
    background-color: var(--amarelo);
  }
  
  .rodape__info-redes-lista{
    list-style: none;
  }
  .rodape__info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .rodape__info-redes-texto{
    font-size: 1.5rem;
  }
  
  .rodape__info-redes-container{
    display: flex;
    align-items: center;
    justify-content: start;
  }
  
  .rodape__info-redes-item{
    font-size: 1.25 rem;
    display: inline-block;
  }
  
  .rodape__info-direitos{
    font-size: 1.5rem;
  }
  
</style>