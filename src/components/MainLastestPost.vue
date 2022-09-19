<template>
  <div class="background__color__white__gradient">
    <div class="container constainer__lastest">
      <div class="lastest__title">
        <p class="purple common__text">Blog</p>
        <p class="lastest__main_title"><span>Lastest </span>Posts</p>
        <p class="common__text">When, while the lovely valley teems with vapour around meand the meridian sun
          strikes the upper surface.</p>
      </div>
      <div class="lastest__img">
        <div class="big__img">
          <p>April 21.2019 - by Paul</p>
          <h4 class="title__img">Amazon gets CCi nod to acquire 49% stake in</h4>
          <div class="button__big__img">
            <p class="text__button">
              When, while the lovely valley teems with vapour around me,and the meridian sun s ...
            </p>
            <p class="white__button button"> Read More</p>
          </div>
        </div>
        <div class="small__img">
          <p>April 21.2019 . by Paul</p>
          <h4 class="title__img">Clearing Corporations get SEBI nod to invest in overnight funds</h4>
          <p> When, while the lovely valley teems with vapour around me,and the meridian sun s ...</p>
          <p class="white__button small__img-button button">Read More</p>
        </div>
        <div class="small__img">
          <p>April 21.2019 . by Paul</p>
          <h4 class="title__img">Shabnam Dhilion, wife of RSSB chief Gurinder Dhillon, passes away in London</h4>
          <p> When, while the lovely valley teems with vapour around me,and the meridian sun s ...</p>
          <p class="white__button small__img-button button">Read More</p>
        </div>
      </div>

    </div>
    <PeopleSay/>
  </div>
</template>
  
<script>
import PeopleSay from './PeopleSay.vue';
export default {
    components: { PeopleSay }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";

.constainer__lastest {
  padding-top: 520px;
  color: $--second-color;

  .lastest__title {
    text-align: center;
    padding-top: 75px;
    max-width: 700px;
    margin: 0 auto;

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
    height: 550px;

    .title__img {
      color: $--main-color;
      font-size: 20px;
    }

    .button{
      color: $--second-color;
      width: 170px;
      height: 60px;
      padding-top: 18px;
      &:hover{
        color: white;
      }
  
    }

    .big__img {


      grid-column: 1 / 3;
      background-image: url(../assets/headway-537308-unsplash-1380x703.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 20px;
      color: $--grey-color;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 25px;
      padding: 0 35px 35px 80px;


      .button__big__img {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text__button {
          max-width: 430px;
        }
      }

    }

    .small__img {

      border: 1px solid black;
      border-radius: 20px;
      background: linear-gradient(137deg, #020230 45%, #183372 99%);
      color: $--grey-color;
      display: flex;
      flex-direction: column;
      padding: 60px 63px 45px 60px;
      gap: 40px;
      position: relative;

      .small__img-button{
        position: absolute;
        bottom: 45px;
      }

    }
  }
}
</style>
  