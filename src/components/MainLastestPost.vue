<template>
  <div class="background__color__white__gradient">
    <div class="container">
      <div class="lastest__title">
        <p class="purple common__text">Blog</p>
        <p class="lastest__main_title"><span>Lastest </span>Posts</p>
        <p class="common__text">When, while the lovely valley teems with vapour around meand the meridian sun
          strikes the upper surface.</p>
      </div>
      <div class="lastest__img">
        <div class="big__img"></div>
        <div class="small__img"></div>
        <div class="small__img"></div>
      </div>

    </div>
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
  padding-top: 520px;
  color: $--second-color;

  .lastest__title {
    text-align: center;
    padding-top: 75px;

    .purple {
      color: $--purple-color;
    }

    .lastest__main_title {
      font-size: 50px;
      padding: 10px;

      span {
        font-weight: 900;
      }
    }
  }

  .lastest__img {
padding-top: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    height: 460px;
   

    .big__img{
      
   
      grid-column: 1 / 3;
      background-image: url(../assets/headway-537308-unsplash-1380x703.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 20px;

    }
    .small__img{
    
      border: 1px solid black;
      border-radius: 20px;
      background: linear-gradient(137deg,#020230 45%,#183372 99%);

    }
  }
}
</style>
  