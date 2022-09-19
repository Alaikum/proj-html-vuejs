<template>
  <div class="background__color__white__gradient">

    <div class="container ">
      <div class="carousel__title">
        <p class="purple common__text">Portfolio</p>
        <div class="arrow__carousel">
          <p class="carousel__main_title"><span>lastest </span>work</p>
          <div class="arrow__icon">
            <span class="arrow"  @click="prevEl">
              <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            </span>
            <span class="arrow" @click="nextEl">
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </span>
          </div>
        </div>

      </div>
      <div class="slide" id="move">
        <figure  v-for="(n, id) in 4" :key="id">
          <img :src="require(`../assets/slide-0${n}.jpg`)" alt="">
          <div class="text">
            <h4 class="common__text">Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum.</p>
          </div>
        </figure>

      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    nextEl(){
      document.getElementById("move").style.transform += "translateX(-50px)"; 
    },
    prevEl(){
      document.getElementById("move").style.transform += "translateX(50px)"; 
    },
  },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";

.carousel__title {

  padding-top: 120px;
  padding-bottom: 100px;

  margin: 0 auto;

  .purple {
    color: $--purple-color;
  }

  .carousel__main_title {
    font-size: 50px;
    padding: 10px 0;

    span {
      font-weight: 900;
    }
  }

  .arrow__carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow__icon {
      display: flex;
      gap: 25px;

      .arrow {
        padding: 12px;
        color: $--purple-color;
        border: 1px solid $--purple-color;
        border-radius: 50%;
        cursor: pointer;

      }
    }
  }


}

.slide {
  // border-radius: 25px;
  // background-color: white;
  display: flex;
  overflow: hidden;
  gap: 50px;

}

figure {
  border-radius: 25px;
  background-color: white;
  width: 500px;
  min-width: 500px;
  // transform: translateX(-110%);
   &:hover{
    background: rgb(247, 97, 107);
    background: linear-gradient(270deg, rgba(247, 97, 107, 1) 0%, rgba(182, 36, 110, 1) 100%);
    cursor: pointer;
    h4{
      color: white;
    }
   }

  img {
    border-radius: 25px;
  }

  .text {
    display: flex;
    justify-content: space-between;
    padding: 25px 30px;

    p {
      color: $--grey-color;
    }
  }
}
</style>
  