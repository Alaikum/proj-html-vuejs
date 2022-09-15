<template>
    <div class="container">
        <div class="main__hero">
            <div class="title">
                <h3>Business Planning</h3>
                <span>Digital Technology</span>
                <h3>Modern Solution!</h3>
            </div>
            <p class="text__hero">When, while the lovely valley teems with vapour around<br> meand the meridian sun
                strikes
                the upper surface</p>
            <div class="button">
                <p class="purple__button">Try It Now</p>
                <p class="blue__button">Explore More</p>
            </div>
        </div>
        <figure>
            <img src="../assets/header.png" alt="">
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
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 190px;

    .main__hero {
        color: $--main-color;


        .title {
            font-size: 60px;
            font-weight: bold;

            span {
                font-weight: 400;
            }
        }

        .text__hero {
            color: $--blue-color;
            padding-top: 60px;
            padding-bottom: 70px;
            font-size: 18px;
        }

        .button {
            display: flex;
            gap: 25px;
            font-size: 18px;
            height: 50px;

            p {
                width: 180px;
                padding-top: 16px;

            }


        }

    }

}
</style>
        