<template>
    <div class="container">
        <div class="people__title">
            <p class="purple common__text">Testimonial</p>
            <p class="people__main_title"><span>What </span>People Say</p>
            <p class="common__text">When, while the lovely valley teems with vapour around meand the meridian sun
                strikes the upper surface.</p>
        </div>
        <div class="people__post">

            <div class="" v-for="(post,i) in postsPeople" :key="i+7">

                <PostPeopleSay :post='post' />
            </div>
        </div>
        <div class="sponsor">

            <div v-for="(el,i) in sponsor" :key="i+99">
                <img :src="require(`../assets/client-${el-1}.png`)" alt="">
            </div>
        </div>
    </div>
</template>
  
<script>
import PostPeopleSay from './PostPeopleSay.vue';
import postsPeople from '../postsPeople'
export default {
    data() {
        return {
            postsPeople,
            sponsor: 5

        }
    },
    components: { PostPeopleSay }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";

.people__title {
    text-align: center;
    padding-top: 160px;
    padding-bottom: 120px;
    max-width: 700px;
    margin: 0 auto;

    .purple {
        color: $--purple-color;
    }

    .people__main_title {
        font-size: 50px;
        padding: 10px;

        span {
            font-weight: 900;
        }
    }
}

.people__post {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 145px;
    text-align: center;

}

.sponsor {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 200px;
    text-align: center;
    padding: 200px 0 260px;
}
</style>
  