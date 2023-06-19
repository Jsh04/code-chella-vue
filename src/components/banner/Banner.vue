<template>
    <section class="banner" :style="{backgroundImage: `url(${urlImage})`}">
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
        urlImage:{
            type: String,
            default: ''
        }
    }
})
</script>
<style scoped>
.banner{
    background-repeat: no-repeat;
    background-size: cover;
    height: 407px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .banner__titulo{
    font-size: 4rem;
    font-weight:bold;
  }

</style>