<template>
  <!-- uguale al mainHero ma reverse  -->
  <div class="container">
    <div class="main__grow">
      <div class="title">
        <p>Start Your Project</p>
        <h3>Grow Your Business</h3>
        <span>With Our Strategy</span>

      </div>
      <p class="text__grow common__text">When, while the lovely valley teems with vapour around meand the meridian sun
        strikes the upper surface.of the impenetrable foliage of trees, and but a few stray gleams steal into the inner
        sanctuary,</p>
      <div class="button common__text">
        <p class="purple__button">Try It Now</p>
        <p class="blue__button">Explore More</p>
      </div>
    </div>
    <figure>
      <img src="../assets/men-data.png" alt="">
    </figure>

  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";

.container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  padding-top: 100px;
  padding-bottom: 190px;
  // padding-left: 85px;

  .main__grow {
    color: $--main-color;
    max-width: 560px;


    .title {
      font-size: 53px;
      font-weight: bold;
    

      p {
        font-size: 18px;
        font-weight: 400;
        padding-bottom: 45px;
      }
      h3{
        padding-bottom: 30px;
      }

      span {
        font-weight: 400;
     
      }
    }

    .text__grow {
      color: $--blue-color;
      padding-top: 60px;
      padding-bottom: 50px;
      // font-size: 18px;
    }

    .button {
      display: flex;
      gap: 25px;
      // font-size: 18px;
      height: 50px;

      p {
        width: 180px;
        padding-top: 16px;

      }


    }

  }
  figure{
    background-image: url("../assets/nemoodar.png");
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 100px;
img{
  padding-top: 100px;
  max-width: 445px;
}
  }

}
</style>
      