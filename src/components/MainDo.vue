<template>
  <div class="container">
    <div class="do__title">
      <p class="purple common__text">Our Services</p>
      <p class="do__main_title"><span>What</span>We Do</p>
      <p class="common__text">When, whole the lovely vallet teems with vapour around meand the</p>
    </div>

    <div class="do__main_cards">
      <div v-for="(card,id) in cards" :key="id">
        <CardMainDo :card='card' />
      </div>
    </div>

    <div class="button">
      <p class="common__text purple__button">View All Services</p>
    </div>
  </div>
</template>
  
<script>
import CardMainDo from './CardMainDo.vue';
import cards from "../myscript.js";
export default {
  data() {
    return {
      cards
    }
  },
  components: { CardMainDo }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";


.container {
  color: $--second-color;
  padding-bottom: 100px;

  .do__title {
    text-align: center;
    padding-top: 75px;

    .purple {
      color: $--purple-color;
    }

    .do__main_title {
      font-size: 50px;
      padding: 10px;

      span {
        font-weight: 900;
      }
    }
  }

  .do__main_cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 155px;
    padding: 165px 80px 210px;
    
  }

  .button {
    display: flex;
    align-self: center;
    justify-content: center;
    height: 50px;
   

    p {
      width: 215px;
      padding-top: 16px;
    }
  }
}
</style>
  