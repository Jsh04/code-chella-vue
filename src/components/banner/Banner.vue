<template>
    <section class="banner" v-bind:style="{ backgroundImage:  'url('+ bannerImage +')'}">
        <h2 class="banner__titulo ff-calistoga">{{bannerTitulo}}</h2>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Banner",
    props:{
        bannerTitulo: {
            type: String,
            default: ''
        },
        bannerImage: {
            type: String,
            default: ''
        }
    }
}
,)

</script>
<style scoped>
.banner{
    background-repeat: no-repeat;
    background-size: cover;
    height: 456px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .banner__titulo{
    font-size: 4rem;
    font-weight:bold;
    color: #444444;
  }

  @media screen and (max-width: 540px) {
    .banner__titulo{
        font-size: 2rem;
    }
  }

</style>