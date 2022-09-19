<template>
    <ul class="background__color__gradient">
        <li>
            <MainHero />
        </li>
        <li>
            <MainDo />
        </li>
        <li>
            <MainGrow />
        </li>
        <li>
            <MainCarousel />
        </li>
        <li>
            <MainOurPrice />
        </li>
        <li>
            <MainLastestPost />
        </li>
    </ul>
</template>
  
<script>
import MainHero from './MainHero.vue';
import MainDo from './MainDo.vue';
import MainGrow from './MainGrow.vue';
import MainCarousel from './MainCarousel.vue';
import MainOurPrice from './MainOurPrice.vue';
import MainLastestPost from './MainLastestPost.vue';
export default {
    components: { MainHero, MainDo, MainGrow, MainCarousel, MainOurPrice, MainLastestPost }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";


li:nth-child(2n) {
  background: $--main-color;
 
}





</style>
  