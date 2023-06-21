<template>
    <Cabecalho />
    <main>
      <router-view></router-view>
    </main>
    <Rodape />
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import Rodape from './components/rodape/Rodape.vue';
import Cabecalho from './components/cabecalho/Cabecalho.vue';

export default defineComponent({
    name: 'App',
    components: { Cabecalho, Rodape }
});
</script>

<style>
:root{
  --azul-escuro-primary: #2E7BA2;
  --amarelo: #FACF9D;
  --mostarda:  #DF9010;
  --azul-hover: #519EC5;

}

@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


* {
  margin: 0;
  padding: 0;
}
.ff-raleway { font-family: 'Raleway', sans-serif; }
.ff-calistoga { font-family: 'Calistoga', cursive; }

h1 {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

main{
  background: linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%);
}


h2 {
  color: #154580;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}

.header {
  margin: 1rem auto 2rem;
}

.container {
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-right: auto;
  margin-left: auto;
}

.botao {
  background: #154580;
  color: #ffffff;
  max-width: 270px;
  width: 250px;
  padding: 1rem;
  margin: 0 auto;
  border: 2px solid #154580;
  border-radius: 10px;
  transition: 0.5s ease;
}

.botao:hover {
  border: 2px solid #84EEC1;
  color: #84EEC1;
}

@media (min-width: 576px) {
  .container {
      width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
      width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
      width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
      width: 1140px;
  }
}

</style>